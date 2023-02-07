import type { PICKED_PKG_FIELDS } from "../../constants";
import type { AtomComponentAsset } from 'dumi-assets-types';
import { type ComponentType } from 'react';
import type { ILocalesConfig, IPreviewerProps, IThemeConfig } from './types';
interface ISiteContext {
    pkg: Partial<Record<keyof typeof PICKED_PKG_FIELDS, any>>;
    entryExports: Record<string, any>;
    demos: Record<string, {
        component: ComponentType;
        asset: IPreviewerProps['asset'];
        routeId: string;
    }>;
    components: Record<string, AtomComponentAsset>;
    locales: ILocalesConfig;
    themeConfig: IThemeConfig;
    loading: boolean;
    setLoading: (status: boolean) => void;
}
export declare const SiteContext: import("react").Context<ISiteContext>;
export declare const useSiteData: () => ISiteContext;
export {};
