function initHomeCarousels() {

    const carousels =
        document.querySelectorAll(".projects-carousel");

    carousels.forEach((carousel) => {

        const swiperElement =
            carousel.querySelector(".projectsSwiper");

        if (!swiperElement) return;

        const title =
            carousel.querySelector(".projectTitle");

        const text =
            carousel.querySelector(".projectDescription");

        const seeMore =
            carousel.querySelector(".projectSeeMore");


        const slides =
            swiperElement.querySelectorAll(".swiper-slide");

        if (!slides.length) return;


        function updateProjectInfo(index) {

            const slide = slides[index];

            if (!slide) return;


            const newTitle =
                slide.dataset.title || "";

            const newText =
                slide.dataset.text || "";

            const projectId =
                slide.dataset.id;


            if (title) {
                title.style.opacity = "0";
            }

            if (text) {
                text.style.opacity = "0";
            }

            if (seeMore) {
                seeMore.style.opacity = "0";
            }


            setTimeout(() => {

                if (title) {

                    title.textContent =
                        newTitle;

                    title.style.opacity = "1";
                }


                if (text) {

                    text.textContent =
                        newText;

                    text.style.opacity = "1";
                }


                if (seeMore && projectId) {

                    seeMore.href =
                        `detail-projects.php?id=${projectId}&from=home`;

                    seeMore.style.opacity = "1";
                }

            }, 100);

        }


        if (title) {
            title.style.transition =
                "opacity 0.2s ease";
        }

        if (text) {
            text.style.transition =
                "opacity 0.2s ease";
        }

        if (seeMore) {
            seeMore.style.transition =
                "opacity 0.2s ease";
        }


        new Swiper(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 0,

            speed: 700,
            grabCursor: false,
            watchOverflow: true,

            navigation: {
                nextEl: carousel.querySelector(".swiper-button-next"),
                prevEl: carousel.querySelector(".swiper-button-prev")
            },

            on: {
                init: function (swiper) {
                    updateProjectInfo(swiper.realIndex);
                },

                slideChange: function (swiper) {
                    updateProjectInfo(swiper.realIndex);
                }
            }
        });

    });

}


window.addEventListener("load", () => {

    setTimeout(() => {
        initHomeCarousels();
    }, 500);

});