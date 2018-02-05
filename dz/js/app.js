setInterval(function() {
    let date = new Date();

    let format = [
        date.getHours() < 10 ? "0" + date.getHours():date.getHours(),
        date.getMinutes() < 10 ? "0" + date.getMinutes():date.getMinutes(),
        date.getSeconds() < 10 ? "0" + date.getSeconds():date.getSeconds()
    ].join(":");

    document.getElementById("clock").innerHTML = format;
}, 0);

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

$(document).ready(function() {
    $('#send_msg').click(function() {
        let firstname = document.getElementById('firstname');
        let ref = /^[A-Z]{1}[a-zA-Z]{1,20}$/;
        if(firstname.value !== "") {
            console.log(ref.test(firstname.value));
        }
        localStorage.setItem('firstname', firstname.value);
        console.log(firstname.value);


        let lastname = document.getElementById('lastname');
        let rel = /^[A-Z]{1}[a-zA-Z]{1,20}$/;
        if(lastname.value !== "") {
            console.log(rel.test(lastname.value));
        }
        localStorage.setItem('lastname', lastname.value);
        console.log(lastname.value);


        let email = document.getElementById('email');
        let ree = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        if(email.value !== "") {
            console.log(ree.test(email.value));
        }
        localStorage.setItem('email', email.value);
        console.log(email.value);


        let city = document.getElementById('city');
        let simple = document.getElementById('simple');
        let t = document.getElementById('t');
        if(city === simple.value) {
            console.log("Bad!");
        } else if(city === t.value) {
            console.log("Good!");
        }
        localStorage.setItem('city', t.value);
        console.log(t.value);


        let address = document.getElementById('address');
        if(address.value !== "") {
            console.log("Address = true");
        } else {
            console.log("Address = false");
        }
        localStorage.setItem('address', address.value);
        console.log(address.value);


        let data_smart = document.getElementById('data_smart');
        data_smart.style.display = 'block';

        let str1 = `Спасибо за заказ!!!: ${firstname.value}, ${lastname.value}, ${email.value}, ${t.value}, ${address.value}, Apple Iphone: ${apple.value}`;
        let str2 = `Спасибо за заказ!!!: ${firstname.value}, ${lastname.value}, ${email.value}, ${t.value}, ${address.value}, Meizu: ${meizu.value}`;
        let str3 = `Спасибо за заказ!!!: ${firstname.value}, ${lastname.value}, ${email.value}, ${t.value}, ${address.value}, Lenovo: ${lenovo.value}`;

        if(str1) {
            data_smart.innerHTML = str1;
        } else if(str2) {
            data_smart.innerHTML = str2;
        } else if(str3) {
            data_smart.innerHTML = str3;
        }

        $.ajax({
            method:'GET',
            url: 'https://soundcloud.com/'
        }).done(function(res) {
            console.log('SUCCESS');
            console.log(res);
        }).fail(function(res) {
            console.log('FAILED');
        });
    });


    $('#box1').click(function() {
        if(apple.value) {
            let name_product = document.getElementById('name_product');
            let sum1 = apple.value*1000;
            name_product.innerHTML = 'Apple Iphone: ' + apple.value + 'шт * 1000$ = ' + sum1 + '$';
        }

        localStorage.setItem('Apple Iphone', apple.value);
        console.log(apple.value);
    });

    $('#box2').click(function() {
        if(meizu.value) {
            let name_product = document.getElementById('name_product');
            let sum2 = meizu.value*250;
            name_product.innerHTML = 'Meizu: ' + meizu.value + 'шт * 250$ = '+ sum2 + '$';
        }

        localStorage.setItem('Meizu', meizu.value);
        console.log(meizu.value);
    });

    $('#box3').click(function() {
        if(lenovo.value) {
            let name_product = document.getElementById('name_product');
            let sum3 = lenovo.value*100;
            name_product.innerHTML = 'Lenovo: ' + lenovo.value + 'шт * 100$ = ' + sum3 + '$';
        }

        localStorage.setItem('Lenovo', lenovo.value);
        console.log(lenovo.value);
    });
});
