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

// src/features/meta.ts
var meta_exports = {};
__export(meta_exports, {
  ATOMS_META_PATH: () => ATOMS_META_PATH,
  TABS_META_PATH: () => TABS_META_PATH,
  default: () => meta_default
});
module.exports = __toCommonJS(meta_exports);
var import_path = __toESM(require("path"));
var import_plugin_utils = require("umi/plugin-utils");
var import_tabs = require("./tabs");
var TABS_META_PATH = "dumi/meta/tabs.ts";
var ATOMS_META_PATH = "dumi/meta/atoms.ts";
var meta_default = (api) => {
  const metaFiles = [];
  api.register({
    key: "modifyRoutes",
    stage: Infinity,
    fn: (routes) => {
      metaFiles.length = 0;
      Object.values(routes).forEach((route) => {
        if (!route.isLayout && !/\*|:/.test(route.path) && route.file && !(0, import_tabs.isTabRouteFile)(route.file)) {
          metaFiles.push({
            index: metaFiles.length,
            file: (0, import_plugin_utils.winPath)(route.file),
            id: route.id
          });
        }
      });
      return routes;
    }
  });
  api.onGenerateFiles(async () => {
    api.writeTmpFile({
      noPluginDir: true,
      path: ATOMS_META_PATH,
      content: "export const components = null;"
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/meta/index.ts",
      content: import_plugin_utils.Mustache.render(`{{#metaFiles}}
import { demos as dm{{{index}}}, frontmatter as fm{{{index}}}, toc as toc{{{index}}}, texts as txt{{{index}}} } from '{{{file}}}?type=meta';
{{/metaFiles}}

export { components } from './atoms';
export { tabs } from './tabs';

export const filesMeta = {
  {{#metaFiles}}
  '{{{id}}}': {
    frontmatter: fm{{{index}}},
    toc: toc{{{index}}},
    texts: txt{{{index}}},
    demos: dm{{{index}}},
    {{#tabs}}
    tabs: {{{tabs}}},
    {{/tabs}}
  },
  {{/metaFiles}}
}

// generate demos data in runtime, for reuse route.id to reduce bundle size
export const demos = Object.entries(filesMeta).reduce((acc, [id, meta]) => {
  // append route id to demo
  Object.values(meta.demos).forEach((demo) => {
    demo.routeId = id;
  });
  // merge demos
  Object.assign(acc, meta.demos);

  // remove demos from meta, to avoid deep clone demos in umi routes/children compatible logic
  delete meta.demos;

  return acc;
}, {});
`, {
        metaFiles: await api.applyPlugins({
          type: api.ApplyPluginsType.modify,
          key: "dumi.modifyMetaFiles",
          initialValue: metaFiles
        })
      })
    });
    api.writeTmpFile({
      noPluginDir: true,
      path: "dumi/meta/runtime.ts",
      content: `import { filesMeta, tabs } from '.';
import deepmerge from '${(0, import_plugin_utils.winPath)(import_path.default.dirname(require.resolve("deepmerge/package")))}';
export const patchRoutes = ({ routes }) => {
  Object.values(routes).forEach((route) => {
    if (filesMeta[route.id]) {
      if (process.env.NODE_ENV === 'production' && (route.meta?.frontmatter?.debug || filesMeta[route.id].frontmatter.debug)) {
        // hide route in production which set hide frontmatter
        delete routes[route.id];
      } else {
        // merge meta to route object
        route.meta = deepmerge(route.meta, filesMeta[route.id]);

        // apply real tab data from id
        route.meta.tabs = route.meta.tabs?.map((id) => {
          const meta = {
            frontmatter: { title: tabs[id].title },
            toc: [],
            texts: [],
          }
          return {
            ...tabs[id],
            meta: filesMeta[id] || meta,
          }
        });
      }
    }
  });
}
`
    });
  });
  api.addRuntimePlugin(() => "@@/dumi/meta/runtime.ts");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ATOMS_META_PATH,
  TABS_META_PATH
});
