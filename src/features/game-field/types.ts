import { IGameItemPosition, IGameItem } from '@/types/gameItem';

type TGameFieldItemUniqueKey = string;
export type TGameFieldItem = Record<
  TGameFieldItemUniqueKey,
  {
    id: TGameFieldItemUniqueKey;
  } & Omit<IGameItem, 'id'>
>;

export type IGameFieldProps = {
  onClick: (cursorPosition: IGameItemPosition) => void;
};
