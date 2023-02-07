import { parseCodeFrontmatter } from "../utils";
import type { ExampleBlockAsset } from 'dumi-assets-types';
import type { sync } from 'enhanced-resolve';
export interface IParsedBlockAsset {
    asset: ExampleBlockAsset;
    sources: Record<string, string>;
    frontmatter: ReturnType<typeof parseCodeFrontmatter>['frontmatter'];
}
declare function parseBlockAsset(opts: {
    fileAbsPath: string;
    id: string;
    refAtomIds: string[];
    entryPointCode?: string;
    resolver: typeof sync;
}): Promise<IParsedBlockAsset>;
export default parseBlockAsset;
