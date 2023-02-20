import aulifyBlue from './resources/images/aulifyBlue.png';

export interface HeaderConstants {
    label: string;
    path: string;
}

export interface LogoConstants{
    name: string;
    path: string;
    alt: string;
}

export const HEADER_ITEMS: HeaderConstants[] = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'About',
        path: '/about'
    },
];

export const LOGO_CONSTANTS: LogoConstants[] = [
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