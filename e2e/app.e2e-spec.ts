import { ExodusPage } from './app.po';

describe('exodus App', function() {
  let page: ExodusPage;

  beforeEach(() => {
    page = new ExodusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
