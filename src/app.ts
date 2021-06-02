import { Component } from './components/component.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: Component;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();

    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector('.main')! as HTMLElement);