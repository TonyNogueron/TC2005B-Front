export interface Ranks{
    name: string;
    image: string;
}

export interface GameStats{
    name: string;
    value: number;
}

export const RANKS: Ranks[] = [
    {
        name: 'Cupper',
        image: ''
    },
    {
        name: 'Silver',
        image: '',
    },
    {
        name: 'Gold',
        image: '',
    }
];

export const GAME_STATS:{[key: string]: GameStats} = {
    HIGHEST:{
        name: 'Highest round',
        value: 0,
    },
    ENEMIES:{
        name: 'Enemies defeated',
        value: 0,
    },
    MATCHES:{
        name: 'Matches played',
        value: 0,
    },
    

};