function tip() {

        
    var percentage;
    var v;
    var show;
    v = document.getElementById('no1').value;

    if (v < 50) {
        percentage = .2;
    }
    else if (v >= 50 && v < 200) {
        percentage = .15;
    }
    else if (v >= 200) {
        percentage = .1;
    }

    var tip = percentage * v;

    show = document.getElementById('show').innerHTML = "Please pay Tip of Rs " + tip + "/-" + "<br/>" + "Thanks for using our service."


}
