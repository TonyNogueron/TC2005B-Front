import aulifyBlue from './resources/images/aulifyBlue.png';
import redBackground from './resources/images/backgrounds/red_background.png';
import blueBackground from './resources/images/backgrounds/blue_background.png';
import whiteBackground from './resources/images/backgrounds/white_background.png';
// Pages import

export const PAGE_TITLE: string = '';
export const apiURL = "https://jgvuug8gmj.execute-api.us-east-1.amazonaws.com";

export interface LinkConstant {
    label: string;
    path: string;
    id: string;
}
export interface HeaderConstant {
    label: string;
    path: string;
    id: string;
}

export interface LogoConstant {
    name: string;
    path: string;
    alt: string;
}

export interface backgroundConstant {
    name: string;
    path: string;
    alt: string;
}

export interface ProfileImageConstant {
    name: string;
    path: string;
    alt: string;
}

export interface gradoAcademico {
    id: number;
    nombre: string;
}

export interface estadosDeMexico {
    id: number;
    nombre: string;
}



export const LINKS: { [key: string]: LinkConstant } = {
    HOME: {
        label: 'Inicio',
        path: '/',
        id: 'home',

    },
    ABOUT: {
        label: 'Acerca de',
        path: '/about',
        id: 'about',
    },
    PLAY: {
        label: 'Jugar',
        path: '/play',
        id: 'play',
    },
    BIRTH: {
        label: 'Birth',
        path: '/birth',
        id: 'birth',
    },
    REGISTER: {
        label: 'Registro',
        path: '/register',
        id: 'register',
    },
    LOGIN: {
        label: 'Iniciar sesión',
        path: '/login',
        id: 'login',
    },
    PROFILE: {
        label: 'Perfil',
        path: '/profile',
        id: 'profile',
    },
    LEADERBOARD: {
        label: 'Tablero de clasificación',
        path: '/leaderboard',
        id: 'leaderboard',
    },

    FORGOT_PASSWORD: {
        label: 'Forgot Password',
        path: '/forgotPassword',
        id: 'forgot-password',
    },

    // Add the admin section for the admin links
    DASHBOARD: {
        label: 'Dashboard',
        path: '/dashboard',
        id: 'dashboard',
    },

};


export const HEADER_ITEMS: HeaderConstant[] = [
    {
        label: 'Inicio',
        path: LINKS.HOME.path,
        id: 'home',
    },
    {
        label: 'Clasificación',
        path: LINKS.LEADERBOARD.path,
        id: 'leaderboard',
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
    },
    {
        name: 'white-background',
        path: whiteBackground,
        alt: 'White Background',
    },
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

export const GRADO_ACADEMICO: gradoAcademico[] = [
    {
        id: 1,
        nombre: '3ro de Primaria',
    },
    {
        id: 2,
        nombre: '4to de Primaria',
    },
    {
        id: 3,
        nombre: '5to de Primaria',
    },
    {
        id: 4,
        nombre: '6to de Primaria',
    },
    {
        id: 5,
        nombre: '1ro de Secundaria',
    },
    {
        id: 6,
        nombre: '2do de Secundaria',
    },
    {
        id: 7,
        nombre: '3ro de Secundaria',
    },

];

export const ESTADOS_DE_MEXICO: estadosDeMexico[] = [
    {
        id: 1,
        nombre: 'Aguascalientes',
    },
    {
        id: 2,
        nombre: 'Baja California',
    },
    {
        id: 3,
        nombre: 'Baja California Sur',
    },
    {
        id: 4,
        nombre: 'Campeche',
    },
    {
        id: 5,
        nombre: 'Chiapas',
    },
    {
        id: 6,
        nombre: 'Chihuahua',
    },
    {
        id: 7,
        nombre: 'Coahuila',
    },
    {
        id: 8,
        nombre: 'Colima',
    },
    {
        id: 9,
        nombre: 'Ciudad de México',
    },
    {
        id: 10,
        nombre: 'Durango',
    },
    {
        id: 11,
        nombre: 'Guanajuato',
    },
    {
        id: 12,
        nombre: 'Guerrero',
    },
    {
        id: 13,
        nombre: 'Hidalgo',
    },
    {
        id: 14,
        nombre: 'Jalisco',
    },
    {
        id: 15,
        nombre: 'México',
    },
    {
        id: 16,
        nombre: 'Michoacán',
    },
    {
        id: 17,
        nombre: 'Morelos',
    },
    {
        id: 18,
        nombre: 'Nayarit',
    },
    {
        id: 19,
        nombre: 'Nuevo León',
    },
    {
        id: 20,
        nombre: 'Oaxaca',
    },
    {
        id: 21,
        nombre: 'Puebla',
    },
    {
        id: 22,
        nombre: 'Querétaro',
    },
    {
        id: 23,
        nombre: 'Quintana Roo',
    },
    {
        id: 24,
        nombre: 'San Luis Potosí',
    },
    {
        id: 25,
        nombre: 'Sinaloa',
    },
    {
        id: 26,
        nombre: 'Sonora',
    },
    {
        id: 27,
        nombre: 'Tabasco',
    },
    {
        id: 28,
        nombre: 'Tamaulipas',
    },
    {
        id: 29,
        nombre: 'Tlaxcala',
    },
    {
        id: 30,
        nombre: 'Veracruz',
    },
    {
        id: 31,
        nombre: 'Yucatán',
    },
    {
        id: 32,
        nombre: 'Zacatecas',
    },
];
