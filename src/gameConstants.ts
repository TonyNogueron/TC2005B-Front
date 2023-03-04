export interface Rank {
    name: string;
    image: string;
    threshold: number;
  }

export interface GameStats{
    name: string;
    value: number;
}

export const RANKS: Rank[] = [
    {
      name: "Cupper",
      image: "",
      threshold: 0,
    },
    {
      name: "Silver",
      image: "",
      threshold: 100,
    },
    {
      name: "Gold",
      image: "",
      threshold: 200,
    },
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