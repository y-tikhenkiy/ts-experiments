import { Element } from "@wdio/sync";

/*let searchIputSelector = "#rz-search > form > div.rz-header-search-inner > div.rz-header-search-input-text-wrap.sprite-side > input";
let searchIput = $(searchIputSelector);

let searchButtonSelector = '#rz-search > form > span > span > button';
let searchButton = $(searchButtonSelector);
*/
class HeaderFragment{
    public root: Element;
    public searchInput: Element;
    public searchButton: Element;
    constructor(){
        this.root = $('header.header');
        this.searchInput = $('input[name="search"]')  // old selector: $('input[name="saerch"]');
        this.searchButton = $('button.search-form__submit');
    }

}

export{HeaderFragment}