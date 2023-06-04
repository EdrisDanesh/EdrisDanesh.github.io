function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = 'AM';

    if(h==0){
        h=12
    }
    if(h>12){
        h = h-12;
        session = "PM"
    }

    h = (h<10)? "0" + h : h;
    m = (m<10)? "0" + m : m;

    var time = h + ":"+ m +" "+ session;
    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime, 1000)
}

showTime();