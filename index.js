var btn = document.getElementById('btn')

function leftClick() {
	btn.style.left = '0'
}

function rightClick() {
	btn.style.left = '110px'
}
// date && time doms

let date=document.querySelector('.wts-date-picker')

flatpickr(".wts-date-picker", {
   /*  altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d", */

});


flatpickr(".wts-time-picker", {
     enableTime:true,
     altInput: true, altFormat: "H :i"
 });
 


