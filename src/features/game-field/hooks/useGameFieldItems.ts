import { useCallback, useState } from 'react';
import type { Coordinates } from '@dnd-kit/utilities';

import { IGameItemType, IGameItemPosition } from '@/types/gameItemType';
import { GAME_ITEM_TYPES } from '@/constants/gameItem';

/** Hook to store game field' items and spawn a new one */
export const useGameFieldItems = () => {
  const [items, setItems] = useState<IGameItemType[]>([]);

  /** Spawn item at the click position */
  const spawnItem = useCallback((position: IGameItemPosition) => {
    const randomIndex = Math.floor(Math.random() * GAME_ITEM_TYPES.length);
    const randomItem = GAME_ITEM_TYPES[randomIndex];

    setItems((prevItems) => {
      console.log(prevItems);

      return [
        ...prevItems,
        {
          ...randomItem,
          id: `${randomItem.id}-${prevItems.length}`, // NOTE Use unique id for each item
          position
        }
      ];
    });
  }, []);

  /** Save item static position */
  const saveItemPosition = useCallback((params: { id: string; delta: Coordinates }) => {
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id === params.id);

      return item
        ? [
            ...prevItems,
            {
              ...item,
              position: {
                top: item.position.top + params.delta.y,
                left: item.position.left + params.delta.x
              }
            }
          ]
        : prevItems;
    });
  }, []);

  return { items, spawnItem, saveItemPosition };
};
