const open = document.getElementById('open')
const close = document.getElementById('close')
const newsFeed = document.getElementById('newsFeed')

open.addEventListener('click', () => newsFeed.classList.add('show'))

close.addEventListener('click', () => newsFeed.classList.remove('show'))

const open2 = document.getElementById('open2')
const close2 = document.getElementById('close2')
const timesCartoons = document.getElementById('timesCartoons')

open2.addEventListener('click', () => timesCartoons.classList.add('show'))

close2.addEventListener('click', () => timesCartoons.classList.remove('show'))