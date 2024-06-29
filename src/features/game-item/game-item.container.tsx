import { useDraggable } from '@dnd-kit/core';
import { memo } from 'react';

import { IGameItemContainerProps } from './types';
import { GameItem } from './game-item';

/**
 * Draggable item for the game field
 *
 * NOTE memo is used to prevent unnecessary re-renders when spawning new items
 */
export const GameItemContainer: React.FC<IGameItemContainerProps> = memo((props) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id
  });

  return <GameItem {...props} ref={setNodeRef} transform={transform} listeners={listeners} attributes={attributes} isDragging={isDragging} />;
});

GameItemContainer.displayName = 'GameItemContainer';
