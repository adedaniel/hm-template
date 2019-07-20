// var typed = new Typed('.element', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
// });

// var options = {
//     strings: ["<i>First</i> ^ sentence.", "<i>First</i> second sentence."],
//     typeSpeed: 40
// }

// var typed = new Typed(".typing", options);



//  $(".counter1").animate.






var i1 = 0;

var inv1 = setInterval(function() {
    if (i1 < 450)
        document.querySelector(".counter1").innerHTML = ++i1;
    else
        clearInterval(inv1);
}, 3000 / 450);

var i2 = 0;
var inv2 = setInterval(function() {
    if (i2 < 550)
        document.querySelector(".counter2").innerHTML = ++i2;
    else
        clearInterval(inv2);
}, 3000 / 550);
var i3 = 0;
var inv3 = setInterval(function() {
    if (i3 < 15)
        document.querySelector(".counter3").innerHTML = ++i3;
    else
        clearInterval(inv3);
}, 3000 / 15);
var i4 = 0;
var inv4 = setInterval(function() {
    if (i4 < 45)
        document.querySelector(".counter4").innerHTML = ++i4;
    else
        clearInterval(inv4);
}, 3000 / 45);

var typed = new Typed('.int', {
    // Waits 1000ms after typing "First"
    strings: ['DevFolio', 'Web Developer', 'Web Designer', 'Front-End Developer', 'Graphics Designer'],
    /* "First ^1000 sentence." */
    //  smartBackspace: false,
    typeSpeed: 80,
    backSpeed: 35,
    loop: true
})

function changed1() {
    document.querySelector('.icofont-computer').style.color = '#0078ff';
    document.querySelector('.ico-circle.one').style.backgroundColor = '#dcdada';
}

function changed2() {

    document.querySelector('.icofont-ui-camera').style.color = '#0078ff';
    document.querySelector('.ico-circle.two').style.backgroundColor = '#dcdada';
}

function changed3() {

    document.querySelector('.icofont-code-alt').style.color = '#0078ff';
    document.querySelector('.ico-circle.three').style.backgroundColor = '#dcdada';
}

function changed4() {

    document.querySelector('.icofont-smart-phone').style.color = '#0078ff';
    document.querySelector('.ico-circle.four').style.backgroundColor = '#dcdada';
}

function changed5() {

    document.querySelector('.icofont-paint').style.color = '#0078ff';
    document.querySelector('.ico-circle.five').style.backgroundColor = '#dcdada';
}

function changed6() {

    document.querySelector('.icofont-chart-bar-graph').style.color = '#0078ff';
    document.querySelector('.ico-circle.six').style.backgroundColor = '#dcdada';
}

function retur1() {
    document.querySelector('.icofont-computer').style.color = 'white';
    document.querySelector('.ico-circle.one').style.backgroundColor = '#0078ff';
}

function retur2() {
    document.querySelector('.icofont-ui-camera').style.color = 'white';
    document.querySelector('.ico-circle.two').style.backgroundColor = '#0078ff';
}

function retur3() {
    document.querySelector('.icofont-code-alt').style.color = 'white';
    document.querySelector('.ico-circle.three').style.backgroundColor = '#0078ff';
}

function retur4() {
    document.querySelector('.icofont-smart-phone').style.color = 'white';
    document.querySelector('.ico-circle.four').style.backgroundColor = '#0078ff';
}

function retur5() {
    document.querySelector('.icofont-paint').style.color = 'white';
    document.querySelector('.ico-circle.five').style.backgroundColor = '#0078ff';
}

function retur6() {
    document.querySelector('.icofont-chart-bar-graph').style.color = 'white';
    document.querySelector('.ico-circle.six').style.backgroundColor = '#0078ff';

}