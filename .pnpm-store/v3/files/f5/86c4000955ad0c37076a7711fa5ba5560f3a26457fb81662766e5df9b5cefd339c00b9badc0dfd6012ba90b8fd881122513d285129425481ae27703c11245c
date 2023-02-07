"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedTypeDepsForPkg = exports.getDepPkgPath = exports.getDtsInfoForPkgPath = exports.getPkgNameWithTypesOrg = exports.getPkgNameFromTypesOrg = exports.getTypeFromPkgJson = exports.getCache = void 0;
const utils_1 = require("@umijs/utils");
const file_system_cache_1 = __importDefault(require("file-system-cache"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const caches = {};
/**
 * get file-system cache for specific namespace
 */
function getCache(ns) {
    var _a;
    // return fake cache if cache disabled
    if (process.env.FATHER_CACHE === 'none') {
        return { set() { }, get() { }, setSync() { }, getSync() { } };
    }
    return ((_a = caches[ns]) !== null && _a !== void 0 ? _a : (caches[ns] = (0, file_system_cache_1.default)({ basePath: path_1.default.join(constants_1.CACHE_PATH, ns) })));
}
exports.getCache = getCache;
/**
 * get valid type field value from package.json
 */
function getTypeFromPkgJson(pkg) {
    return pkg.types || pkg.typing || pkg.typings;
}
exports.getTypeFromPkgJson = getTypeFromPkgJson;
/**
 * restore xxx for @types/xxx
 */
function getPkgNameFromTypesOrg(name) {
    return name.replace('@types/', '').replace(/^([^]+?)__([^]+)$/, '@$1/$2');
}
exports.getPkgNameFromTypesOrg = getPkgNameFromTypesOrg;
/**
 * get @types/xxx for xxx
 */
function getPkgNameWithTypesOrg(name) {
    return `@types/${name.replace('@', '').replace('/', '__')}`;
}
exports.getPkgNameWithTypesOrg = getPkgNameWithTypesOrg;
/**
 * get d.ts file path and package path for NPM package.json path
 */
function getDtsInfoForPkgPath(pkgPath) {
    const pkg = require(pkgPath);
    const info = { pkgPath: pkgPath, dtsPath: getTypeFromPkgJson(pkg) };
    if (info.dtsPath) {
        // resolve builtin types
        info.dtsPath = path_1.default.resolve(path_1.default.dirname(pkgPath), info.dtsPath);
    }
    else {
        // resolve @types/xxx pkg
        try {
            info.pkgPath = require.resolve(`${getPkgNameWithTypesOrg(pkg.name)}/package.json`, {
                paths: [pkgPath],
            });
            info.dtsPath = path_1.default.resolve(path_1.default.dirname(info.pkgPath), getTypeFromPkgJson(require(info.pkgPath)));
        }
        catch {
            return null;
        }
    }
    return info;
}
exports.getDtsInfoForPkgPath = getDtsInfoForPkgPath;
/**
 * get package.json path for specific NPM package
 * @see https://github.com/nodejs/node/issues/33460
 */
function getDepPkgPath(dep, cwd) {
    try {
        return require.resolve(`${dep}/package.json`, { paths: [cwd] });
    }
    catch {
        return utils_1.pkgUp.pkgUpSync({
            cwd: require.resolve(dep, { paths: [cwd] }),
        });
    }
}
exports.getDepPkgPath = getDepPkgPath;
/**
 * get all nested type dependencies for specific NPM package
 */
function getNestedTypeDepsForPkg(name, cwd, externals, deps) {
    const isWithinTypes = name.startsWith('@types/');
    const pkgName = isWithinTypes ? getPkgNameFromTypesOrg(name) : name;
    const typesPkgName = isWithinTypes ? name : getPkgNameWithTypesOrg(name);
    const isCollected = (deps === null || deps === void 0 ? void 0 : deps.hasOwnProperty(name)) || (deps === null || deps === void 0 ? void 0 : deps.hasOwnProperty(typesPkgName));
    const isExternalized = externals[pkgName] || externals[typesPkgName];
    if (deps && (isCollected || isExternalized))
        return deps;
    const isTopLevel = !deps;
    const dtsInfo = getDtsInfoForPkgPath(getDepPkgPath(name, cwd));
    const pkgJson = dtsInfo ? require(dtsInfo.pkgPath) : {};
    const pkgDeps = pkgJson.dependencies || {};
    // collect nested packages and exclude self
    deps !== null && deps !== void 0 ? deps : (deps = {});
    Object.assign(deps, isTopLevel ? {} : { [pkgJson.name]: pkgJson.version });
    Object.keys(pkgDeps).forEach((item) => {
        getNestedTypeDepsForPkg(item, dtsInfo.pkgPath, externals, deps);
    });
    return deps;
}
exports.getNestedTypeDepsForPkg = getNestedTypeDepsForPkg;
