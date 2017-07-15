import { ProjectAngularappPage } from './app.po';

describe('project-angularapp App', () => {
  let page: ProjectAngularappPage;

  beforeEach(() => {
    page = new ProjectAngularappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
