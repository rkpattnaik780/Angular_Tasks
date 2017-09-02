import { AngularServiceWorkerPage } from './app.po';

describe('angular-service-worker App', () => {
  let page: AngularServiceWorkerPage;

  beforeEach(() => {
    page = new AngularServiceWorkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
