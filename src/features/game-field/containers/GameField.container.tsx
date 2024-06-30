import { useCallback } from 'react';
import { DndContext, useSensor, MouseSensor, TouchSensor, KeyboardSensor, useSensors } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import Head from 'next/head';

import { GameField, GameFieldControlsWrapper, GameFieldControlButton } from '../components';
import { GameItemContainer } from '../containers/GameItem.container';
import { GAME_ITEM_TYPES } from '@/shared/constants/gameItem';
import { useGameFieldItems, useFieldResizeHandler } from '../hooks';
import { IGameFieldProps } from '../types';
import { SITE_BASE_PATH } from '@/shared/constants/basePath';

/** NOTE dnd-kit way to prevent item from being dragged out of parent's boundary */
const modifiers = [restrictToParentElement];
/**
 * NOTE Preloading images so user will not see empty item when it's spawned.
 * For now there are only 4 possible item types (4 images), but if there are more then preloading
 * will start to reduce load time of the page. In that case we can try to preload only few images
 * and spawn first items with them.
 */
const itemImagesPreloadTags = GAME_ITEM_TYPES.map(({ image, id }) => <link key={id} rel='preload' as='image' href={image.small} />);

/**
 * Game field where items can be spawned and dragged
 */
export const GameFieldContainer: React.FC = () => {
  const { items, spawnItem, clearItems } = useGameFieldItems();
  const { gameFieldRef, gameFieldSize } = useFieldResizeHandler();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const onGameFieldClick = useCallback<IGameFieldProps['onClick']>(
    (cursorPosition) => {
      spawnItem(cursorPosition);
    },
    [spawnItem]
  );

  return (
    <>
      <Head>{itemImagesPreloadTags}</Head>
      <DndContext sensors={sensors} modifiers={modifiers}>
        <GameField ref={gameFieldRef} onClick={onGameFieldClick}>
          {/* NOTE Place controls in front of game items so that users can access them more quickly using the keyboard (without having to tab on each spawn item) */}
          <GameFieldControlsWrapper>
            <GameFieldControlButton
              label='Clear all items'
              onClick={clearItems}
              icon={`${SITE_BASE_PATH}/refresh.svg`}
              testId='game-field-clear-button'
            />
          </GameFieldControlsWrapper>

          {Object.values(items).map((item) => (
            <GameItemContainer key={item.id} {...item} gameFieldSize={gameFieldSize} />
          ))}
        </GameField>
      </DndContext>
    </>
  );
};
