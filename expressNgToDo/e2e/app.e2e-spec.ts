import { NgboilerplatePage } from './app.po';

describe('ngboilerplate App', () => {
  let page: NgboilerplatePage;

  beforeEach(() => {
    page = new NgboilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
