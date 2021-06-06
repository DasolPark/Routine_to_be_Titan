import { BaseComponent } from '../../component.js'

export class TodoComponent extends BaseComponent<HTMLInputElement> {
  constructor(todo: string) {
    super(`
      <section class="todo-container">
        <input type="checkbox" class="todo" id="todo">
        <label for="todo" class="todo-label"></label>
      </section>
    `)

    const labelElement = this.element.querySelector('.todo-label')! as HTMLLabelElement
    labelElement.textContent = todo

    const inputElement = this.element.querySelector('.todo')! as HTMLInputElement
    inputElement.value = todo
  }
}
