import type { IThemeLoadResult } from "../../features/theme/loader";
import { type IMdTransformerOptions, type IMdTransformerResult } from './transformer';
interface IMdLoaderDefaultModeOptions extends Omit<IMdTransformerOptions, 'fileAbsPath'> {
    mode?: 'markdown';
    builtins: IThemeLoadResult['builtins'];
}
interface IMdLoaderDemosModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'meta';
    onResolveDemos?: (demos: NonNullable<IMdTransformerResult['meta']['demos']>) => void;
    onResolveAtomMeta?: (atomId: string, meta: IMdTransformerResult['meta']['frontmatter']) => void;
}
export declare type IMdLoaderOptions = IMdLoaderDefaultModeOptions | IMdLoaderDemosModeOptions;
export default function mdLoader(this: any, content: string): void;
export {};
