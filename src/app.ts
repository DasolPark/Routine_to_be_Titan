import { DiaryComponent } from './components/page/item/diary.js'
import { ImageComponent } from './components/page/item/image.js'
import { NoteComponent } from './components/page/item/note.js'
import { TodoComponent } from './components/page/item/todo.js'
import { VideoComponent } from './components/page/item/video.js'
import { PageComponent } from './components/page/page.js'

class App {
  private readonly page: PageComponent

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent()

    const Image = new ImageComponent('Image Title', 'https://picsum.photos/500/300')
    this.page.addChild(Image)

    const Note = new NoteComponent('Note Title', 'Hey there!')
    this.page.addChild(Note)

    const Todo = new TodoComponent('Meditation')
    this.page.addChild(Todo)

    const Diary = new DiaryComponent(
      ['one', 'two', 'three'],
      ['one', 'two', 'three'],
      ['one', 'two', 'three'],
      ['one', 'two', 'three'],
      ['one', 'two', 'three']
    )
    this.page.addChild(Diary)

    const Video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/g0_Bd_e7MF4')
    this.page.addChild(Video)

    this.page.attachTo(appRoot)
  }
}

new App(document.querySelector('.main')! as HTMLElement)
