import { TfiHome } from 'react-icons/tfi';
import { FaRegBuilding, FaCampground, FaCubes } from 'react-icons/fa';
import { LuHotel, LuTrees } from 'react-icons/lu';
import { PiHouseLight, PiMountainsLight } from 'react-icons/pi';
import { IoBedOutline } from 'react-icons/io5';
import { GiWoodCabin } from 'react-icons/gi';

export const categoriesIcons = {
  house: <TfiHome className="w-6 h-6" />,
  apartment: <FaRegBuilding className="w-6 h-6" />,
  hotel: <LuHotel className="w-6 h-6" />,
  'tiny home': <PiHouseLight className="w-6 h-6" />,
  farm: <LuTrees className="w-6 h-6" />,
  guesthouse: <IoBedOutline className="w-6 h-6" />,
  tent: <FaCampground className="w-6 h-6" />,
  container: <FaCubes className="w-6 h-6" />,
  cabin: <GiWoodCabin className="w-6 h-6" />,
  'amazing views': <PiMountainsLight className="w-6 h-6" />,
};
