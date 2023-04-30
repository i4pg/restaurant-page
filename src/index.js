import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/js/all';
import './style/style.css'

import { pageLoad } from './page_load';
import { showMenu } from './menu';
import { aboutUs } from './about';

const contentElement = document.getElementById('content')
contentElement.innerHTML = pageLoad()

let showMenuBtn = document.getElementById('show-menu')
let showHomeBtn = document.getElementById('show-home')
let aboutUsBtn = document.getElementById('show-about')

showMenuBtn.addEventListener('click', () => {
  contentElement.innerHTML = showMenu()
})

showHomeBtn.addEventListener('click', () => {
  contentElement.innerHTML = pageLoad()
})

aboutUsBtn.addEventListener('click', () => {
  contentElement.innerHTML = aboutUs()
})
