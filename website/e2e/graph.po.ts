import { browser, by, element } from 'protractor';

export class AppGraph {
  navigateTo() {
    return browser.get('/profile');
  }
}
