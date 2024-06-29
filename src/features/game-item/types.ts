import type { Transform } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners, DraggableAttributes } from '@dnd-kit/core';

import { IGameItemType } from '@/types/gameItemType';

export interface IGameItemContainerProps extends IGameItemType {}

export interface IGameItemProps extends IGameItemType {
  /** Item position during dragging */
  transform: Transform | null;
  /** dnd-kit event listeners */
  listeners: DraggableSyntheticListeners;
  /** dnd-kit item attributes */
  attributes: DraggableAttributes;
  /** Is item being dragged? */
  isDragging: boolean;
}
