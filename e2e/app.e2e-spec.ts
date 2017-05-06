import { FightAppPage } from './app.po';

describe('fight-app App', () => {
  let page: FightAppPage;

  beforeEach(() => {
    page = new FightAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
