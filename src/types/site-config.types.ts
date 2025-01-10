import { MaxWidthOption } from "@/components/layouts/Container/Container";

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
    },
    layout: {
        container?: MaxWidthOption
    }
}