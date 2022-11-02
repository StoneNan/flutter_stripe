import { Page } from "@playwright/test";

export function stripeFrame(page: Page) {
    return page.locator('.StripeElement').frameLocator('iframe');
}


export async function waitForStripeFrame(page: Page) {
    await page.locator('.StripeElement').waitFor({ state: 'attached' })
    let frame = stripeFrame(page)
    await frame.locator(`[name='cardnumber']`).waitFor({ state: 'attached' })
    return frame;
}
