import { SITE_BASE_PATH } from './basePath';
import { IGameItemType } from '@/types/gameItemType';

/** Types of items that can be spawned on the game field */
export const GAME_ITEM_TYPES: IGameItemType[] = [
  {
    id: 'moon',
    image: {
      small: `${SITE_BASE_PATH}/game-item/moon.webp`
    },
    position: { top: 0, left: 0 }
  },
  {
    id: 'mountain',
    image: {
      small: `${SITE_BASE_PATH}/game-item/mountain.webp`
    },
    position: { top: 0, left: 0 }
  },
  {
    id: 'sunset',
    image: {
      small: `${SITE_BASE_PATH}/game-item/sunset.webp`
    },
    position: { top: 0, left: 0 }
  },
  {
    id: 'vase',
    image: {
      small: `${SITE_BASE_PATH}/game-item/vase.webp`
    },
    position: { top: 0, left: 0 }
  }
];

/** Size of the game item. Useful for setting a precise position of an item when spawned */
export const GAME_ITEM_SIZE = 80;
