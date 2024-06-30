import { test, expect } from '@playwright/test';

import { SITE_BASE_PATH } from '@/shared/constants/basePath';
import { GAME_ITEM_SIZE } from '@/shared/constants/gameItem';

test.describe('Game field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SITE_BASE_PATH);
  });

  test('Creates item on click on the game field', async ({ page }) => {
    await page.getByTestId('game-field').click({
      position: { x: 500, y: 500 }
    });

    const gameFieldItem = await page.getByTestId('game-field-item');

    expect(gameFieldItem).toBeVisible();
    expect(gameFieldItem).toHaveCSS('top', `${500 - GAME_ITEM_SIZE / 2}px`);
    expect(gameFieldItem).toHaveCSS('left', `${500 - GAME_ITEM_SIZE / 2}px`);
  });

  test('Moves created item by mouse', async ({ page }) => {
    const gameField = await page.getByTestId('game-field');
    gameField.click({ position: { x: 500, y: 500 } });

    await page.waitForTimeout(1000);

    const gameFieldItem = await page.getByTestId('game-field-item');

    await gameFieldItem.hover();
    await page.mouse.down();
    await page.getByTestId('game-field-controls-wrapper').hover();
    await page.mouse.up();

    expect(gameFieldItem).toBeVisible();
    expect(gameFieldItem).toHaveCSS('top', `568px`);
    expect(gameFieldItem).toHaveCSS('left', `1178px`);
  });

  test('Cleares created item by click on the clear button', async ({ page }) => {
    await page.getByTestId('game-field').click({
      position: { x: 500, y: 500 }
    });

    await page.getByTestId('game-field-clear-button').click();

    expect(await page.getByTestId('game-field-item')).toBeHidden();
  });
});
