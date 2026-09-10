document.addEventListener("DOMContentLoaded", () => {

    // HEADER
    const headerElement = document.getElementById("header-component");

    if (headerElement) {
        headerElement.innerHTML = `
            <div class="logo-box">
                <h1>Logo</h1>
            </div>

            <div class="header-right">
                <div class="info-graphics-bar">
                    Welcome to my website
                </div>

                <nav class="nav-bar-primary">
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>

                <nav class="nav-bar-secondary">
                    <ul class="nav-links">
                        <li><a href="#">Secondary Link 1</a></li>
                        <li><a href="#">Secondary Link 2</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }

    // LEFT SIDEBAR
    const sidebarNavElement =
        document.getElementById("sidebar-nav-component");

    if (sidebarNavElement) {
        sidebarNavElement.innerHTML = `
            <h3>Primary Navigation</h3>

            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Repositories</a></li>
                <li><a href="#">About</a></li>
            </ul>

            <h3>More</h3>

            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        `;
    }

});
