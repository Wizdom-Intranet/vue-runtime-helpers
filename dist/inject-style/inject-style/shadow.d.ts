export interface StyleSource {
    source: string;
    media?: string;
    moduleName?: string;
    module?: {
        [key: string]: string;
    };
    map?: any;
}
export default function createInjector(context: any, shadowRoot: ShadowRoot): (id: string, style: StyleSource) => void;
export interface StyleElementContent {
    ids: Set<string>;
    styles: string[];
    element?: HTMLStyleElement;
}
