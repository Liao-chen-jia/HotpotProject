const sunbutton = document.querySelector('.c-indexMainPicture__btn.--prev');
const nightbutton = document.querySelector('.c-indexMainPicture__btn.--next')

console.dir(sunbutton)

sunbutton.addEventListener("click", function(){
  document.querySelector('.c-indexMainPicture__text.--sun').classList.add('is-active')
  document.querySelector('.c-indexMainPicture__text.--night').classList.remove('is-active')
  // nightbutton.classList.add('is-active')
  // sunbutton.classList.remove('is-active')
  // setTimeout(function(){
  //   nightbutton.style.opacity = 1
  // },2000)
})

nightbutton.addEventListener("click", function(){
  document.querySelector('.c-indexMainPicture__text.--night').classList.add('is-active')
  document.querySelector('.c-indexMainPicture__text.--sun').classList.remove('is-active')
  // sunbutton.classList.add('is-active')
  // nightbutton.classList.remove('is-active')
  // setTimeout(function(){
  //   sunbutton.style.opacity = 1
  // },2000)
})