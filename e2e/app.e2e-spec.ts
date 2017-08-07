import { EitherPage } from './app.po';

describe('either App', () => {
  let page: EitherPage;

  beforeEach(() => {
    page = new EitherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
