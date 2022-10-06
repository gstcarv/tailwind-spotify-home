import "./css/tailwind.css";
import * as Navbar from "./js/navbar";
import landingPage from "./pages/landing.html";

document.querySelector("#app").innerHTML = landingPage;

Navbar.setup();
