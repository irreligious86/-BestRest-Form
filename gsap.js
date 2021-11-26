console.log('GSAP! I am wogking!')

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

tl1.from(".invitation-log-block", {
    opacity: 0,
    duration: 1.8,
    y: -300,
    stagger: 0.3,
    ease: "back.out"
});

tl2.from(".invitation-title-block", {
    opacity: 0,
    duration: 1.8,
    stagger: 0.3,
    ease: "back.out"
});

tl3.from(".invitation-registration-block", {
    opacity: 0,
    duration: 1.8,
    y: +300,
    stagger: 0.3,
    ease: "back.out"
});




gsap.from(".form-group", {
    duration: 1,
    scale: 1.4,
    opacity: 0,
    y: +200,
    delay: .4,
    stagger: .2,
    // ease: "elastic",
    ease: "back.out",
    force3D: true
});

// document.querySelectorAll(".form-group").forEach(function(element) {
//     element.addEventListener("click", function() {
//         console.log('Hello! I am scrolling!');
//         gsap.from(".form-group", {
//             duration: 0.5,
//             opacity: 0,
//             y: +800,
//             stagger: 0.2,
//             ease: "back.out"
//         });
//     });
// });
//
// console.log(document.forms[0]);










