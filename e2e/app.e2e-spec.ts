import { MsclonePage } from './app.po';

describe('msclone App', () => {
  let page: MsclonePage;

  beforeEach(() => {
    page = new MsclonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
