import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('musical-lake App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Musical Lake App!');
  });

  it('should display animal list', () => {
    const listAnimals = [ '1 frog', '2 dragonfly', '3 criket' ];
    expect(page.getAnimalList()).toEqual(listAnimals);
  });

  it('should display frog details', () => {
    page.clicAnimalLink();
    expect(page.getTextDetail()).toEqual('FROG Details');
  });

  it('should display next sounds', () => {
    page.selectSoundList();
    page.clicButtonSearch();
    expect(page.getTextSearch()).toEqual('==> fiu');
    browser.sleep(5000);
  });

});
