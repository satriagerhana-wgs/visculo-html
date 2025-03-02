// Start Dropdown Mega Menu
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(function (dropdownToggle)
{
    dropdownToggle.addEventListener('click', function (e)
    {
        e.preventDefault();

        const targetId = dropdownToggle.getAttribute('data-dropdown-target');
        const targetContent = document.getElementById(targetId);

        const isDisplayed = window.getComputedStyle(targetContent).getPropertyValue('display') === 'block';

        if (isDisplayed) {
            targetContent.style.display = 'none';
        } else {
            targetContent.style.display = 'block';
        }
    });
});
// End Dropdown Mega Menu

// SLICK 
$(document).ready(function ()
{
    function initSlickSlider()
    {
        $('.slick-card-product').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.prev-btn-2'),
            nextArrow: $('.prev-btn-2'),
            centerMode: false,

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ],
        });
    }

    function checkScreenSize()
    {
        if ($(window).width() <= 650) {
            initSlickSlider();
        } else {
            if ($('.slick-card-product').hasClass('slick-initialized')) {
                $('.slick-card-product').slick('unslick');
            }
        }
    }
    checkScreenSize();
    $(window).on('resize', function ()
    {
        checkScreenSize();
    });

    $('.prev-btn-2').click(function ()
    {
        $('.slick-card-product').slick('slickPrev');
    });

    $('.next-btn-2').click(function ()
    {
        $('.slick-card-product').slick('slickNext');
    });
});

// Start Slick Card Small
$(document).ready(function ()
{
    $('.slick-card-product-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.prev-btn-small').click(function ()
    {
        $('.slick-card-product-small').slick('slickPrev');
    });

    $('.next-btn-small').click(function ()
    {
        $('.slick-card-product-small').slick('slickNext');
    });

});
// End Slick Card Small

// Start Slick in Detail Product
$(document).ready(function ()
{
    $('.slick-card-product-detail').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.prev-btn-detail').click(function ()
    {
        $('.slick-card-product-detail').slick('slickPrev');
    });

    $('.next-btn-detail').click(function ()
    {
        $('.slick-card-product-detail').slick('slickNext');
    });

});
// End Slick in Detail Product

// Start Slick Our Service
$(document).ready(function ()
{
    $('.slick-card-product-our-service').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.prev-btn-our-service').click(function ()
    {
        $('.slick-card-product-our-service').slick('slickPrev');
    });

    $('.next-btn-our-service').click(function ()
    {
        $('.slick-card-product-our-service').slick('slickNext');
    });

});
// End Slick Our Service

// Start Slick Special Offer
$(document).ready(function ()
{
    $('.slick-card-product-special-offer').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.prev-btn-special-offer').click(function ()
    {
        $('.slick-card-product-special-offer').slick('slickPrev');
    });

    $('.next-btn-special-offer').click(function ()
    {
        $('.slick-card-product-special-offer').slick('slickNext');
    });

});
// End Slick Special Offer

// Start Slick Learn
$(document).ready(function ()
{
    $('.slick-card-product-learn').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.prev-btn-learn').click(function ()
    {
        $('.slick-card-product-learn').slick('slickPrev');
    });

    $('.next-btn-learn').click(function ()
    {
        $('.slick-card-product-learn').slick('slickNext');
    });

});
// End Slick Learn

// Start Slick Brand
$(document).ready(function ()
{
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.btn-prev-brand'),
        nextArrow: $('.btn-next-brand'),
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },

        ],
    });
    $('.btn-prev-brand').click(function ()
    {
        $('.slider').slick('slickPrev');
    });

    $('.btn-next-brand').click(function ()
    {
        $('.slider').slick('slickNext');
    });
});
// Start Slick Brand


// Start SLICK LATEST PRODUCT
let slickConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
};

const slider = $('.slick-slider-latest').slick(slickConfig);

const updateSliderConfig = () =>
{
    const isSmallScreen = window.innerWidth <= 768;

    const newSlickConfig = isSmallScreen
        ? {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            slidesPerRow: 1,
        }
        : {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 1,
        };

    slider.slick('unslick');
    slider.slick(newSlickConfig);

    if (!isSmallScreen) {
        $('.grid-cols-2').css('grid-template-columns', 'repeat(2, 1fr)');
    }
};

$(document).ready(() =>
{
    updateSliderConfig();

    $('.btn-prev-latest').on('click', () =>
    {
        slider.slick('slickPrev');
    });

    $('.btn-next-latest').on('click', () =>
    {
        slider.slick('slickNext');
    });
});

