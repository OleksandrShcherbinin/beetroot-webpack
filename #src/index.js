import $ from 'jquery';
import slick from 'slick-carousel';

import '@/scss/style.scss';


//-------------header menu scroll
// $(function () {
//     $('.header-nav-menu').on('click', 'a', function (event) {
//         event.preventDefault();
//         let anchor = $(this).attr('href');
//         let top = $(anchor).offset().top;
//         $('body,html').animate({scrollTop: top}, 500)
//     });
//     $('.footer-nav-menu').on('click', 'a', function (event) {
//         event.preventDefault();
//         let anchor = $(this).attr('href');
//         let top = $(anchor).offset().top;
//         $('body,html').animate({scrollTop: top}, 500)
//     });
//
// });

document.querySelectorAll('.header-nav-menu__link, .footer-nav-menu__link').forEach(elem => elem.addEventListener('click', function (event) {
    event.preventDefault();

    let elemAnchor = document.querySelector(this.getAttribute('href'));

    elemAnchor.scrollIntoView({block: "center", behavior: "smooth"});

}));
//--------------------------SMALL arrow down
$(function () {
    $('.header-arrow__down').on('click', function (event) {
        event.preventDefault();
        let anchor = $(this).parent().attr('href');
        let top = $(anchor).offset().top;
        $('body,html').animate({scrollTop: top}, 500)
    })
});

//=========================================================
//
$(document).scroll(() => {
    if($(window).scrollTop() > 150) {
        $('.header-nav').addClass('header-nav--scroll');
    }
    else {
        $('.header-nav').removeClass('header-nav--scroll');
    }
});

//-----------------------Header slider-----------------------------
$('.header-slider').slick(
    {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        variableHeight: true,
        arrows: false,
        speed: 700,
        dots: true,
    }
);

$('.news-slider').slick(
    {
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        mobileFirst: true,
        centerMode: true,
        arrows: true,
        speed: 500,
        variableWidth: true,
        variableHeight: true,
        dots: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='img/L.png' alt='arrow left' style='margin-right: 30px; cursor: pointer'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/R.png' alt='arrow right' style='margin-left: 30px; cursor: pointer'>",

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    speed: 1000,
                }            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                    speed: 1000,
                }
            }
        ]
    }
);
//-------------------------Parallax on scroll--------------------
let moveDirection;
window.addEventListener('scroll',  function(e) {
    // определяем направление скрола
    moveDirection = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
}
);

let images = document.querySelectorAll('.we-do-wrapper-article__img');

function parallax(event) {

        if (!moveDirection) {
                images[0].style.transform = `translate(16%, 70px)`;
                images[0].style.transition = "transform 1s";
                images[1].style.transform = `translate(-16%, 70px)`;
                images[1].style.transition = "transform 1s";
        }
        else {
                images[0].style.transform = `translate(0, 0)`;
                images[0].style.transition = "transform 1s";
                images[1].style.transform = `translate(0, 0)`;
                images[1].style.transition = "transform 1s";
        }
}

document.addEventListener('scroll', parallax);

//======================do not show "Read full info... if it's too short
let readInfo = document.querySelectorAll('.we-do-wrapper-article-info__button');

let text;
readInfo.forEach(elem => elem.addEventListener('click', function () {
        let text = this.previousSibling.previousSibling;
    if (this.children[0].innerText.toLowerCase() === "more details") {
        this.children[0].innerText = "less details";
        text.style.overflow = "visible";
        text.style.height = "100%";
    } else if (this.children[0].innerText.toLowerCase() === "less details") {
        text.style.overflow = "hidden";
        text.style.height = "80px";
        this.children[0].innerText = "more details";
        text.previousSibling.previousSibling.scrollIntoView({behavior: "smooth"});
    }
}));

//----------------------------------Google map---------------------------
function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
                center: {lat: 40.653276055686185, lng: -73.93594976912938},
                zoom: 12,
                styles: [
                        {
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#f5f5f5"
                                        }
                                ]
                        },
                        {
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "visibility": "off"
                                        }
                                ]
                        },
                        {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#616161"
                                        }
                                ]
                        },
                        {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                        {
                                                "color": "#f5f5f5"
                                        }
                                ]
                        },
                        {
                                "featureType": "administrative.land_parcel",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#bdbdbd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#eeeeee"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#757575"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#e5e5e5"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#9e9e9e"
                                        }
                                ]
                        },
                        {
                                "featureType": "road",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#ffffff"
                                        }
                                ]
                        },
                        {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#757575"
                                        }
                                ]
                        },
                        {
                                "featureType": "road.highway",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#dadada"
                                        }
                                ]
                        },
                        {
                                "featureType": "road.highway",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#616161"
                                        }
                                ]
                        },
                        {
                                "featureType": "road.local",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#9e9e9e"
                                        }
                                ]
                        },
                        {
                                "featureType": "transit.line",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#e5e5e5"
                                        }
                                ]
                        },
                        {
                                "featureType": "transit.station",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#eeeeee"
                                        }
                                ]
                        },
                        {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                        {
                                                "color": "#c9c9c9"
                                        }
                                ]
                        },
                        {
                                "featureType": "water",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#9e9e9e"
                                        }
                                ]
                        }
                ]
        });
        let marker = new google.maps.Marker({
            position: {lat: 40.683314992328825, lng: -73.90941145054774},
            icon: "./img/marker.png",
            map: map
        });
}

