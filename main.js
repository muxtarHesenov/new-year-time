const newYearTime = new Date("2023-01-01 00:00").getTime();

function getNewYearTime() {
    const date = new Date().getTime();
    const between = newYearTime - date;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(between / day);
    const h = Math.floor((between % day) / hour);
    const m = Math.floor((between % hour) / minute);
    const s = Math.floor((between % minute) / second);
    
    document.getElementsByClassName('table')[0].innerHTML = `${d} gün, ${h} saat   ${m} dəqiqə   ${s} saniyə`;
}

if (true) {
    document.getElementById('blokText').innerHTML = 'Artıq yeni ildir, gedin yatın';
}

setInterval(function () {
    getNewYearTime()
}, 1000);


