function procent() {
    let width = $('.procents').innerWidth();
    $('#phprocent').animate({paddingLeft:width * 0.79 / 5 + '%'},2000);
    $('#htmlCss').animate({paddingLeft:width * 0.9 / 5 + '%'},2000);
    $('#js').animate({paddingLeft:width * 0.69 / 5 + '%'},2000);
    $('#word').animate({paddingLeft:width * 0.92 / 5 + '%'},2000);
}

procent(); 


function initMap() {
    var uluru = {lat: 49.84, lng: 24.03};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
initMap();

let flag = true;
function cross(){
    if(flag){
        document.getElementById('one').style.display = "block";
        document.getElementById('two').style.display = "block";
        flag = false;
    } else {
        document.getElementById('one').style.display = "none";
        document.getElementById('two').style.display = "none"; 
        flag = true;
    }
}
document.getElementById('checkbox').addEventListener('click', cross)