import type { ISidebarGroup } from './types';
/**
 * hook for get sidebar data for all nav
 */
export declare const useFullSidebarData: () => Record<string, ISidebarGroup[]>;
interface ITreeSidebarLeaf {
    path: string;
    title: string;
    order: number;
    children: (ITreeSidebarLeaf | ISidebarGroup)[];
}
/**
 * hook for get full sidebar data in tree structure
 */
export declare const useTreeSidebarData: () => ITreeSidebarLeaf[];
/**
 * hook for get sidebar data for current nav
 */
export declare const useSidebarData: () => ISidebarGroup[];
export {};
