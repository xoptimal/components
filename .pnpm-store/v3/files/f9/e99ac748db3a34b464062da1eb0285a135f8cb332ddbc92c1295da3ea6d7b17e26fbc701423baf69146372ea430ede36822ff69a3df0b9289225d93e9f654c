export interface IHighlightText {
    highlighted?: boolean;
    text: string;
}
export interface ISearchNavResult {
    title?: string;
    priority: number;
    hints: {
        type: 'page' | 'title' | 'demo' | 'content';
        link: string;
        priority: number;
        highlightTitleTexts: IHighlightText[];
        highlightTexts: IHighlightText[];
    }[];
}
export declare type ISearchResult = ISearchNavResult[];
export declare const useSiteSearch: () => {
    keywords: string;
    setKeywords: (val: string) => void;
    result: ISearchResult;
    loading: boolean;
};
