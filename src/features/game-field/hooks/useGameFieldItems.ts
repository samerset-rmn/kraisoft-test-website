import { useCallback, useState } from 'react';
import type { Coordinates } from '@dnd-kit/utilities';

import { IGameItemPosition } from '@/types/gameItem';
import { GAME_ITEM_TYPES, GAME_ITEM_SIZE } from '@/constants/gameItem';
import { PAGE_HEADER_HEIGHT } from '@/constants/pageHeader';
import { TGameFieldItem } from '../types';

/** Hook to store game field' items and spawn a new one */
export const useGameFieldItems = () => {
  /**
   * NOTE Some thoughts about the implementation:
   * At first I used array, but that way I had to iterate over all items to find the one I need to update.
   * To update an item I had to remove it from the array and place it back with updated position.
   * I think it's not efficient, especially when there are many items. So I decided to use an object with unique keys.
   */
  const [items, setItems] = useState<TGameFieldItem>({});

  /** Spawn item at the click position */
  const spawnItem = useCallback((clickPosition: IGameItemPosition) => {
    const randomIndex = Math.floor(Math.random() * GAME_ITEM_TYPES.length);
    const randomItem = GAME_ITEM_TYPES[randomIndex];
    /**
     * NOTE Not the best way to solve this, but we can't rely on prevItems length (ID will be duplicated if some items are removed).
     * Maybe we can use [nanoid](https://github.com/ai/nanoid) library for that? Or there is another way.
     */
    const newItemUniqueId = `${randomItem.id}-${Math.floor(Math.random() * 1000)}`;

    setItems((prevItems) => {
      return {
        ...prevItems,
        [newItemUniqueId]: {
          ...randomItem,
          id: newItemUniqueId,
          position: {
            /* NOTE clientY includes page header's height, subtract it */
            top: clickPosition.top - PAGE_HEADER_HEIGHT - GAME_ITEM_SIZE / 2,
            /* NOTE Use GAME_ITEM_SIZE to spawn an item right at the center of the cursor */
            left: clickPosition.left - GAME_ITEM_SIZE / 2
          }
        }
      };
    });
  }, []);

  /** Save item static position */
  const saveItemPosition = useCallback((params: { id: string; delta: Coordinates }) => {
    setItems((prevItems) => {
      const item = prevItems[params.id];

      return {
        ...prevItems,
        [params.id]: {
          ...item,
          position: {
            top: item.position.top + params.delta.y,
            left: item.position.left + params.delta.x
          }
        }
      };
    });
  }, []);

  return { items, spawnItem, saveItemPosition };
};
