// $(document).ready(function(){
//     $("#target").on("click","a", function (event) {
//         event.preventDefault();
//         let id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('html').animate({scrollTop: top}, 1500);
//     });
// });



$(document).ready(function(){
    console.log("start!");
    $("a#target").on("click","a", function (event) {
        console.log(event);
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        console.log("event.preventDefault()");
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href');
console.log(id);
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        console.log("top = " + top);
        //анимируем переход на расстояние - top за 1500 мс
        $('body').animate({scrollTop: top}, 3500);
        console.log("ready!");
    });
});
