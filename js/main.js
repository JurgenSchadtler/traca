function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  //reset; true,
})

sr.reveal(`.home-title, .home-subtitle`, {

  origin: 'top',
  interval: 100,

})

sr.reveal(`.ct, .Custom_Button`, {
  origin: 'bottom',
  interval: 100,
})

sr.reveal(`.title`, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.specialty__title, .specialty__img`, {
  origin: 'bottom',
  interval: 100,
})

/* --------------------------- Animated Number Counter --------------------------- */
const counters = document.querySelectorAll('.value');
const speed = 500;


const Count_Number = document.querySelector('#Count_Number');
let boolean = false;

document.addEventListener('scroll', function () {
  if (boolean) {
    return
  }
  isInViewport(Count_Number) ?
    (
      counters.forEach(counter => {
        const animate = () => {
          const value = +counter.getAttribute('akhi');
          const data = +counter.innerText;

          const time = value / speed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
          } else {
            counter.innerText = value;
          }

        }

        animate();
      })
      ,
      boolean = true
    ) : boolean = false

}, {
  passive: true
});


const container = document.getElementById("container-empleado")

fetch('https://randommer.io/api/Name?nameType=firstname&quantity=5', {
  headers: {
    'accept': '*/*',
    'X-Api-Key': '4afbb68e9e7e46718e55f23233e6dc0b'
  }
}).then(response => {
  if (response.ok) {
    return response.json();

  } else {
    throw new Error(response.statusText);
  }
})
  .then(data => {

    const iterator = data.values();

    for (const value of iterator) {
      console.log(value);
      let li = document.createElement("p");
      li.classList.add("empleado-lista");
      let node = document.createTextNode(value);
      li.appendChild(node);
      container.appendChild(li);
    }


  });


/* function populate(dog_list){
  const container = document.getElementById("container");
  for (dog in dog_list) {
    let li = document.createElement("li");
    let node = document.createTextNode(dog);
    li.appendChild(node);
    container.appendChild(li);
  }
};
 */

