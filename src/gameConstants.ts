export interface Ranks{
    name: string;
    image: string;
}

export interface GameStats{
    name: string;
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
    LEVELS:{
        name: 'Levels completed',
    },
    POSITION:{
        name: 'Position',
    },
};