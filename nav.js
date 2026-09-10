document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");

    if (header) {

        header.innerHTML = `
            <div class="site-header">

                <a href="index.html" class="brand">

                    <div class="brand-symbol">
                        C
                    </div>

                    <div class="brand-text">

                        <h2>Carlos</h2>

                        <p>Personal Portfolio</p>

                    </div>

                </a>


                <nav class="main-nav">

                    <a href="index.html">
                        Home
                    </a>

                    <a href="index.html#about">
                        About
                    </a>

                    <a href="index.html#work">
                        Work
                    </a>

                    <a href="products.html" class="nav-product-button">
                        Products
                    </a>

                </nav>

            </div>
        `;
    }

});
