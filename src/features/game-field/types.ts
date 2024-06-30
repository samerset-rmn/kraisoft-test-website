import type { Transform } from '@dnd-kit/utilities';
import type { DraggableSyntheticListeners, DraggableAttributes } from '@dnd-kit/core';

import { IGameItemPosition, IGameItem } from '@/shared/types/gameItem';

export type TGameFieldCreatedItem = Record<string, IGameItem>;

export type IGameFieldProps = {
  onClick: (cursorPosition: IGameItemPosition) => void;
};

export interface IGameItemContainerProps extends IGameItem {
  gameFieldSize: { width: number; height: number };
}

export interface IGameItemProps extends IGameItem {
  /** Item position during dragging */
  transform: Transform | null;
  /** dnd-kit event listeners */
  listeners: DraggableSyntheticListeners;
  /** dnd-kit item attributes */
  attributes: DraggableAttributes;
  /** Is this the last active (dragged) item? */
  isLastActive: boolean;
  /** Item current position */
  currentPosition: IGameItemPosition;
}

export interface IGameFieldControlButtonProps {
  onClick: () => void;
  icon: string;
  label: string;
}
