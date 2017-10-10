import { PushNotificationPage } from './app.po';

describe('push-notification App', () => {
  let page: PushNotificationPage;

  beforeEach(() => {
    page = new PushNotificationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
