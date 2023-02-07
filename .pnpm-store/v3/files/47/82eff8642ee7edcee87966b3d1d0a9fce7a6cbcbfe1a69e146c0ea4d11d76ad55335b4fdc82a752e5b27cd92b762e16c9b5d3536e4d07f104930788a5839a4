import yParser from '../../compiled/yargs-parser';
interface IOpts {
    baseDir: string;
    args: yParser.Arguments;
}
declare class Generator {
    baseDir: string;
    args: yParser.Arguments;
    prompts: any;
    constructor({ baseDir, args }: IOpts);
    run(): Promise<void>;
    prompting(): any;
    writing(): Promise<void>;
    copyTpl(opts: {
        templatePath: string;
        target: string;
        context: object;
    }): void;
    copyDirectory(opts: {
        path: string;
        context: object;
        target: string;
    }): void;
}
export default Generator;
