import aulifyBlue from './resources/images/aulifyBlue.png';
import redBackground from './resources/images/backgrounds/red_background.png';
import blueBackground from './resources/images/backgrounds/blue_background.png';

// Pages import

export const PAGE_TITLE: string = '';

export interface LinkConstant {
    label: string;
    path: string;
}
export interface HeaderConstant {
    label: string;
    path: string;
    id: string;
}

export interface LogoConstant{
    name: string;
    path: string;
    alt: string;
}

export interface backgroundConstant{
    name: string;
    path: string;
    alt: string;
}

export interface ProfileImageConstant{
    name: string;
    path: string;
    alt: string;
}   

export const LINKS: {[key: string]: LinkConstant} = {
    HOME: {
        label: 'Home',
        path: '/',
    },
    ABOUT: {
        label: 'About',
        path: '/about',
    },
    PLAY: {
        label: 'Play',
        path: '/play',
    },
    BIRTH: {
        label: 'Birth',
        path: '/birth',
    },
    REGISTER: {
        label: 'Register',
        path: '/register',
    },
    LOGIN: {
        label: 'Login',
        path: '/login',
    },
    PROFILE: {
        label: 'Profile',
        path: '/profile',
    },
    LEADERBOARD: {
        label: 'Leaderboard',
        path: '/leaderboard',
    },
    // Add the admin section for the admin links
    DASHBOARD: {
        label: 'Dashboard',
        path: '/dashboard',
    },
    
};




export const HEADER_ITEMS: HeaderConstant[] = [
    {
        label: 'Home',
        path: LINKS.HOME.path,
        id: 'home',
    },
    {
        label: 'Leaderboard',
        path: LINKS.LEADERBOARD.path,
        id: 'leaderboard',
    },
    {
        label: 'Play',
        path: LINKS.PLAY.path,
        id: 'play',
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

export const BACKGROUND_CONSTANTS: backgroundConstant[] = [
    {
        name: 'blue-background',
        path: blueBackground,
        alt: 'Blue Background',
    },
    {
        name: 'red-background',
        path: redBackground,
        alt: 'Red Background',
    }
];


export const PROFILE_IMAGE_CONSTANTS: ProfileImageConstant[] = [
    {
        name: 'boy-engineer',
        path: blueBackground,
        alt: '',
    },
    {
        name: 'girl-engineer',
        path: '',
        alt: '',
    },

];

