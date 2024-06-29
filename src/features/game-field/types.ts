import { IGameItemPosition, IGameItem } from '@/types/gameItem';

export type TGameFieldCreatedItem = Record<string, IGameItem>;

export type IGameFieldProps = {
  onClick: (cursorPosition: IGameItemPosition) => void;
};
