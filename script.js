const nav = document.querySelector('nav');

        window.addEventListener('scroll', ()=>{
            
            if(window.scrollY>=50){
                nav.classList.add('active_nav')
            }
            else{
                nav.classList.remove('active_nav')
            }


        })
        var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// window.onscroll = function()
// {scrollFunction()};
// function top(){
//     document.body.scrollTop=0;
//     document.documentElement.scrollTop=0;
// }