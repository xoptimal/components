"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@umijs/utils");
const builder_1 = __importDefault(require("../builder"));
const constants_1 = require("../constants");
exports.default = (api) => {
    api.registerCommand({
        name: constants_1.DEV_COMMAND,
        description: 'start incremental bundless build in watch mode',
        async fn({ args }) {
            const buildWatcher = await (0, builder_1.default)({
                userConfig: api.config,
                cwd: api.cwd,
                pkg: api.pkg,
                watch: true,
                quiet: args.quiet,
            });
            // handle config change
            const closeConfigWatcher = api.service.configManager.watch({
                schemas: api.service.configSchemas,
                onChangeTypes: api.service.configOnChanges,
                async onChange() {
                    utils_1.logger.wait('Config changed, restarting build...');
                    // close watchers
                    buildWatcher.close();
                    closeConfigWatcher();
                    // notify cli.ts to restart
                    process.emit('message', { type: 'RESTART' }, constants_1.DEV_COMMAND);
                },
            });
        },
    });
};
