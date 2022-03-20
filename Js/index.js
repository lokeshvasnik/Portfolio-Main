
// For the typing text 

var typed  = new Typed(".auto__type",{

    strings: ["Lokesh Vasnik" , "a Front-End Web Developer " ],
    typeSpeed:110,
    backSpeed:110,
    loop: true
});



// Active navbar links 

const sections =  document.querySelectorAll('section');

const navLi = document.querySelectorAll(' .nav-item .nav-link')

window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {

      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight

      if (pageYOffset >= sectionTop - sectionHeight / 1.5) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });

    console.log(current);
    
  };
  