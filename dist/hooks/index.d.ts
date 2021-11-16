declare type TypeTheme = 'light' | 'dark';
export declare const useThemeMode: () => [TypeTheme, Function];
export declare const useColorSet: () => {
    common: {
        primary: string;
        white: string;
        black: string;
        grey: string;
    };
    color: {
        app: string;
        content: string;
        text: string;
        table: {
            th: string;
            td: string;
            background: string;
            border: string;
        };
    };
};
export declare const useBreakPoint: () => {
    notebook: number;
    ipadPro: number;
    ipad: number;
    foldInner: number;
    mobile: number;
    foldFront: number;
};
export {};
