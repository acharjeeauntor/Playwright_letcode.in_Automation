import { WebActions } from "../../lib/WebActions";
import { ShadowDomPageObjects } from "../objectRepository/ShadowDomPageObjects";
import { Page } from "@playwright/test"

let webActions: WebActions
let shadowDomPageObjects: ShadowDomPageObjects
export class ShadowDomPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        shadowDomPageObjects = new ShadowDomPageObjects()
    }
    async navigateToUrl(url: string): Promise<void> {
        await webActions.navigateToURL(url)
    }

    async enterFirstName(name: string): Promise<void> {
        await webActions.enterElementText(shadowDomPageObjects.First_Name_Input_ID,name)
    }
    async enterLastName(name: string): Promise<void> {
        await webActions.enterElementText(shadowDomPageObjects.Last_Name_Input_ID,name)
    }
    async enterEmail(email: string): Promise<void> {
        await webActions.enterElementText(shadowDomPageObjects.Email_Input_ID,email)
    }
}