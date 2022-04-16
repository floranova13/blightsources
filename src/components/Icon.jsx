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
  GiMushrooms,
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
      return <GiStoneBlock color='#8ac4ffff' />;
    case 'blightichors':
      return <IoFlaskSharp color='#2b3a67ff' />;
    case 'blightfumes':
      return <GiBottleVapors color='#f7b2b7ff' />;
    case 'blightflora':
      return <GiPlantSeed color='#132a13ff' />;
    case 'blightfungi':
      return <GiMushroomsCluster color='#c5efcbff' />;
    case 'blightanomalies':
      return <GiStarSwirl color='#432534ff' />;
    case 'blightfoils':
      return <GiMetalBar color='#8ac4ffff' />;
    case 'crystali':
      return <GiCrystalGrowth color='#8ac4ffff' />;
    case 'leylodes':
      return <GiStoneTablet color='#8ac4ffff' />;
    case 'lifeblight':
      return <GiHealthPotion color='#2b3a67ff' />;
    case 'blightvenoms':
      return <GiPoisonBottle color='#2b3a67ff' />;
    case 'blightmares':
      return <GiFlameSpin color='#2b3a67ff' />;
    case 'rushblight':
      return <GiPerfumeBottle color='#f7b2b7ff' />;
    case 'miasmeta':
      return <GiPoisonGas color='#f7b2b7ff' />;
    case 'blightmists':
      return <GiFog color='#f7b2b7ff' />;
    case 'blightblooms':
      return <GiPlantSeed color='#132a13ff' />;
    case 'blightpillars':
      return <GiVineFlower color='#132a13ff' />;
    case 'blightsnarls':
      return <GiStarSwirl color='#132a13ff' />;
    case 'blightshrooms':
      return <GiMushrooms color='#c5efcbff' />;
    case 'blightbleeds':
      return <GiBleedingWound color='#c5efcbff' />;
    case 'sporesprawls':
      return <GiPollenDust color='#c5efcbff' />;
    case 'tokens':
      return <GiStoneSphere color='#432534ff' />;
    case 'loci':
      return <GiBallGlow color='#432534ff' />;
    case 'vestiges':
      return <GiGlowingArtifact color='#432534ff' />;
    default:
      return <></>;
  }
};

const Icon = ({ icon, classes }) => {
  console.log(icon);

  return (
    <>
      <div className={`inline-block ${classes}`} data-tip={toTitleCase(icon)}>
        {getIcon(icon)}
      </div>
      <ReactTooltip />
    </>
  );
};

export default Icon;
