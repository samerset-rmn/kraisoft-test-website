import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { memo, useEffect, useState } from 'react';

import { IGameItemPosition } from '@/types/gameItem';
import { IGameItemContainerProps } from './types';
import { GameItem } from './game-item';
import { GAME_ITEM_SIZE } from '@/constants/gameItem';

/**
 * Draggable item for the game field
 *
 * NOTE memo is used to prevent unnecessary re-renders when spawning new items.
 */
export const GameItemContainer: React.FC<IGameItemContainerProps> = memo(({ id, gameFieldSize, ...props }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  /**
   * NOTE I moved the current position from the parent "game-field" into this component. At first this position was stored
   * inside the `items` object, but this caused significant re-rendering of all items when one of them was moved.
   * This solution still causes re-rendering of all items when `onDragEnd` fires (dnd-kit limitation),
   * but significant re-rendering will only happen to the dragged item (other items just get a quick re-render).
   */
  const [currentPosition, setCurrentPosition] = useState<IGameItemPosition>(props.defaultPosition);
  /**
   * NOTE Saving last active item so we can set the correct z-index.
   */
  const [isLastActive, setIsLastActive] = useState<boolean>(false);

  /* Recalculate current position if item is out of the game field */
  useEffect(() => {
    const isItemOutOfFieldWidth = gameFieldSize.width - GAME_ITEM_SIZE < currentPosition.left;
    const isItemOutOfFieldHeight = gameFieldSize.height - GAME_ITEM_SIZE < currentPosition.top;

    /**
     * NOTE I split it into two if statements to avoid unnecessary state changes.
     * We could always call setCurrentPosition here with a minimal size value,
     * but it will be fired on every resize, even if the item is not close to the edges of the game field.
     */
    if (isItemOutOfFieldWidth) {
      setCurrentPosition((prev) => ({
        top: prev.top,
        left: gameFieldSize.width - GAME_ITEM_SIZE
      }));
    } else if (isItemOutOfFieldHeight) {
      setCurrentPosition((prev) => ({
        top: gameFieldSize.height - GAME_ITEM_SIZE,
        left: prev.left
      }));
    }
  }, [gameFieldSize, currentPosition]);

  /** dnd-kit events listener */
  useDndMonitor({
    onDragStart: ({ active }) => {
      setIsLastActive(active.id === id);
    },
    onDragEnd: ({ delta, active }) => {
      if (active.id === id) {
        setCurrentPosition((prev) => ({
          top: prev.top + delta.y,
          left: prev.left + delta.x
        }));
      }
    }
  });

  return (
    <GameItem
      {...props}
      id={id}
      currentPosition={currentPosition}
      ref={setNodeRef}
      transform={transform}
      listeners={listeners}
      attributes={attributes}
      isLastActive={isLastActive}
    />
  );
});

GameItemContainer.displayName = 'GameItemContainer';
