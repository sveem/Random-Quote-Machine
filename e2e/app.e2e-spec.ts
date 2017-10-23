import { QuoteAppPage } from './app.po';

describe('quote-app App', () => {
  let page: QuoteAppPage;

  beforeEach(() => {
    page = new QuoteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
