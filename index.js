document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-bar');
    const menu=document.querySelector('.menu');
     const overlay=document.querySelector('.nav-overlay');
     
     menu.addEventListener('click',()=>{
       sidenav.classList.add('style');
     })
     overlay.addEventListener('click',()=>{
        sidenav.classList.remove('style');
      })

})