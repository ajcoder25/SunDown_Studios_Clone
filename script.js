// import LocomotiveScroll from 'locomotive-scroll/dist/locomotive-scroll.esm.min.js';


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// console.log(image);



// document.addEventListener("DOMContentLoaded", function () {
//     var elemC = document.getElementById("elem-container");

//     elemC.addEventListener("mouseenter", function () {
//         alert('this is AJay');
//     });
// });


// document.getElementById("elem-container").addEventListener("mouseenter", function () {
//     alert('this is AJay');
// });

// var elems = document.querySelectorAll(".elem")
// elems.forEach(function (e) {
//     e.addEventListener("mouseenter", function () {
//         var image = e.getAttribute("data-image")
//         fixed.style.backgroundImage = `url(${image})`
//     })
// });

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})

elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


