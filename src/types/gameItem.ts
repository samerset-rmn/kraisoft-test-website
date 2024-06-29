export interface IGameItem {
  /** Item ID */
  id: TGameItemKey;
  /** Item image */
  image: IGameItemImage;
  /** Item position */
  position: IGameItemPosition;
}

export type TGameItemKey = 'moon' | 'mountain' | 'sunset' | 'vase';

export interface IGameItemPosition {
  top: number;
  left: number;
}

export interface IGameItemImage {
  small: string;
}
