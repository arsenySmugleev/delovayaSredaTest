import { expect, Locator } from "@playwright/test";
import { Page } from "@playwright/test/index.js";
import { getLocator } from "../../helpers";
import { MAIN_SCREEN } from "./locators";

export class MainScreen {
    private readonly page: Page;
    private readonly headerMain: Locator;
    private readonly cardOpenBusinessMain: Locator;
    private readonly premiumNotActiveTitle: Locator;
    private readonly newslettersInputField: Locator;
    private readonly newslettersCheckbox: Locator;
    private readonly newslettersButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerMain = this.page.locator(getLocator(MAIN_SCREEN.headerMain));
        this.cardOpenBusinessMain = this.page.locator(getLocator(MAIN_SCREEN.cardOpenBusinessMain));
        this.newslettersInputField = this.page.locator(getLocator(MAIN_SCREEN.newslettersInputField));
        this.newslettersCheckbox = this.page.locator(getLocator(MAIN_SCREEN.newslettersCheckbox));
        this.newslettersButton = this.page.locator(getLocator(MAIN_SCREEN.newslettersButton));
    }

    public async checkMainScreen() {
        await expect(this.headerMain).toBeVisible();
        await expect(this.cardOpenBusinessMain).toBeVisible();
        await expect(this.premiumNotActiveTitle).toBeVisible();
        await expect(this.newslettersInputField).toBeVisible();
        await expect(this.newslettersCheckbox).toBeVisible();
        await expect(this.newslettersButton).toBeVisible();
    }

    public async feedLettersForm() {
        await this.newslettersInputField.focus();
        await this.newslettersInputField.fill("helloMyFriends@dasreda.ru");
    }

    public async sendLettersForm() {
        await this.newslettersCheckbox.click();
        await this.newslettersButton.click();
    }
}
