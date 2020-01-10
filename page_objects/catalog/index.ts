import {TitleBlockFragment} from './fragments'


class CatalogPage{

    public titleBlock: TitleBlockFragment;

    constructor(){
        this.titleBlock = new TitleBlockFragment;
    }

    getTitleBlockInfo(){
        this.titleBlock.root.waitForDisplayed(10*1000);
        return this.titleBlock.root.getText();
    }

}

export{
    CatalogPage
}