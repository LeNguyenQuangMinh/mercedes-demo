import merCars from "./data.js";
import { merLimiteds } from "./data.js";
import { merAMGs } from "./data.js";
import { merMayBachs } from "./data.js";
import { merEQs } from "./data.js";
import { merNews } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const typeAll = $("#type-all");
const typeLimited = $("#type-limited");
const typeAMG = $("#type-amg");
const typeMayBach = $("#type-maybach");
const typeEQ = $("#type-eq");
const typeNew = $("#type-latest");
// =========================================INDEX==========================
const app = {
    // Render products
    render: function () {
        // Render ALL Products
        const htmlCars = merCars.map((merCar) => {
            return `
            <div class="col l-3 m-6">
            
            <div class="product__information">
                <div
                    class="
                        product-information__name
                    "
                >
                    ${merCar.name}
                </div>
                <div
                    class="
                        product-information__price
                    "
                >
                    ${merCar.price}
                </div>
                <img
                    src="${merCar.img}"
                    alt=""
                    class="product-information__img"
                />
                <div
                    class="navbar-contact__fetured"
                >
                    <ul class="navbar__list">
                        <a href="product-detail.html">
                            <li class="nav-bar__item">
                                <i
                                    class="
                                        nav-bar__icon
                                        fas
                                        fa-info
                                    "
                                ></i>
                                <a
                                    href=""
                                    class="
                                        nav-bar__link
                                    "
                                >
                                    Learn more
                                </a>
                            </li>
                        </a>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-car
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-cogs
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-search-location
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
            `;
        });
        if (typeAll) {
            typeAll.innerHTML = htmlCars.join("");
        }

        // Render merLimited
        const htmlLimited = merLimiteds.map((merLimited) => {
            return ` <div class="col l-3 m-6 c-6">
            <div class="product__info">
                <!-- Image -->
                <div
                    class="product__info--wrap-img"
                >
                    <img
                        src="${merLimited.img}"
                        alt=""
                        class="product-info__img"
                    />
                    <h4 class="product__name">
                       ${merLimited.name}
                    </h4>
                </div>
                <p class="product__price">
                    Contact
                </p>
                <div
                    class="navbar-contact__fetured"
                >
                    <ul class="navbar__list">
                        <li class="nav-bar__item">
                            <a
                                href="product-detail.html"
                                class="
                                    nav-bar__link
                                "
                            >
                                <i
                                    class="
                                        nav-bar__icon
                                        fas
                                        fa-info
                                    "
                                ></i>
                                Learn more
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                <i
                                    class="
                                        nav-bar__icon
                                        fas
                                        fa-car
                                    "
                                ></i>
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                <i
                                    class="
                                        fas
                                        fa-cogs
                                        nav-bar__icon
                                    "
                                ></i>
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                <i
                                    class="
                                        fas
                                        fa-search-location
                                        nav-bar__icon
                                    "
                                ></i>
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`;
        });
        if (typeLimited) {
            typeLimited.innerHTML = htmlLimited.join("");
        }

        // Render AMG
        const htmlAMGs = merAMGs.map((merAMG) => {
            return `
            <div class="col l-3 m-6">
            
            <div class="product__information">
                <div
                    class="
                        product-information__name
                    "
                >
                    ${merAMG.name}
                </div>
                <div
                    class="
                        product-information__price
                    "
                >
                    ${merAMG.price}
                </div>
                <img
                    src="${merAMG.img}"
                    alt=""
                    class="product-information__img"
                />
                <div
                    class="navbar-contact__fetured"
                >
                    <ul class="navbar__list">
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-info
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Learn more
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-car
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-cogs
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-search-location
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
            `;
        });
        if (typeAMG) {
            typeAMG.innerHTML = htmlAMGs.join("");
        }

        // Render May Bach
        const htmlMayBach = merMayBachs.map((merMayBach) => {
            return `
            <div class="col l-3 m-6">
            
            <div class="product__information">
                <div
                    class="
                        product-information__name
                    "
                >
                    ${merMayBach.name}
                </div>
                <div
                    class="
                        product-information__price
                    "
                >
                    ${merMayBach.price}
                </div>
                <img
                    src="${merMayBach.img}"
                    alt=""
                    class="product-information__img"
                />
                <div
                    class="navbar-contact__fetured"
                >
                    <ul class="navbar__list">
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-info
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Learn more
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-car
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-cogs
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-search-location
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
            `;
        });
        if (typeMayBach) {
            typeMayBach.innerHTML = htmlMayBach.join("");
        }

        // Render MQ
        const htmlEQ = merEQs.map((merEQ) => {
            return `
            <div class="col l-3 m-6">
            <div class="product__information">
                <div
                    class="
                        product-information__name
                    "
                >
                    ${merEQ.name}
                </div>
                <div
                    class="
                        product-information__price
                    "
                >
                    ${merEQ.price}
                </div>
                <img
                    src="${merEQ.img}"
                    alt=""
                    class="product-information__img"
                />
                <div
                    class="navbar-contact__fetured"
                >
                    <ul class="navbar__list">
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-info
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Learn more
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-car
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-cogs
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-search-location
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            `;
        });

        if (typeEQ) {
            typeEQ.innerHTML = htmlEQ.join("");
        }

        // Render merNews

        const htmlNews = merNews.map((merNew) => {
            return `
            <div class="col l-4 m-6">
            <div class="product__information">
                <div
                    class="
                        product-information__name
                    "
                >
                    ${merNew.name}
                </div>
                <div
                    class="
                        product-information__price
                    "
                >
                    ${merNew.price}
                </div>
                <img
                    src="${merNew.img}"
                    alt=""
                    class="product-information__img"
                />
                <div class="navbar-contact">
                    <ul class="navbar__list">
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-info
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Learn more
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    nav-bar__icon
                                    fas
                                    fa-car
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Take a test drive
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-cogs
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Configure
                            </a>
                        </li>
                        <li class="nav-bar__item">
                            <i
                                class="
                                    fas
                                    fa-search-location
                                    nav-bar__icon
                                "
                            ></i>
                            <a
                                href=""
                                class="
                                    nav-bar__link
                                "
                            >
                                Search available
                                vehicles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            `;
        });
        if (typeNew) {
            typeNew.innerHTML = htmlNews.join("");
        }
    },

    // Xử lý các sự kiện
    handleEvent: function () {
        // Xử lý auto slider
        var count = 2;
        setInterval(function () {
            if (document.getElementById("radio" + count)) {
                document.getElementById("radio" + count).checked = true;
            }
            count++;
            if (count > 5) {
                count = 1;
            }
        }, 5000);

        // SHOW NAV TYPE
        var header = $("#myheader");
        var navbar = $("#navbar");

        if (navbar) {
            document.addEventListener("DOMContentLoaded", function () {
                window.onscroll = function () {
                    myFunction();
                };

                var sticky = header.offsetHeight + navbar.offsetHeight + 60;
                var stickyMobile =
                    header.offsetHeight + navbar.offsetHeight - 285;

                function myFunction() {
                    if (header.offsetWidth <= 739) {
                        if (window.pageYOffset >= stickyMobile) {
                            navbar.classList.add("sticky");
                        } else {
                            navbar.classList.remove("sticky");
                        }
                    } else {
                        if (window.pageYOffset >= sticky) {
                            navbar.classList.add("sticky");
                        } else {
                            navbar.classList.remove("sticky");
                        }
                    }
                }
            });
        }

        //JS for toggle menu
        var menuItems = $("#js-menuItems");
        var toggleMenu = $("#toggleMenu");

        menuItems.style.maxHeight = "0px";
        function menutoggle() {
            if (menuItems.style.maxHeight == "0px") {
                menuItems.style.maxHeight = "220px";
            } else {
                menuItems.style.maxHeight = "0px";
            }
        }

        toggleMenu.onclick = menutoggle;

        // Js for nav-type menu
        const navMenuBtn = $("#nav-type-menu");
        const navTypeList = $(".nav-type__list");

        if (navMenuBtn) {
            navMenuBtn.addEventListener("click", () => {
                if (navTypeList.style.left === "0px") {
                    navTypeList.style.left = "-152px";
                } else {
                    navTypeList.style.left = "0px";
                }
            });
        }

        // ================SHOW TO TOP BTN ====================
        const toTopBtn = $("#to-top-btn");

        function showToTopBtn() {
            if (toTopBtn) {
                if (window.pageYOffset >= header.offsetHeight) {
                    toTopBtn.classList.add("show-btn");
                } else {
                    toTopBtn.classList.remove("show-btn");
                }
            }
        }

        window.addEventListener("scroll", showToTopBtn);

        // ==================================PRODUCTS ============================
        // For check btn nav-type
        const navTypeItems = $$(".nav-type__item");
        const productsItem = $$(".products__item");

        navTypeItems.forEach((navTypeItem, index) => {
            const productItem = productsItem[index];

            navTypeItem.onclick = () => {
                $(".nav-type__item.check").classList.remove("check"); //remove cái đang check
                navTypeItem.classList.add("check");

                if (productItem) {
                    $(".products__item.active").classList.remove("active");
                    productItem.classList.add("active");
                }
            };
        });

        const bigImg = $(".product-detail__img--big img");
        const smallImgs = $$(".product-detail-small__item img");

        if (bigImg && smallImgs) {
            smallImgs.forEach((smallImg) => {
                smallImg.onclick = () => {
                    bigImg.src = smallImg.src;
                };
            });
        }

        // Change tab item about-header
        const aboutNavItems = $$(".about-body-navigation__item");
        const aboutBlogs = $$(".row.about-body__blog");

        if (aboutNavItems && aboutBlogs) {
            aboutNavItems.forEach((aboutNavItem, index) => {
                function aboutActiveNav() {
                    const checkAboutNav = $(
                        ".about-body-navigation__item.active"
                    );
                    const aboutActiveBlog = $(".row.about-body__blog.active");
                    const aboutBlog = aboutBlogs[index];

                    checkAboutNav.classList.remove("active");
                    aboutNavItem.classList.add("active");

                    aboutActiveBlog.classList.remove("active");
                    aboutBlog.classList.add("active");
                }
                aboutNavItem.onclick = aboutActiveNav;
            });
        }

        // Slider for about page
        const aboutSlideOne = $(".about-body__slider--wrap.one");
        const aboutSlideTwo = $(".about-body__slider--wrap.two");
        const leftBtn = $(".about-body__slider-icon.left");
        const rightBtn = $(".about-body__slider-icon.right");

        if (leftBtn && rightBtn) {
            leftBtn.onclick = () => {
                const checkSlideActive = $(".about-body__slider--wrap.active");
                const checkDisableBtn = $(".about-body__slider-icon.disable");

                checkDisableBtn.classList.remove("disable");
                leftBtn.classList.add("disable");

                checkSlideActive.classList.remove("active");
                aboutSlideOne.classList.add("active");
            };

            rightBtn.onclick = () => {
                const checkSlideActive = $(".about-body__slider--wrap.active");
                const checkDisableBtn = $(".about-body__slider-icon.disable");

                checkDisableBtn.classList.remove("disable");
                rightBtn.classList.add("disable");

                checkSlideActive.classList.remove("active");
                aboutSlideTwo.classList.add("active");
            };
        }

        // Scroll reveal animation about-page
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2500,
            delay: 200,
        });

        sr.reveal(".about-body__heading", { origin: "top", delay: 100 });

        sr.reveal(".about-body__history.first", {
            origin: "left",
            delay: 200,
        });

        sr.reveal(".about-body__history.second", {
            origin: "right",
            delay: 200,
        });

        sr.reveal(".about-body__history.third", {
            origin: "right",
            delay: 200,
        });

        // -----------------Account-----------------------------
        const loginBtn = $("#account-form__btn--login");
        const registerBtn = $("#account-form__btn--register");
        const indicator = $("#indicator");
        const loginForm = $(".account-form__authenticate.login");
        const registerForm = $(".account-form__authenticate.register");

        if (loginBtn && registerBtn) {
            loginBtn.onclick = () => {
                loginForm.style.left = "0";
                registerForm.style.left = "300px";
                indicator.style.left = "5rem";
            };

            registerBtn.onclick = () => {
                loginForm.style.left = "-300px";
                registerForm.style.left = "0px";
                indicator.style.left = "15rem";
            };
        }

        sr.reveal(".account-page__wrap-img", { origin: "top" });
        sr.reveal(".account-page__wrap-authentication", { origin: "bottom" });

        // -------------Contact-------------------
        const inputs = $$(".contact-form__input");

        if (inputs) {
            function focusHandler() {
                let parentInput = this.parentNode;

                parentInput.classList.add("active");
            }

            function blurHandler() {
                let parentInput = this.parentNode;
                if (this.value == "") {
                    parentInput.classList.remove("active");
                }
            }

            inputs.forEach((input) => {
                input.addEventListener("focus", focusHandler);
                input.addEventListener("blur", blurHandler);
            });
        }
    },

    start: function () {
        this.handleEvent();
        this.render();
    },
};

app.start();
