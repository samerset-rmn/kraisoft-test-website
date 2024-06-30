export interface IGameItem {
  /** Item ID */
  id: string;
  /** Item image */
  image: IGameItemImage;
  /** Item default position  */
  defaultPosition: IGameItemPosition;
}

export interface IGameItemPosition {
  top: number;
  left: number;
}

export interface IGameItemImage {
  small: string;
}
