import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="image-container">
        <h3 class="image-title"></h3>
        <image class="image"></image>
      </section>
    `);

    const titleElement = this.element.querySelector('.image-title')! as HTMLHeadingElement;
    titleElement.textContent = title;

    const imageElement = this.element.querySelector('.image')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
  }
}