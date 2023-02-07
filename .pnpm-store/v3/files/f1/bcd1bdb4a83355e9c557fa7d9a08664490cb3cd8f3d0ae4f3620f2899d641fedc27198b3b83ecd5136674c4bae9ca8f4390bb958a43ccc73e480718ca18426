var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/assetParsers/block.ts
var block_exports = {};
__export(block_exports, {
  default: () => block_default
});
module.exports = __toCommonJS(block_exports);
var import_utils = require("../utils");
var import_esbuild = require("@umijs/bundler-utils/compiled/esbuild");
var import_assert = __toESM(require("assert"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
async function parseBlockAsset(opts) {
  const asset = {
    type: "BLOCK",
    id: opts.id,
    refAtomIds: opts.refAtomIds,
    dependencies: {}
  };
  const result = {
    asset,
    sources: {},
    frontmatter: null
  };
  const deferrer = (0, import_esbuild.build)({
    write: false,
    bundle: true,
    logLevel: "silent",
    format: "esm",
    target: "esnext",
    entryPoints: [import_path.default.basename(opts.fileAbsPath)],
    absWorkingDir: import_path.default.dirname(opts.fileAbsPath),
    plugins: [
      {
        name: "plugin-dumi-collect-deps",
        setup: (builder) => {
          builder.onResolve({ filter: /.*/ }, (args) => {
            if (args.kind !== "entry-point" && !args.path.startsWith(".")) {
              const resolved = opts.resolver(args.resolveDir, args.path);
              (0, import_assert.default)(resolved, `Can't resolve ${args.path} from ${args.resolveDir}`);
              const pkgJsonPath = import_plugin_utils.pkgUp.pkgUpSync({
                cwd: resolved
              });
              if (pkgJsonPath) {
                const pkg = require(pkgJsonPath);
                asset.dependencies[pkg.name] = {
                  type: "NPM",
                  value: pkg.version
                };
              }
              return { path: args.path, external: true };
            }
            return {
              path: args.kind !== "entry-point" ? opts.resolver(args.resolveDir, args.path) : import_path.default.join(args.resolveDir, args.path),
              pluginData: { kind: args.kind, resolveDir: args.resolveDir }
            };
          });
          builder.onLoad({ filter: /.*/ }, (args) => {
            const ext = import_path.default.extname(args.path);
            const isModule = [".js", ".jsx", ".ts", ".tsx"].includes(ext);
            const isPlainText = [
              ".css",
              ".less",
              ".sass",
              ".scss",
              ".styl",
              ".json"
            ].includes(ext);
            const isEntryPoint = args.pluginData.kind === "entry-point";
            const filename = isEntryPoint ? `index${ext}` : (0, import_plugin_utils.winPath)(import_path.default.relative(import_path.default.dirname(opts.fileAbsPath), args.path)).replace(/^(\.?\.\/)+/g, "");
            if (isModule || isPlainText) {
              asset.dependencies[filename] = {
                type: "FILE",
                value: opts.entryPointCode ?? import_fs.default.readFileSync(args.path, "utf-8")
              };
              if (isEntryPoint) {
                const { code, frontmatter } = (0, import_utils.parseCodeFrontmatter)(asset.dependencies[filename].value);
                if (frontmatter) {
                  asset.dependencies[filename].value = code;
                  result.frontmatter = frontmatter;
                  ["description", "title", "snapshot", "keywords"].forEach((key) => {
                    asset[key] = frontmatter == null ? void 0 : frontmatter[key];
                  });
                }
              }
              if (!isEntryPoint || !opts.entryPointCode) {
                result.sources[filename] = args.path;
              }
              return {
                contents: isModule ? asset.dependencies[filename].value : "",
                loader: isModule ? ext.slice(1) : "text"
              };
            }
          });
        }
      }
    ]
  });
  try {
    await deferrer;
  } catch {
  }
  return result;
}
var block_default = parseBlockAsset;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
