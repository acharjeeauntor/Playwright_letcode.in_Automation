import { expect } from "@playwright/test"
import test from "../../lib/BaseTest"
import ShadowDomData from "../../test-data/shadowDomData.json"

test.describe(`Test Shadow DOM`, async () => {
    test.beforeEach(async ({ shadowDomPage }) => {
        await shadowDomPage.navigateToUrl("/shadow")
    })

    
    test(`Enter Info in the form`, async ({ shadowDomPage }) => {
        await shadowDomPage.enterFirstName(ShadowDomData.firstName)
        // As Closed Shadow Dom can not be handle so this two will not execute
        // await shadowDomPage.enterLastName(ShadowDomData.lastName)
        // await shadowDomPage.enterEmail(ShadowDomData.email)
    })
})

