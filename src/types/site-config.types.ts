export type SiteMode = {
    light: string;
    dark: string;
}

export type SiteConfig = {
    darkMode: boolean;
    theme: {
        color: {
            primary: SiteMode;
        }
    }
}