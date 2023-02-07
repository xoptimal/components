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

// src/techStacks/react.ts
var react_exports = {};
__export(react_exports, {
  default: () => ReactTechStack
});
module.exports = __toCommonJS(react_exports);
var import_core = require("@swc/core");
var import_Visitor = __toESM(require("@swc/core/Visitor"));
function createReturnStmt(exp, span) {
  return {
    type: "ReturnStatement",
    span,
    argument: {
      type: "ObjectExpression",
      span,
      properties: [
        {
          type: "KeyValueProperty",
          key: {
            type: "Identifier",
            span,
            value: "default",
            optional: false
          },
          value: exp
        }
      ]
    }
  };
}
var ReactDemoVisitor = class extends import_Visitor.default {
  visitImportDeclaration(n) {
    if (!n.typeOnly) {
      const namespaceImport = n.specifiers.find((s) => s.type === "ImportNamespaceSpecifier");
      const id = namespaceImport ? namespaceImport.local : {
        type: "ObjectPattern",
        span: n.span,
        properties: n.specifiers.map((s) => {
          var _a;
          if (s.type === "ImportDefaultSpecifier" || s.type === "ImportSpecifier" && ((_a = s.imported) == null ? void 0 : _a.type) === "Identifier") {
            return {
              type: "KeyValuePatternProperty",
              span: s.span,
              key: s.type === "ImportSpecifier" ? s.imported : {
                type: "Identifier",
                span: s.span,
                value: "default",
                optional: false
              },
              value: s.local
            };
          }
          return {
            type: "AssignmentPatternProperty",
            span: s.span,
            key: s.local
          };
        }),
        optional: false
      };
      return {
        type: "VariableDeclaration",
        kind: "const",
        declare: false,
        span: n.span,
        declarations: [
          {
            type: "VariableDeclarator",
            span: n.span,
            definite: false,
            id,
            init: {
              span: n.span,
              type: "AwaitExpression",
              argument: {
                type: "CallExpression",
                span: n.span,
                callee: {
                  type: "Import",
                  span: n.span
                },
                arguments: [{ expression: n.source }]
              }
            }
          }
        ]
      };
    }
    return n;
  }
  visitExportDefaultDeclaration(n) {
    if (n.decl.type !== "TsInterfaceDeclaration") {
      return createReturnStmt(n.decl, n.span);
    }
    return n;
  }
  visitExportDefaultExpression(n) {
    return createReturnStmt(n.expression, n.span);
  }
  visitTsType(n) {
    return n;
  }
};
var ReactTechStack = class {
  constructor() {
    this.name = "react";
  }
  isSupported(...[, lang]) {
    return ["jsx", "tsx"].includes(lang);
  }
  transformCode(...[raw, opts]) {
    if (opts.type === "code-block") {
      const isTSX = opts.fileAbsPath.endsWith(".tsx");
      const { code } = (0, import_core.transformSync)(raw, {
        filename: opts.fileAbsPath,
        jsc: {
          parser: {
            syntax: isTSX ? "typescript" : "ecmascript",
            [isTSX ? "tsx" : "jsx"]: true
          },
          target: "es2022"
        },
        module: {
          type: "es6"
        },
        plugin: (m) => new ReactDemoVisitor().visitProgram(m)
      });
      return `React.lazy(async () => {
${code}
})`;
    }
    return raw;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
