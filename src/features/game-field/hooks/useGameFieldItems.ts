import { useCallback, useState } from 'react';

import { IGameItemPosition } from '@/shared/types/gameItem';
import { GAME_ITEM_TYPES, GAME_ITEM_SIZE } from '@/shared/constants/gameItem';
import { PAGE_HEADER_HEIGHT } from '@/shared/constants/pageHeader';
import { TGameFieldCreatedItem } from '../types';

/**
 * Hook to store game field' items and spawn a new one
 */
export const useGameFieldItems = () => {
  /**
   * NOTE Some thoughts about the implementation:
   *
   * At first I used an array to store items and updated the position of the items here. 
   * That way I had to iterate over all the items to find the one I needed to update. 
   * To update an item I had to remove it from the array and put it back with updated position.
   *
   * Then I switched to using objects with unique keys. It's more efficient to find an item by key and update it.
   * But later I moved the item's position state to the GameItemContainer, so when an item's position is updated,
   * other items are not affected (or at least not too much).
   *
   * Now I'm thinking about using array again. For spawning items, there's not much difference between array and object,
   * but maybe array will be even more efficient. Right now we have to do `Object.values(items)` before mapping items,
   * this can be a performance bottleneck.
   */
  const [items, setItems] = useState<TGameFieldCreatedItem>({});

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
          defaultPosition: {
            /* NOTE clientY includes page header's height, subtract it */
            top: clickPosition.top - PAGE_HEADER_HEIGHT - GAME_ITEM_SIZE / 2,
            /* NOTE subtract GAME_ITEM_SIZE to spawn an item right at the center of the cursor */
            left: clickPosition.left - GAME_ITEM_SIZE / 2
          }
        }
      } satisfies TGameFieldCreatedItem;
    });
  }, []);

  /** Clear all spawned items */
  const clearItems = useCallback(() => {
    setItems({});
  }, []);

  return { items, spawnItem, clearItems };
};
