const hour = document.querySelector('.h'),
    minute = document.querySelector('.m'),
    second = document.querySelector('.s'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();

    hour.style.transform = `rotate(${h * 30}deg)`
    minute.style.transform = `rotate(${m * 6}deg)`
    second.style.transform = `rotate(${s * 6}deg)`

    hours.innerHTML = h < 10 ? "0" + h : h
    minutes.innerHTML = m < 10 ? "0" + m : m

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()

const link = document.querySelectorAll('.tabsItem'),
    content = document.querySelectorAll('.tabsContentItem '),
    button = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span'),
    spanHour = document.querySelector('.stopwatch__hours'),
    spanMinute = document.querySelector('.stopwatch__minutes'),
    spanSecond = document.querySelector('.stopwatch__seconds');

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let k = 0; k < link.length; k++) {
            link[k].classList.remove('active')
            content[k].classList.remove('active')
        }
        this.classList.add('active')
        content[i].classList.add('active')
    })
}
var timer;
button.addEventListener('click', function (i) {
    if (this.innerHTML == 'start') {
        span.classList.add('active');
        this.innerHTML = 'STOP';
        time()
    }else if(this.innerHTML == 'STOP') {
        span.classList.remove('active');
        span.classList.add('active_clear');
        this.innerHTML = 'CLEAR';
        clearTimeout(timer);
    }else if(this.innerHTML == 'CLEAR') {
        span.classList.remove('active_clear');
        this.innerHTML = 'START';
        spanSecond.innerHTML = 0;
        spanMinute.innerHTML=0;
        spanHour.innerHTML=0;
    }

})

function time() {
    spanSecond.innerHTML++;
    if (spanSecond.innerHTML >= 59) {
        spanSecond.innerHTML = 0;
        spanMinute.innerHTML++;
    }
    if (spanMinute.innerHTML >= 59) {
        spanMinute.innerHTML = 0;
        spanHour.innerHTML++;
    }


    timer = setTimeout(() => {
        time()
    }, 1000);
}