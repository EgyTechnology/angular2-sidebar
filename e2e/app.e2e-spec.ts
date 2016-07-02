import { Angular2SidebarPage } from './app.po';

describe('angular2-sidebar App', function() {
  let page: Angular2SidebarPage;

  beforeEach(() => {
    page = new Angular2SidebarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
