import { forwardRef } from 'react';
import Image from 'next/image';

import { IGameItemProps } from './types';
import { GAME_ITEM_SIZE } from '@/constants/gameItem';

import styles from './styles.module.scss';

export const GameItem = forwardRef<HTMLDivElement, IGameItemProps>(({ position, isDragging, transform, listeners, attributes, image }, ref) => {
  const style: React.CSSProperties = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    zIndex: isDragging ? 2 : 1,
    top: position.top,
    left: position.left
  };

  return (
    <div className={styles.item} ref={ref} style={style} {...listeners} {...attributes}>
      <Image src={image.small} alt='' width={GAME_ITEM_SIZE} height={GAME_ITEM_SIZE} />
    </div>
  );
});

GameItem.displayName = 'GameItem';
