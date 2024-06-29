import { DndContext } from '@dnd-kit/core';

import { GameField } from './game-field';
import { GameItemContainer } from '../game-item/game-item.container';

export const GameFieldContainer: React.FC = () => {
  return (
    <DndContext>
      <GameField>
        <GameItemContainer id='drag' />
      </GameField>
    </DndContext>
  );
};
