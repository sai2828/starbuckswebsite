// index
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
  }
  
  function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color; 
  } 

//   Navbar
const nav = document.querySelector('header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// news.html
  const counters = document.querySelectorAll('.counter')

  counters.forEach(counter => {
      counter.innerText = '0'

      const updateCounter = () => {
          const target = +counter.getAttribute('data-target')
          const c = +counter.innerText

          const increment = target /200

          if(c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`
              setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
      }
      updateCounter()
  })