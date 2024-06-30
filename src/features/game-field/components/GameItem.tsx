import { forwardRef } from 'react';
import Image from 'next/image';

import { IGameItemProps } from '../types';
import { GAME_ITEM_SIZE } from '@/shared/constants/gameItem';

import styles from '../styles/GameItem.module.scss';

export const GameItem = forwardRef<HTMLDivElement, IGameItemProps>(
  ({ currentPosition, isLastActive, transform, listeners, attributes, image }, ref) => {
    const style: React.CSSProperties = {
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      zIndex: isLastActive ? 2 : 1,
      top: currentPosition.top,
      left: currentPosition.left
    };

    return (
      <div className={styles.item} ref={ref} style={style} {...listeners} {...attributes} data-testid='game-field-item'>
        <Image src={image.small} alt='' width={GAME_ITEM_SIZE} height={GAME_ITEM_SIZE} />
      </div>
    );
  }
);

GameItem.displayName = 'GameItem';
