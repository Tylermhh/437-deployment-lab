import { toHtmlElement } from "./toHtmlElement.mjs"
import { toHtml } from "./utils.mjs";

console.log("hello")

export function NavBar() {
    const currentURL = window.location.href;
    const htmlString = `
    <header>
        <h1>Min Hset Hlaing</h1>
        <nav>
            <a href="index.html" title="Home Page">Home</a>
            <a href="hobbies.html" title="Hobbies Page">Hobbies</a>
        </nav>
    </header>
    `;
    return (
       toHtml(htmlString)
    )
};

// window.addEventListener("load", () => { // Create a function on the fly
//     // Code in this function will run once the page is done loading
//
//     console.log("loaded, doing link highlighting now");
//     const currentURL = window.location.href;
//     const navLinks = document.shadowRoot.querySelectorAll("nav a");
//     navLinks.forEach((link) => {
//         const original_color = link.style.color
//         console.log(original_color); // Access the current inline color style (if any)
//
//         link.style.color = currentURL.includes(link.href) ? "blue" : original_color
//
//     });
//
// });