export class pageObject{
    topicDropdown: string;
    url: string;
    energyLink: string;
    subDataMenu: string;
    energySearchInput: string;
    energyDataSearchInputSubmit: string;
    dataContentLink: string;

    constructor(){
        this.url = 'https://www.data.gov';

        this.topicDropdown = '//*[@class = "dropdown-toggle local-link"]';
        this.energyLink = '//li[@class="menu-energy topic-energy"]/a';
        this.subDataMenu = '//*[@class="active menu-updates"]/following-sibling::li[@class="menu-data"]';
        this.energySearchInput = '//input[@id="search-big"]';
        this.energyDataSearchInputSubmit = '//input[@id="search-big"]/following-sibling::button';
        this.dataContentLink = '//div[@class="dataset-content"]/ul/li/a';
    }
}