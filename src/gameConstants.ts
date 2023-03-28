export interface Rank {
    name: string;
    image: string;
    threshold: number;
  }

export interface GameStats{
    name: string;
    value: number;
}

export interface kidStatistcs {
  id: number;
  nombre: string;
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
    MATCHES:{
        name: 'Matches played',
        value: 0,
    },
    ROUND:{
        name: 'Highest round',
        value: 0,
    },
    ENEMIES:{
        name: 'Enemies defeated',
        value: 0,
    },
    TIME:{
        name: 'Time played',
        value: 0,
    },
};

export const KID_STATISTICS: { [key: string]: kidStatistcs } = {
  GAME_TIME: {
    id: 1,
    nombre: "Tiempo total de juego",
    value: 0,
  },
  NUM_ERRORS: {
    id: 2,
    nombre: "Errores totales",
    value: 0,
  },
  NUM_TRIES: {
    id: 3,
    nombre: "Intentos totales",
    value: 0,
  },
  TOTAL_SCORE: {
    id: 4,
    nombre: "Puntaje total",
    value: 0,
  },
  NUM_COMPLETED_LEVELS: {
    id: 5,
    nombre: "Niveles completados",
    value: 0,
  },
  TIME_PER_LEVEL: {
    id: 6,
    nombre: "Tiempo por nivel",
    value: 0,
  },
}