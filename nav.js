document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // HEADER
    // =========================

    const header = document.getElementById("header-component");

    if (header) {

        header.innerHTML = `
            <div class="logo-box">

                <a href="index.html" class="site-logo">

                    <div class="logo-symbol">
                        C
                    </div>

                    <div class="logo-text">
                        <h1>Carlos</h1>
                        <p>Personal Portfolio</p>
                    </div>

                </a>

            </div>


            <div class="header-right">

                <div class="info-graphics-bar">
                    PERSONAL • EDUCATION • INTERESTS • PRODUCTS
                </div>


                <nav class="primary-navigation">

                    <a href="index.html">
                        Home
                    </a>

                    <a href="about.html">
                        About
                    </a>

                    <a href="products.html">
                        Products
                    </a>

                    <a href="contact.html">
                        Contact
                    </a>

                </nav>


                <nav class="secondary-navigation">

                    <a href="index.html#about">
                        Introduction
                    </a>

                    <a href="about.html">
                        Background
                    </a>

                    <a href="products.html">
                        Featured Collection
                    </a>

                </nav>

            </div>
        `;
    }


    // =========================
    // LEFT SIDEBAR
    // =========================

    const sidebar =
        document.getElementById("sidebar-nav-component");

    if (sidebar) {

        sidebar.innerHTML = `

            <h3>
                Navigation
            </h3>

            <ul>

                <li>
                    <a href="index.html">
                        Home
                    </a>
                </li>

                <li>
                    <a href="about.html">
                        About Me
                    </a>
                </li>

                <li>
                    <a href="products.html">
                        Products
                    </a>
                </li>

                <li>
                    <a href="contact.html">
                        Contact
                    </a>
                </li>

            </ul>


            <h3>
                Explore
            </h3>

            <ul>

                <li>
                    <a href="index.html#about">
                        Introduction
                    </a>
                </li>

                <li>
                    <a href="products.html">
                        Featured Products
                    </a>
                </li>

                <li>
                    <a href="contact.html">
                        Feedback
                    </a>
                </li>

            </ul>
        `;
    }

});
