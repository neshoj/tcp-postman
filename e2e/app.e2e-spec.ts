import { PossimulatorPage } from './app.po';

describe('possimulator App', () => {
  let page: PossimulatorPage;

  beforeEach(() => {
    page = new PossimulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
