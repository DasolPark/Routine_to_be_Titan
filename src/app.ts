import { ImageComponent } from './components/page/item/image.js'
import { NoteComponent } from './components/page/item/note.js'
import { PageComponent } from './components/page/page.js'

class App {
  private readonly page: PageComponent

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()

    const Image = new ImageComponent('Image Title', 'https://picsum.photos/500/300')
    this.page.addChild(Image)

    const Note = new NoteComponent('Note Title', 'Hey there!')
    this.page.addChild(Note)

    this.page.attachTo(appRoot)
  }
}

new App(document.querySelector('.main')! as HTMLElement)
