import { BaseComponent, Component } from '../component.js'

export interface Composable {
  addChild(child: Component, position?: InsertPosition): void
}

type CloseListener = () => void

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements Composable {
  private closeListener?: CloseListener

  constructor() {
    super(`
      <li class="page-item">
        <button class="close-btn">
          <span>&times;</span>
        </button>
        <div class="item"></div>
      </li>
    `)

    const closeBtn = this.element.querySelector('.close-btn')! as HTMLSpanElement
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener()
    }
  }

  addChild(child: Component, position: InsertPosition = 'afterbegin') {
    child.attachTo(this.element, position)
  }

  setOnCloseListener(closeListener: CloseListener) {
    this.closeListener = closeListener
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super(`<ul class="page"></ul>`)
  }

  addChild(child: Component, position: InsertPosition = 'afterbegin') {
    const item = new PageItemComponent()
    item.addChild(child, position)
    item.attachTo(this.element)
    item.setOnCloseListener(() => {
      item.removeFrom(this.element)
    })
  }
}
