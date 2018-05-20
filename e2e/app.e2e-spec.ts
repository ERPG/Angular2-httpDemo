import { HotelsFinderPage } from './app.po';

describe('hotels-finder App', () => {
  let page: HotelsFinderPage;

  beforeEach(() => {
    page = new HotelsFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
