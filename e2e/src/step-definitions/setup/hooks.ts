import { Before, After, ITestCaseHookParameter} from "@cucumber/cucumber";
//const { chromium } = require('playwright'); this was original n course but getting error on the require...
import { SceanarioWorld } from "./world";

Before(async function(this: SceanarioWorld, scenario) {

    console.log(`running cucumber scenario ${scenario.pickle.name}`)

    const contextOptions = {
        recordVideo: {
            dir: './reports/videos/'+scenario.pickle.name,
        }
    }

    
    const ready = await this.init(contextOptions)
    return ready
});

After(async function(this: SceanarioWorld, scenario) {
    const {
        screen: { page, browser } 
    } = this;

    const scenarioStatus = scenario.result?.status;

    if (scenarioStatus === 'FAILED') {
        await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        });
    }
    await browser.close();
    return browser;
});