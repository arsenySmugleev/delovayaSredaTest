import { test } from '@playwright/test';
import { MainScreen } from '../panels/main-screen/panel';

test.beforeEach(async ({ page }) => {
    await page.goto('https://dasreda.ru');
});

test("LetterForm", async ({ page }) => {

    const mainScreen = new MainScreen(page);

    await mainScreen.checkMainScreen();

    await mainScreen.feedLettersForm();

    await mainScreen.sendLettersForm();

})
