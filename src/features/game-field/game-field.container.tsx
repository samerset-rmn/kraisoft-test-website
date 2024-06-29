import { useCallback } from 'react';
/**
 * NOTE Why did I shoose @dnd-kit library? Here is how I made my decision:
 *
 * 1. At first I wanted to use native Drag and Drop browser API, but it has some limitations. For example:
 * doesn't support touch and keyboard events, also doesn't support parent boundary restriction. Many features
 * can be done only with hacks. So I decided to use a library.
 * 2. [react-draggable](https://github.com/react-grid-layout/react-draggable?tab=readme-ov-file)
 */
import { DndContext, useSensor, MouseSensor, TouchSensor, KeyboardSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import Head from 'next/head';

import { GameField } from './game-field';
import { GameItemContainer } from '../game-item/game-item.container';
import { GAME_ITEM_TYPES } from '@/constants/gameItem';
import { useGameFieldItems } from './hooks/useGameFieldItems';
import { IGameFieldProps } from './types';

/** NOTE dnd-kit way to prevent item from being dragged out of parent's boundary */
const modifiers = [restrictToParentElement];
/**
 * NOTE Preloading images so user will not see empty item when it's spawned.
 * Sure, next/image supports "priority" prop that does the same thing,
 * but I think here we have a better control, what to preload. For now there are
 * only 4 item types (4 images), but if there are much more then preloading will slow down
 * the page load. With this solution we can later write a logic to preload only the next items, for example.
 */
const itemImagesPreloadTags = GAME_ITEM_TYPES.map(({ image, id }) => <link key={id} rel='preload' as='image' href={image.small} />);

/**
 * Game field where items can be spawned and dragged
 *
 * NOTE Why did I shoose @dnd-kit library? I was making a decision with the following in mind:
 * 1. Game should support touch events (website has responsive design and should work on mobile devices)
 * 2. Game should support keyboard events (for accessibility)
 * 3. Library should be actively maintained, performant and should has a low bundle size
 *
 * At first I wanted to use native Drag and Drop browser API, but it has some limitations. For example:
 * doesn't support touch and keyboard events, doesn't support parent boundary restriction. Many features
 * can be done only with hacks. So I decided to use a library.
 *
 * [react-draggable](https://github.com/react-grid-layout/react-draggable?tab=readme-ov-file) is a good library
 * that still actively maintained and has a low bundle size. But as far I can see it doesn't support keyboard events.
 *
 * [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) is made by Attlasian, but has a big bundle size.
 *
 * [dnd-kit](https://github.com/clauderic/dnd-kit) looks like a good choice. It has support for touch and keyboard events,
 * has a small bundle size (also modular and tree-shakeable), is well maintained, can potentially be framework agnostic,
 * finally it's flexible enough for custom logic. For now I'll stick with this library.
 */
export const GameFieldContainer: React.FC = () => {
  const { items, spawnItem, saveItemPosition } = useGameFieldItems();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const onGameItemDragEnd = useCallback(
    ({ delta, active }: DragEndEvent) => {
      /**
       * NOTE ID from DragEndEvent is not a generic, sp it's always string | number.
       * I cast type because we know that our ID is a string.
       */
      saveItemPosition({ id: active.id as string, delta });
    },
    [saveItemPosition]
  );
  const onGameFieldClick = useCallback<IGameFieldProps['onClick']>(
    (cursorPosition) => {
      spawnItem(cursorPosition);
    },
    [spawnItem]
  );

  return (
    <>
      <Head>{itemImagesPreloadTags}</Head>
      <DndContext sensors={sensors} modifiers={modifiers} onDragEnd={onGameItemDragEnd}>
        <GameField onClick={onGameFieldClick}>
          {Object.values(items).map((item) => (
            <GameItemContainer {...item} key={item.id} />
          ))}
        </GameField>
      </DndContext>
    </>
  );
};
