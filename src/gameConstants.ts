import BronceImg from './resources/images/eloImages/Bronce.png';
import PlataImg from './resources/images/eloImages/Plata.png';
import OroImg from './resources/images/eloImages/Oro.png';
import PlatinoImg from './resources/images/eloImages/Platino.png';
import DiamanteImg from './resources/images/eloImages/Diamante.png';
import Challenger from './resources/images/eloImages/Challenger.png';


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
      name: "Bronce",
      image: BronceImg,
      threshold: 0,
    },
    {
      name: "Plata",
      image: PlataImg,
      threshold: 1500,
    },
    {
      name: "Oro",
      image: OroImg,
      threshold: 2500,
    },
    {
      name: "Platino",
      image: PlatinoImg,
      threshold: 3500,
    },
    {
      name: "Diamante",
      image: DiamanteImg,
      threshold: 4500,
    },
    {
      name: "Challenger",
      image: Challenger,
      threshold: 5500,
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