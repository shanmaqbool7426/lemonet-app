import React from 'react'

const Header = () => {
    let navList = ["Home", "About", "Catalogue", "Delivery", "Blog", "Contact us"]
    return (
        <header>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-2 col-lg-2">
                        <img src="/assets/images/header-logo.svg" class="header-logo img-fluid" alt="" width="160px" />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <nav class="menu-container">
                            <ul class="list-inline main-menu">
                                {navList.map((item, index) => <li class="list-inline-item main-menu-item"><a href="#">{navList[index]}</a></li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="button-links">
                            <button href="#" class="btn btn-primary">Connect
                                Wallet </button>
                            <button href="#" class="btn btn-ouyline-white">PRE
                                SALE</button>

                        </div>
                    </div>
                </div>
                <section class="content-inside-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="content">
                                    <h1>
                                        The No#1 Social Network Where <br /> Likes Have Values
                                    </h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste fugit, molestiae
                                        deleniti laboriosam sit ab in incidunt quasi dolorum excepturi?</p>
                                    <button class="btn btn-primary hero-btn">Lemon For
                                        Sale<i class="fas fa-angle-double-right"></i></button>
                                    <button class="btn btn-primary hero-btn">White Paper
                                        <i class="fas fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header