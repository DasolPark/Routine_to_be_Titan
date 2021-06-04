import { BaseComponent, Component } from '../component.js'

export interface Composable {
  addChild(child: Component, position?: InsertPosition): void
}

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements Composable {
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
      console.log('close button clicked!')
    }
  }

  addChild(child: Component, position: InsertPosition = 'afterbegin') {
    child.attachTo(this.element, position)
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
  }
}
