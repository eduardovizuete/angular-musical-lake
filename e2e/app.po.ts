import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAnimalList() {
    return element.all(by.css('app-animals li')).getText();
  }

  clicAnimalLink() {
    // element(by.partialLinkText('fro')).click();
    // element(by.css('app-animals li')).click();
    element.all(by.css('app-animals li')).get(0).click();
  }

  getTextDetail() {
    return element(by.css('app-animal-detail h2')).getText();
  }

  selectSoundList() {
    element.all(by.cssContainingText('option', 'brr')).get(0).click();
  }

  clicButtonSearch() {
    element(by.css('button')).click();
  }

  getTextSearch() {
    return element(by.xpath('//div[contains(text(), "==>")]')).getText();
  }

}
