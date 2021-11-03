import { Browser } from "puppeteer";
import { robot } from "./robot";
import { pageObject } from "./pageObject";
export default async function(browser: Browser){
    const pageObject1 = new pageObject();

    const page = await browser.newPage();
    const robot1 = new robot(page);

    await robot1.goto(pageObject1.url);

    await robot1.click(pageObject1.topicDropdown);

    await robot1.click(pageObject1.energyLink);

    await robot1.click(pageObject1.subDataMenu);

    await robot1.type(pageObject1.energySearchInput,"nuclear");

    await robot1.click(pageObject1.energyDataSearchInputSubmit);

    await robot1.wait(2000);
    const dataContentList = await robot1.getElementList(pageObject1.dataContentLink);

    let x = 0;
    dataContentList.forEach(async function (link){
        const text = await robot1.getText(link);
        console.log("Text = " + text);
        x++;
    })
    
    while(x < dataContentList.length || dataContentList.length < 1){
        await robot1.wait(100);
    }
}