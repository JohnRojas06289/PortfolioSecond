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