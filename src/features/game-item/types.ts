import type { Transform } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners, DraggableAttributes } from '@dnd-kit/core';

import { IGameItem } from '@/types/gameItem';

export interface IGameItemContainerProps extends IGameItem {}

export interface IGameItemProps extends IGameItem {
  /** Item position during dragging */
  transform: Transform | null;
  /** dnd-kit event listeners */
  listeners: DraggableSyntheticListeners;
  /** dnd-kit item attributes */
  attributes: DraggableAttributes;
  /** Is item being dragged? */
  isDragging: boolean;
}
