import {expect} from 'chai';
import { MainPage } from '../page_objects/main'


describe('first suit', () => {
    before(function(){
        browser.url('rozetka.com.ua');
    })
    
    it('should go to rozetka web page', () => {
        // browser.url('rozetka.com.ua');
        let mainPage: MainPage = new MainPage();
        let searchValue = 'телефон samsung';
        mainPage.searchItems(searchValue);
        
        let catalogTitleSelector = 'h1.catalog-heading';
        let catalogTitle = $(catalogTitleSelector);
                
        catalogTitle.waitForDisplayed(3*1000);
        let catalogTitleValue =catalogTitle.getText();

        expect(catalogTitleValue.toLowerCase()).to.include('samsung');
    });
});
