import {expect} from 'chai';
import { MainPage } from '../page_objects/main'
import { CatalogPage } from '../page_objects/catalog';


describe('first suit', () => {
    before(function(){
        browser.maximizeWindow();
    })
    
    it('should go to rozetka web page with samsung phones', () => {
        
        //object declaration
        let mainPage: MainPage = new MainPage();
        let catalogPage = new CatalogPage();
        
        let searchValue = 'телефон samsung'; // declare variable with searching value 
        browser.url('rozetka.com.ua'); // goto rozetka web page
        mainPage.searchItems(searchValue); 
        let catalogTitleValue = catalogPage.getTitleBlockInfo();

        expect(catalogTitleValue.toLowerCase()).to.include('samsung');
    });

    it('should check catalog search results  for existance samsung phones', ()=>{
        browser.url('https://rozetka.com.ua/mobile-phones/c80003/producer=samsung/');

        let catalogBlockRootSelector = '.content_type_catalog';
        let catalogBlockRoot = $(catalogBlockRootSelector);

        let catalogItemTitleSelector = '.goods-tile__title';
        let catalogItemTitles = catalogBlockRoot.$$(catalogItemTitleSelector); 

        catalogBlockRoot.waitForDisplayed(10*1000, false, 'Catalog root should be visible');
        
        let catalogItemValues = catalogItemTitles.map(function(titleItem){
            return titleItem.getText();
        })

        catalogItemValues.forEach((titleValue)=>{
            console.log(titleValue);
            expect(titleValue.toLowerCase()).to.include('samsung');
        })

    })
});
