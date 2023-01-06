const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

let count = 0;

// const cartLabel = document.getElementById('cart_label');
// const fly = (el) => {
//     if (!el.dataset.img) return false;
//     let drag = document.createElement('span');
//     drag.classList.add('fly_product');
//     drag.style.left = el.getBoundingClientRect().left + 'px';
//     drag.style.top = el.getBoundingClientRect().top + 'px';
//     drag.style.opacity = 1;
//     drag.style.backgroundImage = 'url('+el.dataset.img+')';
//     document.body.appendChild(drag);
//     drag.style.left = cartLabel.getBoundingClientRect().left + 'px';
//     drag.style.top = cartLabel.getBoundingClientRect().top + 'px';
//     drag.style.opacity = 0;
//     setTimeout(() => document.body.removeChild(drag), 1500);
// };

$(".cart-btn").on("click", function (){
    let cart = $(".cart-nav");
    let imgtodrag = $(this)
        // .parent(".buttons")
        // .parent(".flower__content")
        // .parent(".flower__card")
        .closest(".flower__card")
        .find("img")
        .eq(0);
    if (imgtodrag) {
        var imgclone = imgtodrag
            .clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left,
            })
            .css({
                opacity: "0.8",
                position: "absolute",
                height: "50px",
                width: "50px",
                objectFit: "cover",
                "z-index": "100"
            })
            .appendTo($("body"))
            .animate(
                {
                    top: cart.offset().top + 20,
                    left: cart.offset().left + 50,
                    width: 75,
                    height: 75
                },
                1000,
                "easeInOutExpo"
            );
        setTimeout(function () {
            count++;
            $(".cart-nav .item-count").text(count)
        }, 1500);

        imgclone.animate(
            {
                width: 0,
                height: 0
            },
            function () {
                $(this).detach()
            }
        )
    }
})