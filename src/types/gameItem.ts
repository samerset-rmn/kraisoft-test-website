export interface IGameItem {
  /** Item ID */
  id: string;
  /** Item image */
  image: IGameItemImage;
  /** Item position */
  position: IGameItemPosition;
}

export interface IGameItemPosition {
  top: number;
  left: number;
}

export interface IGameItemImage {
  small: string;
}
