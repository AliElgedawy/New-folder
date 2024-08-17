document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    loadContent(id);
});

function loadContent(id) {

    var title = document.getElementById('details-title');
    // var content = document.getElementById('content');
    var projectImage = document.getElementById('projectImage');

    // استخدام الترجمات بناءً على اللغة المحددة
    if (id == "SouthernBinZayedAxis") {
        title.innerHTML = '<span data-lang="SouthernBinZayedAxis"></span>';

        for (var i = 1; i < 6; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/SouthernBinZayedAxis/${i}.jpg" width="800" alt="Slider 01"></div>`


        }

    } else if (id == "EgyptFutureDabaaProject") {
        title.innerHTML = '<span data-lang="EgyptFutureDabaaProject"></span>';

        for (var i = 1; i < 7; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/Egypt'sFuturedabaaproject/${i}.jpg" width="800" alt="Slider 01"></div>`


        }

    }
    else if (id == "RoadworksAley") {
        title.innerHTML = '<span data-lang="RoadworksAley"></span>';

        for (var i = 1; i < 7; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/RoadworksAley/${i}.jpg" width="800" alt="Slider 01"></div>`


        }

    }
    else if (id == "AhmadiyaStationProject") {
    title.innerHTML = '<span data-lang="AhmadiyaStationProject"></span>';

        for (var i = 1; i < 14; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/AhmadiyaStationProject/${i}.jpg" width="800" alt="Slider 01"></div>`


        }
    }
    else if (id == "Sherbinstationproject") {
       title.innerHTML = '<span data-lang="Sherbinstationproject"></span>';

        for (var i = 1; i < 8; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/Sherbinstationproject/${i}.jpg" width="800" alt="Slider 01"></div>`


        } 

    }
 else if (id == "Road32Project") {
       title.innerHTML = '<span data-lang="Road32Project"></span>';

        for (var i = 1; i < 5; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/Road32Project/${i}.jpg" width="800" alt="Slider 01"></div>`


        } 

    }
     else if (id == "BinZayedAxisProject") {
       title.innerHTML = '<span data-lang="BinZayedAxisProject"></span>';

        for (var i = 1; i < 8; i++) {
            projectImage.innerHTML += `<div class="swiper-slide" > <div class="single-flexible-slider"> <img class="img-fluid" src="./assets/images/projects/AMHZ/BinZayedAxisProject/${i}.jpg" width="800" alt="Slider 01"></div>`


        } 

    }
}
