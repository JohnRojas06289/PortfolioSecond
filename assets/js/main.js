// navigation menu
(() =>{

  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);


  function showNavMenu() {
    navMenu.classList.add("open");
    bodyScrollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();

  }
  function fadeOutEffect() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
    document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }

    // attach an event handlers to document
    document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
      
      if(event.target.hash !==""){
          event.preventDefault();
          const hash = event.target.hash;
          document.querySelector(".section.active").classList.add("hide");
          document.querySelector(".section.active").classList.remove("active");
          document.querySelector(hash).classList.add("active");
          document.querySelector(hash).classList.remove("hide");
          navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
          navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
          if(navMenu.classList.contains("open")){
          event.target.classList.add("active","inner-shadow");
          event.target.classList.remove("outer-shadow","hover-in-shadow");
          hideNavMenu();
          console.log("dsfdfsdf")
        }
        else{
          console.log("hello")
        }
      }
    }
  })

})();


//about selection tabs////
(()=>{
  const aboutSelection=document.querySelector('.about-section'),
  tabsContainer=document.querySelector('.about-tabs');

  tabsContainer.addEventListener("click",(event)=>{

      if(event.target.classList.contains("tab-item") &&
      !event.target.classList.contains('active')){
        const target= event.target.getAttribute("data-target");
        
        tabsContainer.querySelector('.active').classList.remove('outer-shadow','active');

        event.target.classList.add("active","outer-shadow");
        aboutSelection.querySelector(".tab-content.active").classList.remove("active");
        aboutSelection.querySelector(target).classList.add("active");
      }
    })
}) ();
    
function bodyScrollingToggle(){
    document.body.classList.toggle("stop-scrolling");
}


//portfolio filtered popup section interactivity //
(()=>{
const filterContainer =document.querySelector(".portfolio-filter"),
portfolioItemsContainer=document.querySelector(".portfolio-items"),
portfolioItems = document.querySelectorAll(".portfolio-item"),
popup = document.querySelector(".portfolio-popup"),
prevBtn=document.querySelector(".pp-prev"),
nextBtn = document.querySelector(".pp-next"),
closeBtn=document.querySelector(".pp-close"),
projectDetailsContainer = popup.querySelector(".pp-details"),
projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
let itemIndex,slideIndex,screenshot;

//filter portfolio items
filterContainer.addEventListener("click",(event)=>{
    if (event.target.classList.contains("filter-item") &&  !event.target.classList.contains("active")) {
    filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
    
    event.target.classList.add("active","outer-shadow");  
    const target = event.target.getAttribute("data-target");
    portfolioItems.forEach((item)=>{
        if (target === item.getAttribute("data-category") || target==='all') {
      item.classList.remove('hide');
      item.classList.add('show');
        }
        else{portfolioItems
            item.classList.remove('show');
            item.classList.add('hide')
        }
    })
    }
})

portfolioItemsContainer.addEventListener("click",(event)=>{
  if (event.target.closest(".portfolio-item-inner")){
    const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
    //get the portfolioItem index
    itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem); 
    screenshot = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshot");
    
// convert screenshots into array
screenshot = screenshot.split(",");
    if(screenshot.length === 1){
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
    else{
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    }
    slideIndex = 0;
    popupToggle();
    popupSlideshow();
    popupDetails();
  }
})
closeBtn.addEventListener("click",()=>{
    popupToggle();
    //     if (projectDetailsContainer.classList.contains("active")) {
    //  popupdDetailsToggle();       
    //     }
    })
    function popupToggle() {
    popup.classList.toggle("open")
    bodyScrollingToggle()
}

function popupSlideshow () {
    const imgSrc=screenshot[slideIndex];
    const popupImg=popup.querySelector(".pp-img");
    //activate loader untill the popuping finished
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src=imgSrc;
    popupImg.onload=()=>{
        popup.querySelector(".pp-loader").classList.remove("active");
    }
    popup.querySelector(".pp-counter").innerHTML=(slideIndex+1)+ " of " + screenshot.length;
}
//next slide
  nextBtn.addEventListener("click",()=>{
    if (slideIndex===screenshot.length+1) {
  slideIndex=0;        
    }
    else{
        slideIndex++;
    }
    popupSlideshow();
})
    
//prev slide
prevBtn.addEventListener("click",()=>{
    if (slideIndex===0) {
      slideIndex=screenshot.length-1; 
    }
    else{
        slideIndex--;
    }
    popupSlideshow();
    // console.log("SlideIndex:" + slideIndex)
})
function popupDetails(){
    //if portfolio-item-details not exist
    if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
        projectDetailsBtn.style.display="none";
        return;
    }
    //get the project tdetails
    const details= portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
    popup.querySelector(".pp-project-details").innerHTML=details;
    const title=portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    // console.log(title)
    popup.querySelector(".pp-title h2").innerHTML=title;
    const category=portfolioItems[itemIndex].getAttribute("data-category");
    popup.querySelector(".pp-project-category").innerHTML=category.split("-").projectDetailsContainer("");

}

projectDetailsBtn.addEventListener("click",()=>{
    popupdDetailsToggle()
})
function popupdDetailsToggle(){
if (projectDetailsContainer.classList.contains("active")) {
    
    projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    projectDetailsContainer.classList.remove("active");
    projectDetailsContainer.style.maxHeight= 0 + "px";
}
else{
    projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
    projectDetailsBtn.querySelector("i").classList.add("fa-minus");
    projectDetailsContainer.classList.add("active");
    projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
    popup.scrollTo(0,projectDetailsContainer.offsetTop);
    }
  }
}) ();


// testimonial section
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Gloria Rojas',
    position: 'Franservis, Gerente',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: 'Goku',
    position: 'Protector of the earth',
    photo: 'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    text:
      'I love this guy, is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: 'sdfsdfDA',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'dfdsfsfsdf',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: 'dfsfsdf',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
  },
  {
    name: 'José Franco',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}
setInterval(updateTestimonial, 10000);


// Hide all sections expect .active
(()=>{

const sections=document.querySelectorAll(".section");
sections.forEach((section)=>{
if(!section.classList.contains("active")){
        section.classList.add("hide")
}
})

})();

// window.addEventListener("load",()=>{
//     //preloader
//     document.querySelector(".preloader").classList.add("fade-out");
//     setTimeout(() => {
//         document.querySelector(".preloader").style.display="none";
//      }, 600);
// })