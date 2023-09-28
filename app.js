const btnShare = document.querySelector('.btnShare');
let main = document.querySelector('main');



btnShare.addEventListener('mouseenter', () => {
    
    // deleteHTML();
    
    let divNotication = document.createElement('DIV');
    divNotication.classList.add('container-active');
    divNotication.innerHTML = `
    <div class="active">
    <p>Share</p>
    
    <a href="https://www.instagram.com/sanchezetto"><img src="images/icon-facebook.svg" alt="icon-facebook"></a>
    <a href="https://www.instagram.com/sanchezetto"><img src="images/icon-twitter.svg" alt="icon-twitter"></a>
    <a href="https://www.instagram.com/sanchezetto"><img src="images/icon-pinterest.svg" alt="icon-pinterest"></a>
    </div>
    <div class="square">
    </div>
    `
    main.appendChild(divNotication);
    
    btnShare.addEventListener('mouseleave', () => {
        
        

        setTimeout(() => {
            divNotication.remove();
        }, 2000)
    });
    
    
    
    
    
    
    
    
    
  

})

//delete notificacion with a click!

// function deleteHTML() {
//     const notificacion = document.querySelectorAll('.container-active');

//     while (notificacion.length > 0) {
//         notificacion[0].remove();
//         notificacion = document.querySelector('.container-active');
//       }

       
// }





// <div class="container-active">
//       <div class="active">
//         <div class="icon-share">
//           <p>Share</p>
//         </div>
//         <div class="icon-social-media">
//           <img src="images/icon-facebook.svg" alt="icon-facebook">
//           <img src="images/icon-twitter.svg" alt="icon-twitter">
//           <img src="images/icon-pinterest.svg" alt="icon-pinterest">
//         </div>
//         <div class="square">

//         </div>
//       </div>
//     </div>