$(document).ready(updateSliderConfig);
$(window).resize(updateSliderConfig);
// End SLICK LATEST PRODUCT

// Start Range Price
function range()
{
    return {
        minprice: 1500000,
        maxprice: 3500000,
        min: 1000000,
        max: 5000000,
        minthumb: 0,
        maxthumb: 0,

        mintrigger()
        {
            this.minprice = Math.min(this.minprice, this.maxprice - 500);
            this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100;
        },

        maxtrigger()
        {
            this.maxprice = Math.max(this.maxprice, this.minprice + 500);
            this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100);
        },
    }
}
// End Range Price


// Start Slider Thumbnail
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-thumb').slick({
    slidesToShow: 5,
    asNavFor: '.slider-single',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
});

$('.slider-nav')
    .on('init', function (event, slick)
    {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide)
{
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event)
{
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});
$('#prevButton').click(function ()
{
    $('.slider-single').slick('slickPrev');
});

$('#nextButton').click(function ()
{
    $('.slider-single').slick('slickNext');
});
// End Slider Thumbnail

// Start Quantity
function decrement(e)
{
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);

    if (value > 0) {
        value--;
        target.value = value;
    }
}

function increment(e)
{
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
}

const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
);

decrementButtons.forEach(btn =>
{
    btn.addEventListener("click", decrement);
    btn.nextElementSibling.setAttribute("readonly", "true");
});

incrementButtons.forEach(btn =>
{
    btn.addEventListener("click", increment);
    btn.nextElementSibling.setAttribute("readonly", "true");
});

// End Quantity


// Start Update - MY

$('.carousel-service').slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    infinite: false
});

// Start Slick Service
$('.slick-card-product-service').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.prev-btn-service').click(function ()
{
    $('.slick-card-product-service').slick('slickPrev');
});

$('.next-btn-service').click(function ()
{
    $('.slick-card-product-service').slick('slickNext');
});
// End Update - MY



// Start Update - MY

$('.carousel-service').slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    infinite: false
});

// Start Slick Service
$('.slick-card-product-service').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.prev-btn-service').click(function ()
{
    $('.slick-card-product-service').slick('slickPrev');
});

$('.next-btn-service').click(function ()
{
    $('.slick-card-product-service').slick('slickNext');
});

$('.slick-card-product-top-brands').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.prev-btn-top-brands').click(function ()
{
    $('.slick-card-product-top-brands').slick('slickPrev');
});

$('.next-btn-top-brands').click(function ()
{
    $('.slick-card-product-top-brands').slick('slickNext');
});
// End Update - MY

// Start Loading 
setTimeout(function ()
{
    var loadingImage = document.getElementById("loading-image");
    if (loadingImage) {
        loadingImage.style.display = "none";
    }
}, 1000);


function toggleIconLoveWishlist(event)
{
    const target = event.target.getAttribute('data-target');
    const iconLoveWishlist = document.querySelector(`[data-target="${target}"] i`);
    const toastAddWishlist = document.getElementById('toastAddWishlist');
    const toastRemoveWishlist = document.getElementById('toastRemoveWishlist');

    if (iconLoveWishlist.classList.contains('icon-ic-love-outline')) {
        iconLoveWishlist.classList.remove('icon-ic-love-outline');
        iconLoveWishlist.classList.add('icon-ic-love-filled');
        toastAddWishlist.classList.remove('hidden');
        setTimeout(() =>
        {
            toastAddWishlist.classList.add('hidden');
        }, 2000);
    } else  {
        iconLoveWishlist.classList.remove('icon-ic-love-filled');
        iconLoveWishlist.classList.add('icon-ic-love-outline');
        toastRemoveWishlist.classList.remove('hidden');
        setTimeout(() =>
        {
            toastRemoveWishlist.classList.add('hidden');
        }, 2000);
    }
}

const likeButtons = document.querySelectorAll('.likeButtonLoveWishlist');
likeButtons.forEach((button) =>
{
    button.addEventListener('click', toggleIconLoveWishlist);
});


// Visible and Invisible Password
function togglePasswordVisibility(event)
{
    event.preventDefault();
    const passwordInput = document.getElementById('passwordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.src = type === 'password' ? '/public/assets/icons/eye-invisible.svg' : '/public/assets/icons/eye-visible.svg';
}