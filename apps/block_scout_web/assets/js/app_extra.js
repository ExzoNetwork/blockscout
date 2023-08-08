import { isDarkMode } from './lib/dark_mode'

function applyDarkMode () {
  if (isDarkMode()) {
    document.body.className += ' ' + 'dark-theme-applied'
    document.body.style.backgroundColor = '#161b19'
  }
}
window.onload = applyDarkMode()

if (isDarkMode()) {
  if (document.getElementById('top-navbar')) {
    document.getElementById('top-navbar').style.backgroundColor = '#1e2423'
  }
  /*
  if (document.getElementById('navbar-logo')) {
    document.getElementById('navbar-logo').style.filter = 'brightness(0) invert(1)'
  }
  */
  const modeChanger = document.getElementById('dark-mode-changer')
  if (modeChanger) {
    modeChanger.className += ' ' + 'dark-mode-changer--dark'
  }

  const search = document.getElementById('main-search-autocomplete')
  const searchMobile = document.getElementById('main-search-autocomplete-mobile')
  if (search && search.style) {
    search.style.backgroundColor = '#1f2623'
    search.style.borderColor = '#1f2623'
  }
  if (searchMobile && searchMobile.style) {
    searchMobile.style.backgroundColor = '#1f2623'
    searchMobile.style.borderColor = '#1f2623'
  }
}
