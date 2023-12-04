import "normalize.css";
import "./styles.css";

import loadHomePage from "./home_page.js";

const contentDiv = document.querySelector("div#content");

function initialPageLoad() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homePage = document.createElement("li");
  const menuPage = document.createElement("li");
  const aboutPage = document.createElement("li");

  const homePageLink = document.createElement("a");
  const menuPageLink = document.createElement("a");
  const aboutPageLink = document.createElement("a");

  const homePageText = document.createTextNode("Home Page");
  const menuPageText = document.createTextNode("Menu Page");
  const aboutPageText = document.createTextNode("About Page");

  nav.appendChild(ul);
  ul.append(homePage, menuPage, aboutPage);
  homePage.appendChild(homePageLink);
  menuPage.appendChild(menuPageLink);
  aboutPage.appendChild(aboutPageLink);

  homePageLink.appendChild(homePageText);
  menuPageLink.appendChild(menuPageText);
  aboutPageLink.appendChild(aboutPageText);

  homePageLink.setAttribute("id", "home-page");
  menuPageLink.setAttribute("id", "menu-page");
  aboutPageLink.setAttribute("id", "about-page");

  contentDiv.appendChild(nav);
}

function clearPage() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}

initialPageLoad();

const homePage = document.querySelector("#home-page");
const menuPage = document.querySelector("#menu-page");
const aboutPage = document.querySelector("#about-page");

homePage.addEventListener("click", e => {
  clearPage();
  loadHomePage();
});
