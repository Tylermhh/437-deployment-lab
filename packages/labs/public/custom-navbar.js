import { attachShadow } from "./utils.mjs";

const TEMPLATE = document.createElement("template");
TEMPLATE.innerHTML = `
    <style>
        header {
            font-family: 'Anton', sans-serif;
            color: var(--color-text-header);
            background-color: var(--color-background-header);
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 10vh;
            padding: 2rem 2rem;
        }
        
        h1 {
            margin: 0;
        }
        
        .name-nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            /*background-color: red;*/
            /*border: 1px solid blue;*/
        }
        nav {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            /*background-color: white;*/
            gap: 1rem;
        }
        
        a {
            color: var(--color-link);
            text-decoration: none;
        }
        
        button {
            display: flex;
            justify-self: flex-end;
            align-self: flex-start;
        }
        
        .link-focus {
            color: var(--color-link-focus);
            text-decoration: solid;
        }
        
        @media only screen and (min-width: 700px){
            .name-nav {
                flex-direction: row;
            }
            
            nav {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            
            button {
                display: none;
            }
        }
    </style>
    <header>
        <div class="name-nav">
            <h1>Min Hset Hlaing</h1>
            <nav>
                <a href="index.html" title="Home Page">Home</a>
                <a href="hobbies.html" title="Hobbies Page">Hobbies</a>
            </nav>
        </div>
        <div>
            <label>
                <input type="checkbox" autocomplete="off" />
                Dark mode
            </label>
            <button>Menu</button>
        </div>  
    </header>
`;

class CustomNavbar extends HTMLElement {
    connectedCallback() {
        const shadowRoot = attachShadow(this, TEMPLATE);




        const btn = shadowRoot.querySelector("button")
        btn.addEventListener("click", (e) => {
            console.log("button clicked");
            const nav = shadowRoot.querySelector("nav");
            if (nav.style.display === "none" || nav.style.display === "") {
                nav.style.display = "flex";
            } else {
                nav.style.display = "none";
            }
        })

        const main = document.querySelector("main");
        main.addEventListener("click", (e) => {
            console.log("body clicked");
            const nav = shadowRoot.querySelector("nav");
            if (window.innerWidth < 700){
                nav.style.display = "none";
            }

        })


        const checkbox = shadowRoot.querySelector("input");
        checkbox.addEventListener("change", (e) => {
            console.log("checkbox changed");
            if (e.target.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("mode", "dark");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("mode", "light");
            }
        })

        const mode = localStorage.getItem("mode");
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            checkbox.checked = true;
        }

        console.log("loaded, doing link highlighting now");
        const currentURL = window.location.href;
        const navLinks = shadowRoot.querySelectorAll("nav a");
        navLinks.forEach((link) => {
            const original_color = link.style.color
            const root = document.documentElement;
            const link_highlight = getComputedStyle(root).getPropertyValue("--color-link-focus");
            if (currentURL.includes(link.href)) {
                link.classList.add("link-focus");
            }
            // link.style.setProperty("text-decoration", currentURL.includes(link.href) ? "underline" : "none");
        });

    }
}

customElements.define("custom-navbar", CustomNavbar);
