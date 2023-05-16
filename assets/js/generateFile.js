function generateFile(post){
    var img = post.img != '' ? `<div class="blog-details-thumb">
                                            <img src="assets/img/covers/${post.img}" alt="${post.title}">
                                        </div>` : '';
            

            var page = `<!doctype html>
            <html class="no-js" lang="en">

            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>LATEST | The Central Scholar </title>
                <meta name="description" content="The Central Scholar is the official english-language school publication of the Philippine Science High School - Central Luzon Campus">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
                <!-- Place favicon.ico in the root directory -->

                <!-- CSS here -->
                <link rel="stylesheet" href="assets/css/bootstrap.min.css">
                <link rel="stylesheet" href="assets/css/animate.min.css">
                <link rel="stylesheet" href="assets/css/magnific-popup.css">
                <link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
                <link rel="stylesheet" href="assets/css/imageRevealHover.css">
                <link rel="stylesheet" href="assets/css/swiper-bundle.css">
                <link rel="stylesheet" href="assets/css/flaticon.css">
                <link rel="stylesheet" href="assets/css/slick.css">
                <link rel="stylesheet" href="assets/css/spacing.css">
                <link rel="stylesheet" href="assets/css/main.css">
            </head>

            <body>

                <!-- preloader -->
                <div id="preloader">
                    <div id="loading-center">
                        <div id="loading-center-absolute">
                            <div class="object" id="object_one"></div>
                            <div class="object" id="object_two"></div>
                            <div class="object" id="object_three"></div>
                        </div>
                    </div>
                </div>
                <!-- preloader-end -->

                <!-- Scroll-top -->
                <button class="scroll__top scroll-to-target" data-target="html">
                    <i class="fas fa-angle-up"></i>
                </button>
                <!-- Scroll-top-end-->

                <header>
                    <div class="header__top">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-md-6 col-sm-6 order-2 order-lg-0">
                                    <div class="header__top-search">
                                        <form action="#">
                                            <input type="text" placeholder="Search here...">
                                        </form>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-3 order-0 order-lg-2 d-none d-md-block">
                                    <div class="header__top-logo logo text-lg-center">
                                        <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                                        <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-3 col-sm-6 order-3 d-none d-sm-block">
                                    <div class="header__top-right">
                                        <ul class="list-wrap">
                                            <li class="news-btn"><a href="index.html#newsletter" class="btn"><span class="btn-text">subscribe</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="header-fixed-height"></div>
                    <div id="sticky-header" class="tg-header__area">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="tgmenu__wrap">
                                        <nav class="tgmenu__nav">
                                            <div class="logo d-block d-md-none">
                                                <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                                                <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                            </div>
                                            <div class="offcanvas-toggle">
                                                <a href="#"><i class="flaticon-menu-bar"></i></a>
                                            </div>
                                            <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                                <ul class="navigation">
                                                        <li ><a href="index.html">Home</a></li>
                                                        <li><a href="news.html">News</a></li>
                                                        <li><a href="feature.html">Feature</a></li>
                                                        <li><a href="opinion.html">Opinion</a></li>
                                                        <li><a href="sports.html">Sports</a></li>
                                                </ul>
                                            </div>
                                            <div class="tgmenu__action">
                                                <ul class="list-wrap">
                                                    <li class="mode-switcher">
                                                        <nav class="switcher__tab">
                                                            <span class="switcher__btn light-mode"><i class="flaticon-sun"></i></span>
                                                            <span class="switcher__mode"></span>
                                                            <span class="switcher__btn dark-mode"><i class="flaticon-moon"></i></span>
                                                        </nav>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                                    </div>
                                    <!-- Mobile Menu  -->
                                    <div class="tgmobile__menu">
                                        <nav class="tgmobile__menu-box">
                                            <div class="close-btn"><i class="fas fa-times"></i></div>
                                            <div class="nav-logo">
                                                <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                                                <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                            </div>
                                            <div class="tgmobile__search">
                                                <form action="#">
                                                    <input type="text" placeholder="Search here...">
                                                    <button><i class="far fa-search"></i></button>
                                                </form>
                                            </div>
                                            <div class="tgmobile__menu-outer">
                                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                            </div>
                                            <div class="social-links">
                                                <ul class="list-wrap">
                                                    <li><a href="https://www.facebook.com/TheCentralScholarCLC"><i class="fab fa-facebook-f"></i>  </a></li>
                                                    <li><a href="https://twitter.com/TCS_PSHSCLC"><i class="fab fa-twitter"></i>  </a></li>
                                                    <li><a href="https://www.instagram.com/tcs_pshsclc/"><i class="fab fa-instagram"></i> </a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="tgmobile__menu-backdrop"></div>
                                    <!-- End Mobile Menu -->
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- offCanvas-area -->
                    <div class="offCanvas__wrap">
                        <div class="offCanvas__body">
                            <div class="offCanvas__toggle"><i class="flaticon-addition"></i></div>
                            <div class="offCanvas__content">
                                <div class="offCanvas__logo logo">
                                    <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                                    <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                </div>
                                <br/>
                                <h4>In pursuit of the untarnished truth.</h4>
                                <br/>
                                <p>We are <strong>The Central Scholar</strong>, the official English language school publication of the Philippine Science High School – Central Luzon Campus.</p>
                                <br/>
                                <p>We create <em>critical, thought-provoking, and fact-based content</em> based on the standards and ethics of journalism. In this way, we help in the pursuit of truth in our school community, in our region, and in the nation.</p>
                                <br/>
                                <p>For our country and her people, <em>always.</em></p>
                                <br/>
                                <br/>
                                
                                <h4>Meet the Team.</h4>
                                <ul class="offCanvas__instagram list-wrap">
                                    <li><a href="assets/img/authors/raagas.png" class="popup-image"><img src="assets/img/authors/raagas-face.png" alt="img"></a></li>
                                    <li><a href="assets/img/authors/regencia.png" class="popup-image"><img src="assets/img/authors/regencia-face.png" alt="img"></a></li>
                                    <li><a href="assets/img/authors/canto.png" class="popup-image"><img src="assets/img/authors/canto-face.png" alt="img"></a></li>
                                    <li><a href="assets/img/authors/angeles.png" class="popup-image"><img src="assets/img/authors/angeles-face.png" alt="img"></a></li>
                                    <li><a href="assets/img/authors/mesia.png" class="popup-image"><img src="assets/img/authors/mesia-face.png" alt="img"></a></li>
                                </ul>
                            </div>
                            <br/>
                            <br/>
                            <div class="offCanvas__contact">
                                <h5>Get In Touch</h5>
                                <ul class="offCanvas__contact-list list-wrap">
                                    <li><i class="fas fa-envelope-open"></i><a href="mailto:tcs@clc.pshs.edu.ph">tcs@clc.pshs.edu.ph</a></li>
                                    <li><i class="fas fa-phone"></i><a href="tel:9985672006">+63 998 567 2006</a></li>
                                    <li><i class="fas fa-map-marker-alt"></i> Lily Hill, Clark Freeport Zone</li>
                                </ul>
                                <ul class="offCanvas__social list-wrap">
                                    <li><a href="https://www.facebook.com/TheCentralScholarCLC"><i class="fab fa-facebook-f"></i>  </a></li>
                                    <li><a href="https://twitter.com/TCS_PSHSCLC"><i class="fab fa-twitter"></i>  </a></li>
                                    <li><a href="https://www.instagram.com/tcs_pshsclc/"><i class="fab fa-instagram"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="offCanvas__overlay"></div>
                    <!-- offCanvas-area-end -->

            </header>

                <!-- main-area -->
                <main>

                    <!-- breadcrumb-area -->
                    <div class="breadcrumb-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="breadcrumb-content">
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                                <li class="breadcrumb-item"><a href="${post.category}.html">${post.category}</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">${post.title}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- breadcrumb-area-end -->
                    <!-- blog-details-area -->
                    <section class="blog-details-area pt-80 pb-100">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-1">
                                    <div class="blog-details-social">
                                        <ul class="list-wrap">
                                            <li><a href="https://www.facebook.com/TheCentralScholarCLC"><i class="fab fa-facebook-f"></i>  </a></li>
                                                    <li><a href="https://twitter.com/TCS_PSHSCLC"><i class="fab fa-twitter"></i>  </a></li>
                                                    <li><a href="https://www.instagram.com/tcs_pshsclc/"><i class="fab fa-instagram"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="blog-details-wrap">
                                        <ul class="tgbanner__content-meta list-wrap">
                                            <li class="category"><a href="${post.category}.html">${post.category}</a></li>
                                            <li><span class="by">By</span> ${post.author}</li>
                                            <li>${post.date}</li>
                                        </ul>
                                        <h2 class="title">${post.title}</h2>
                                        ${img}
                                        <div class="blog-details-content">
                                            <!--START-PARAGRAPH-->
                                            ${post.paragraph}
                                        </div>
                                        <div class="blog-details-bottom">
                                            <div class="row align-items-baseline">
                                                <div class="col-xl-6 col-md-7">
                                                </div>
                                                <div class="col-xl-6 col-md-5">
                                                    <div class="blog-details-share">
                                                        <h6 class="share-title">Share Now:</h6>
                                                        <ul class="list-wrap mb-0">
                                                            <li><a href="https://www.facebook.com/TheCentralScholarCLC"><i class="fab fa-facebook-f"></i>  </a></li>
                                                    <li><a href="https://twitter.com/TCS_PSHSCLC"><i class="fab fa-twitter"></i>  </a></li>
                                                    <li><a href="https://www.instagram.com/tcs_pshsclc/"><i class="fab fa-instagram"></i> </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog-avatar-wrap">
                                            <div class="blog-avatar-img">
                                                <a href="#"><i class="far fa-check"></i><img src="assets/img/authors/${post.authorLast}-circle.png" alt="img"></a>
                                            </div>
                                            <div class="blog-avatar-content">
                                                <p>${post.authorDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6">
                                    <aside class="blog-sidebar">
                                        <div class="widget sidebar-widget">
                                            <div class="tgAbout-me">
                                                <div class="tgAbout-thumb">
                                                    <img src="assets/img/authors/${post.authorLast}-circle.png" alt="me">
                                                </div>
                                                <div class="tgAbout-info">
                                                    <p class="intro">Hi there, I’m <span>${post.author.split(' ')[0]}</span></p>
                                                    <span class="designation">Content Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="widget sidebar-widget widget_categories">
                                            <h4 class="widget-title">Trending Categories</h4>
                                            <ul class="list-wrap">
                                                <li>
                                                    
                                                    <a href="feature.html">Feature</a>
                                                    <span class="float-right">12</span>
                                                </li>
                                                <li>
                                                    <a href="news.html">News</a>
                                                    <span class="float-right">08</span>
                                                </li>
                                                <li>
                                                    <a href="sports.html">Sports</a>
                                                    <span class="float-right">13</span>
                                                </li>
                                                <li>
                                                    <a href="opinion.html">Opinion</a>
                                                    <span class="float-right">09</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="widget sidebar-widget">
                                            <div class="sidePost-active">
                                                <div class="sidePost__item" data-background="assets/img/featured-1.png">
                                                    <div class="sidePost__content">
                                                        <a href="https://www.facebook.com/TheCentralScholarCLC/posts/pfbid0Pg32TbNFEYP5JkMjRfMmQZzz3TR7wiWoKKXMpbWgyfFyi5g4r1sPkDsHHynFUTWdl" class="tag">event</a>
                                                        <h5 class="title tgcommon__hover"><a href="https://www.facebook.com/TheCentralScholarCLC/posts/pfbid0Pg32TbNFEYP5JkMjRfMmQZzz3TR7wiWoKKXMpbWgyfFyi5g4r1sPkDsHHynFUTWdl">Research symposium in photos</a></h5>
                                                    </div>
                                                </div>
                                                <div class="sidePost__item" data-background="assets/img/featured-2.png">
                                                    <div class="sidePost__content">
                                                        <a href="https://www.facebook.com/TheCentralScholarCLC/posts/pfbid02LVUAcdKs1tYaebpNaaZJCLJa9N7Qtr8Y5U57VBLon1HyY2czDcN49YtivLsiX3Fel" class="tag">sports</a>
                                                        <h5 class="title tgcommon__hover"><a href="https://www.facebook.com/TheCentralScholarCLC/posts/pfbid02LVUAcdKs1tYaebpNaaZJCLJa9N7Qtr8Y5U57VBLon1HyY2czDcN49YtivLsiX3Fel">TCS' official intramurals recap</a></h5>
                                                    </div>
                                                </div>
                                                <div class="sidePost__item" data-background="assets/img/featured-3.png">
                                                    <div class="sidePost__content">
                                                        <a href="https://www.facebook.com/watch/?v=156804803779341" class="tag">watch</a>
                                                        <h5 class="title tgcommon__hover"><a href="https://www.facebook.com/watch/?v=156804803779341">PRESS FREEDOM DAY SPECIAL with Karmina Constantino</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- blog-details-area-end -->

                </main>
                <!-- main-area-end -->


                <!-- footer-area -->
                <footer class="footer-area black-bg">
                    <div class="container">
                        <div class="footer__logo-wrap">
                            <div class="row align-items-center">
                                <div class="col-lg-3 col-md-4">
                                    <div class="footer__logo logo">
                                        <a href="index.html"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <div class="footer__social">
                                        <ul class="list-wrap">
                                            <li><a href="https://www.facebook.com/TheCentralScholarCLC"><i class="fab fa-facebook-f"></i>  </a></li>
                                            <li><a href="https://twitter.com/TCS_PSHSCLC"><i class="fab fa-twitter"></i>  </a></li>
                                            <li><a href="https://www.instagram.com/tcs_pshsclc/"><i class="fab fa-instagram"></i> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer__copyright">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="copyright__text">
                                        <p>Copyright <span>&copy The Central Scholar</span> - 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- footer-area-end -->



                <!-- JS here -->
                <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/isotope.pkgd.min.js"></script>
                <script src="assets/js/imagesloaded.pkgd.min.js"></script>
                <script src="assets/js/jquery.magnific-popup.min.js"></script>
                <script src="assets/js/jquery.marquee.min.js"></script>
                <script src="assets/js/imageRevealHover.js"></script>
                <script src="assets/js/swiper-bundle.js"></script>
                <script src="assets/js/TweenMax.min.js"></script>
                <script src="assets/js/slick.min.js"></script>
                <script src="assets/js/ajax-form.js"></script>
                <script src="assets/js/wow.min.js"></script>
                <script src="assets/js/main.js"></script>
            </body>
            </html>`
    console.log(page)
            var blob = new Blob([page], {
                type: "text/html;charset=utf-8;",
            });
            saveAs(blob, post.filename);
}