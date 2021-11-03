import { Browser, ElementHandle, Page } from "puppeteer";
export class robot{   
    page: Page;
    
    constructor(_page: Page){
        this.page = _page;
    }

    async goto(url: string){
        await this.page.goto(url);
    }

    async click(objectXPath: string){
        await this.wait(1000);
        (await this.get(objectXPath))?.click();
    }

    async get(objectXPath: string){
        return await this.page.waitForXPath(objectXPath);
    }

    async getElementList(listXPath: string){
        return await this.page.$x(listXPath);
    }

    async type(objectXpath: string, keys: string){
        (await this.get(objectXpath))?.type(keys, {delay: 40});
    }

    async wait(amount: number){
        await this.page.waitForTimeout(amount);
    }

    async getText(element: ElementHandle){
        await this.wait(1000);
        const text =  (await element.getProperty('innerText'))?.jsonValue();
        return text;
    }
}