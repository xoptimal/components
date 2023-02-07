"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@umijs/utils");
exports.default = (api) => {
    api.addImportsCheckup(({ file, imports, mergedAlias, mergedExternals }) => {
        const errors = [];
        imports.forEach((i) => {
            var _a, _b, _c;
            const pkgName = (_a = i.path.match(/^(?:@[a-z\d][\w-.]*\/)?[a-z\d][\w-.]*/i)) === null || _a === void 0 ? void 0 : _a[0];
            const aliasKeys = Object.keys(mergedAlias);
            if (pkgName &&
                api.pkg.name !== pkgName &&
                !((_b = api.pkg.dependencies) === null || _b === void 0 ? void 0 : _b[pkgName]) &&
                !((_c = api.pkg.peerDependencies) === null || _c === void 0 ? void 0 : _c[pkgName]) &&
                aliasKeys.every((k) => k !== i.path && !i.path.startsWith(`${k}/`)) &&
                !mergedExternals[i.path]) {
                let resolvedPath;
                try {
                    resolvedPath = require.resolve(pkgName, { paths: [api.cwd] });
                }
                catch {
                    // take unresolved modules as third party modules
                    // because require.resolve not support esm package
                    resolvedPath = 'node_modules';
                }
                // for compatible with Node.js standard library, such as fs, path, etc.
                if (resolvedPath.includes('node_modules')) {
                    errors.push({
                        type: 'error',
                        problem: `Source depend on \`${pkgName}\` but it is not in the \`dependencies\` or \`peerDependencies\`
            ${utils_1.chalk.gray(`at ${file}`)}`,
                        solution: 'Add it to the `dependencies` or `peerDependencies` of the package.json file',
                    });
                }
            }
        });
        return errors;
    });
};
