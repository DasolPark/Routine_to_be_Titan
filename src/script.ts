type Day = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thur' | 'Fri' | 'Sat';

const DAYS: Day[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

function getDay(): Day {
  return DAYS[new Date().getDay()];
}

const Header = () => {
  return `
      <ul>
        ${DAYS.map(day => `<li>${day}</li>`).join('')}
      </ul>
    `
}

const headerEl = document.querySelector('#header');
if (headerEl) {
  headerEl.innerHTML = Header();
}