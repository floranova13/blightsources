import React from 'react';
import {
  GiStoneBlock,
  GiBottleVapors,
  GiPlantSeed,
  GiMushroomsCluster,
  GiStarSwirl,
  GiMetalBar,
  GiStoneTablet,
  GiCrystalGrowth,
  GiHealthPotion,
  GiPoisonBottle,
  GiFlameSpin,
  GiPerfumeBottle,
  GiPoisonGas,
  GiFog,
  GiVineFlower,
  GiBleedingWound,
  GiPollenDust,
  GiStoneSphere,
  GiBallGlow,
  GiGlowingArtifact,
  GiTwoCoins,
} from 'react-icons/gi';
import { IoFlaskSharp } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { toTitleCase } from '../utils';

const getIcon = (s) => {
  switch (s) {
    case 'coin':
      return <GiTwoCoins />;
    case 'blightstones':
      return <GiStoneBlock />;
    case 'blightichors':
      return <IoFlaskSharp />;
    case 'blightfumes':
      return <GiBottleVapors />;
    case 'blightflora':
      return <GiPlantSeed />;
    case 'blightfungi':
      return <GiMushroomsCluster />;
    case 'blightanomalies':
      return <GiStarSwirl />;
    case 'blightfoils':
      return <GiMetalBar />;
    case 'crystali':
      return <GiCrystalGrowth />;
    case 'leylodes':
      return <GiStoneTablet />;
    case 'lifeblight':
      return <GiHealthPotion />;
    case 'blightvenoms':
      return <GiPoisonBottle />;
    case 'blightmares':
      return <GiFlameSpin />;
    case 'rushblight':
      return <GiPerfumeBottle />;
    case 'miasmeta':
      return <GiPoisonGas />;
    case 'blightmists':
      return <GiFog />;
    case 'blightblooms':
      return <GiPlantSeed />;
    case 'blightpillars':
      return <GiMushroomsCluster />;
    case 'blightsnarls':
      return <GiStarSwirl />;
    case 'blightshrooms':
      return <GiVineFlower />;
    case 'blightbleeds':
      return <GiBleedingWound />;
    case 'sporesprawls':
      return <GiPollenDust />;
    case 'tokens':
      return <GiStoneSphere />;
    case 'loci':
      return <GiBallGlow />;
    case 'vestiges':
      return <GiGlowingArtifact />;
    default:
      return <></>;
  }
};

const Icon = ({ icon }) => {
  console.log(icon);

  return (
    <>
      <div data-tip={toTitleCase(icon)}>{getIcon(icon)}</div>
      <ReactTooltip />
    </>
  );
};

export default Icon;
