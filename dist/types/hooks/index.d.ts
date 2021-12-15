declare type TypeTheme = 'light' | 'dark';
export declare const useThemeMode: () => [TypeTheme, () => void];
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
    pantone: {
        [key: number]: string[];
    };
};
export declare const useBreakPoint: () => import("..").IBreakPoint;
export {};
