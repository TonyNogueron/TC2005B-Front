import aulifyBlue from './resources/images/aulifyBlue.png';

export interface HeaderConstant {
    label: string;
    path: string;
}

export interface LogoConstant{
    name: string;
    path: string;
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
        path: aulifyBlue,
        alt: 'Aulify Logo Blue',
    },
    {
        name: 'white-logo.png',
        path: '/resources/images/aulifyWhite.png',
        alt: 'Aulify Logo White',
    }
];