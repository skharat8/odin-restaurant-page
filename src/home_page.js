import dinerPhoto from "./diner-main-page.jpg";

const contentDiv = document.querySelector("div#content");

export default function loadHomePage(e) {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-page");

  const header = document.createElement("header");
  const headerText = document.createTextNode("Artistic Diner");

  const img = document.createElement("img");
  img.setAttribute("src", dinerPhoto);
  img.setAttribute(
    "alt",
    "Diner with a banner saying 'Life Happens. Pizza Helps.'"
  );

  const description = document.createElement("p");
  const descriptionText = document.createTextNode(
    "Relax at our funky and artsy diner. We serve the best pizzas and burgers in the town."
  );

  header.appendChild(headerText);
  description.appendChild(descriptionText);

  homeDiv.append(header, img, description);
  contentDiv.append(homeDiv);
}
