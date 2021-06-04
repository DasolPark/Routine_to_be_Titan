import { BaseComponent } from '../../component.js'

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`
      <section class="note-container">
        <h3 class="note-title"></h3>
        <p class="note-body"></p>
      </section>
    `)

    const titleElement = this.element.querySelector('.note-title')! as HTMLHeadingElement
    titleElement.textContent = title

    const bodyElement = this.element.querySelector('.note-body')! as HTMLParagraphElement
    bodyElement.textContent = body
  }
}
