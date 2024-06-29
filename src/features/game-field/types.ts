import { IGameItemPosition } from '@/types/gameItemType';

export interface IGameItemParams {
  id: string;
  image: string;
}

export type IGameFieldProps = {
  onClick: (position: IGameItemPosition) => void;
};
