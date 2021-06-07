import { BaseComponent } from '../../component.js'

export class DiaryComponent extends BaseComponent<HTMLElement> {
  constructor(
    thanks: Array<string>,
    feels: Array<string>,
    resolutions: Array<string>,
    excellentThings: Array<string>,
    betterDays: Array<string>
  ) {
    super(`
      <section class="diary-contaner">
        <div class="morning-container">
          <h3>Morning</h3>
          <div class="morning">
            <h4>내가 감사하게 여기는 것들</h4>
            <ul class="thank-list"></ul>
            <h4>오늘을 기분 좋게 만드는 것은?</h4>
            <ul class="feel-list"></ul>
            <h4>오늘의 다짐</h4>
            <ul class="resolution-list"></ul>
          </div>
        </div>
        <div class="night-container">
          <h3>Night</h3>
          <div class="night">
            <h4>오늘 있었던 굉장한 일 3가지</h4>
            <ul class="excellent-thing-list"></ul>
            <h4>오늘을 어떻게 더 좋은 날로 만들었나?</h4>
            <ul class="better-day-list"></ul>
          </div>
        </div>
      </section>
    `)

    const thanksElement = this.element.querySelector('.thank-list')! as HTMLUListElement
    thanks.forEach((thank, index) => {
      const li = document.createElement('li')
      li.classList.add(`thank-${index}`)
      li.textContent = thank

      thanksElement.appendChild(li)
    })

    const feelsElement = this.element.querySelector('.feel-list')! as HTMLUListElement
    feels.forEach((feel, index) => {
      const li = document.createElement('li')
      li.classList.add(`feel-${index}`)
      li.textContent = feel

      feelsElement.appendChild(li)
    })

    const resolutionsElement = this.element.querySelector('.resolution-list')! as HTMLUListElement
    resolutions.forEach((resolution, index) => {
      const li = document.createElement('li')
      li.classList.add(`resolution-${index}`)
      li.textContent = resolution

      resolutionsElement.appendChild(li)
    })

    const excellentThingsElement = this.element.querySelector('.excellent-thing-list')! as HTMLUListElement
    excellentThings.forEach((excellentThing, index) => {
      const li = document.createElement('li')
      li.classList.add(`excellent-thing-${index}`)
      li.textContent = excellentThing

      excellentThingsElement.appendChild(li)
    })

    const betterDaysElement = this.element.querySelector('.better-day-list')! as HTMLUListElement
    betterDays.forEach((betterDay, index) => {
      const li = document.createElement('li')
      li.classList.add(`better-day-${index}`)
      li.textContent = betterDay

      betterDaysElement.appendChild(li)
    })
  }
}
