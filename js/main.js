const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset; true,
  })
  
  sr.reveal(`.home-title, .home-subtitle`,{
  
    origin:'top',
    interval:100,
  
  })

  sr.reveal(`.ct, .Custom_Button`,{
    origin:'bottom',
    interval:100,
  })

  sr.reveal(`.title`,{
    origin:'top',
    interval:100,
  })

  sr.reveal(`.specialty__title, .specialty__img`,{
    origin:'bottom',
    interval:100,
  })