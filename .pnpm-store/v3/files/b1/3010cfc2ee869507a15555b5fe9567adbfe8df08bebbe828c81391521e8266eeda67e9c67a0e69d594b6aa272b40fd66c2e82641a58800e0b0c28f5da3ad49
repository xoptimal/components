"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTsconfig = void 0;
const utils_1 = require("@umijs/utils");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// @ts-ignore
const ts_transform_paths_1 = __importDefault(require("../../../../compiled/@zerollup/ts-transform-paths"));
const utils_2 = require("../../../utils");
/**
 * get parsed tsconfig.json for specific path
 */
function getTsconfig(cwd) {
    // use require() rather than import(), to avoid jest runner to fail
    // ref: https://github.com/nodejs/node/issues/35889
    const ts = require('typescript');
    const tsconfigPath = ts.findConfigFile(cwd, ts.sys.fileExists);
    if (tsconfigPath) {
        const tsconfigFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
        return ts.parseJsonConfigFileContent(tsconfigFile.config, ts.sys, path_1.default.dirname(tsconfigPath));
    }
}
exports.getTsconfig = getTsconfig;
/**
 * get declarations for specific files
 */
async function getDeclarations(inputFiles, opts) {
    const cache = (0, utils_2.getCache)('bundless-dts');
    const output = [];
    // use require() rather than import(), to avoid jest runner to fail
    // ref: https://github.com/nodejs/node/issues/35889
    const ts = require('typescript');
    const tsconfig = getTsconfig(opts.cwd);
    if (tsconfig) {
        // check tsconfig error
        // istanbul-ignore-if
        if (tsconfig.errors.length) {
            throw new Error(`Error parsing tsconfig.json content: ${utils_1.chalk.redBright(ts.flattenDiagnosticMessageText(tsconfig.errors[0].messageText, '\n'))}`);
        }
        // enable declarationMap by default in development mode
        if (process.env.NODE_ENV === 'development' &&
            tsconfig.options.declaration &&
            tsconfig.options.declarationMap !== false) {
            tsconfig.options.declarationMap = true;
        }
        // remove paths which out of cwd, to avoid transform to relative path by ts-paths-transformer
        Object.keys(tsconfig.options.paths || {}).forEach((item) => {
            const pathAbsTarget = path_1.default.resolve(tsconfig.options.pathsBasePath, tsconfig.options.paths[item][0]);
            if (!(0, utils_1.winPath)(pathAbsTarget).startsWith(`${(0, utils_1.winPath)(opts.cwd)}/`)) {
                delete tsconfig.options.paths[item];
                utils_1.logger.debug(`Remove ${item} from tsconfig.paths, because it's out of cwd.`);
            }
        });
        const tsHost = ts.createCompilerHost(tsconfig.options);
        const cacheKeys = inputFiles.reduce((ret, file) => ({
            ...ret,
            // format: {path:mtime:config}
            [file]: [
                file,
                fs_1.default.lstatSync(file).mtimeMs,
                JSON.stringify(tsconfig.options),
            ].join(':'),
        }), {});
        const cacheRets = {};
        tsHost.writeFile = (fileName, declaration, _a, _b, sourceFiles) => {
            var _c;
            var _d;
            const sourceFile = sourceFiles[0].fileName;
            // only collect dts for input files, to avoid output error in watch mode
            // ref: https://github.com/umijs/father/issues/43
            if (inputFiles.includes(sourceFile)) {
                const ret = {
                    file: path_1.default.basename(fileName),
                    content: declaration,
                    sourceFile,
                };
                output.push(ret);
                // group cache by file (d.ts & d.ts.map)
                (_c = cacheRets[_d = cacheKeys[sourceFile]]) !== null && _c !== void 0 ? _c : (cacheRets[_d] = []);
                cacheRets[cacheKeys[sourceFile]].push(ret);
            }
        };
        // use cache first
        inputFiles = inputFiles.filter((file) => {
            const cacheRet = cache.getSync(cacheKeys[file], '');
            if (!cacheRet)
                return true;
            output.push(...cacheRet);
            return false;
        });
        const program = ts.createProgram(inputFiles, tsconfig.options, tsHost);
        // using ts-paths-transformer to transform tsconfig paths to relative path
        // reason: https://github.com/microsoft/TypeScript/issues/30952
        // ref: https://www.npmjs.com/package/@zerollup/ts-transform-paths
        const result = program.emit(undefined, undefined, undefined, true, {
            afterDeclarations: [(0, ts_transform_paths_1.default)(program).afterDeclarations],
        });
        // check compile error
        // istanbul-ignore-if
        if (result.diagnostics.length) {
            result.diagnostics.forEach((d) => {
                const loc = ts.getLineAndCharacterOfPosition(d.file, d.start);
                const rltPath = (0, utils_1.winPath)(path_1.default.relative(opts.cwd, d.file.fileName));
                const errMsg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
                utils_1.logger.error(`${utils_1.chalk.blueBright(rltPath)}:${
                // correct line number & column number, ref: https://github.com/microsoft/TypeScript/blob/93f2d2b9a1b2f8861b49d76bb5e58f6e9f2b56ee/src/compiler/tracing.ts#L185
                `${utils_1.chalk.yellow(loc.line + 1)}:${utils_1.chalk.yellow(loc.character + 1)}`} - ${utils_1.chalk.gray(`TS${d.code}:`)} ${errMsg}`);
            });
            throw new Error('Declaration generation failed.');
        }
        // save cache
        Object.keys(cacheRets).forEach((key) => cache.setSync(key, cacheRets[key]));
        // process no d.ts inputs, fallback to empty array
        inputFiles.forEach((file) => {
            const cacheKey = cacheKeys[file];
            if (!cacheRets[cacheKey])
                cache.setSync(cacheKey, []);
        });
    }
    return output;
}
exports.default = getDeclarations;
