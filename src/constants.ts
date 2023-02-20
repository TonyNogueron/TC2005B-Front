export interface HeaderConstant {
    label: string;
    path: string;
}

export interface LogoConstant{
    name: string;
    fileName: string;
    alt: string;
}

export const HEADER_ITEMS: HeaderConstant[] = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
];

export const LOGO_CONSTANTS: LogoConstant[] = [
    {
        name: 'blue-logo',
        fileName: 'aulifyBlue.png',
        alt: 'Aulify Logo Blue',
    },
    {
        name: 'white-logo.png',
        fileName: 'aulifyWhite.png',
        alt: 'Aulify Logo White',
    }
];

export const LOGO_DEFAULT = LOGO_CONSTANTS[0];