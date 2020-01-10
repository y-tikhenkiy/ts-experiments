import {HeaderFragment} from "./fragments/index";

class MainPage{
    public header: HeaderFragment;
    constructor(){
        this.header = new HeaderFragment();
    }   

    searchItems(searchValue: string): any{
        this.header.root.waitForDisplayed(5*1000);
        this.header.searchInput.addValue(searchValue);
        this.header.searchButton.click();
    }
}

export {MainPage}