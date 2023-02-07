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

// src/loaders/markdown/transformer/remarkContainer.ts
var remarkContainer_exports = {};
__export(remarkContainer_exports, {
  default: () => remarkContainer
});
module.exports = __toCommonJS(remarkContainer_exports);
var visit;
var SKIP;
var VALID_CONTAINER_TYPES = ["info", "warning", "success", "error"];
(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();
function remarkContainer() {
  const data = this.data();
  const micromarkExtensions = data.micromarkExtensions.find(({ flow, text }) => flow && "58" in flow && text && "58" in text);
  delete micromarkExtensions.text;
  micromarkExtensions.flow["58"].splice(1, 1);
  return (tree) => {
    visit(tree, (node, i, parent) => {
      if (node.type === "containerDirective" && VALID_CONTAINER_TYPES.includes(node.name)) {
        const attrs = Object.entries(node.attributes || {}).reduce((ret, [name, value]) => `${ret} ${value ? `${name}="${value}"` : name}`, "");
        parent.children.splice(i, 1, {
          type: "html",
          value: `<Container type="${node.name}"${attrs}>`,
          position: node.position
        }, ...(node.children || []).concat({
          type: "html",
          value: "</Container>"
        }));
        return SKIP;
      }
    });
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
