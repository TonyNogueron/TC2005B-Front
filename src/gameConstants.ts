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
      image: "https://www.chiboost.net/storage/blog/2018/08/Bronze_Rank_of_League_of_Legends-compressor-230x230.png",
      threshold: 0,
    },
    {
      name: "Silver",
      image: "https://www.chiboost.net/storage/blog/2018/08/silver_5-compressor.png",
      threshold: 100,
    },
    {
      name: "Gold",
      image: "https://www.chiboost.net/storage/blog/2018/08/gold_5-compressor.png",
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