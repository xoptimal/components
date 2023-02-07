import prompts from '../../compiled/prompts';
import Generator from '../Generator/Generator';
interface IOpts {
    path: string;
    target: string;
    baseDir?: string;
    data?: any;
    questions?: prompts.PromptObject[];
}
export default class BaseGenerator extends Generator {
    path: string;
    target: string;
    data: any;
    questions: prompts.PromptObject[];
    constructor({ path, target, data, questions, baseDir }: IOpts);
    prompting(): prompts.PromptObject<string>[];
    writing(): Promise<void>;
}
export {};
