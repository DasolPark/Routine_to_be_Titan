import { BaseComponent } from '../../component.js'

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class="video-container">
        <h3 class="video-title"></h3>
        <iframe class="video"></iframe>
      </section>
    `)

    const titleElement = this.element.querySelector('.video-title')! as HTMLHeadingElement
    titleElement.textContent = title

    const iframe = this.element.querySelector('.video')! as HTMLIFrameElement
    iframe.src = url
  }
}
