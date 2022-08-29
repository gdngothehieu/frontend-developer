const sections = document.querySelectorAll("section");
const NavTag = document.getElementById("navbar_header");
const sectionNavPositions = [];
const prePosition = 0;
const currentPosition = 0;

const initiateNavBar = () => {
  let listUI = "";

  const navbar = document.getElementById("navbar__list");
  for (let i = 0; i < sections.length; i++) {
    const sectionID = sections[i].id;
    const sectionDataNav = sections[i].dataset.nav;

    listUI += `<li class="menu__link" id=${
      `menu__link` + sectionID
    }><a href="#${sectionID}">${sectionDataNav}</a></li>`;
  }
  navbar.innerHTML = listUI;
};

const activateSection = () => {
  for (let i = 0; i < sections.length; i++) {
    const navbarLinkId = document.getElementById(`menu__link${sections[i].id}`);

    navbarLinkId.classList.remove("your-active-class");
    navbarLinkId.style.cssText =
      "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    if (
      Math.floor(sections[i].getBoundingClientRect().top) < 150 &&
      Math.floor(sections[i].getBoundingClientRect().top) >= -150
    ) {
      navbarLinkId.classList.add("your-active-class");
      navbarLinkId.style.cssText = "background-color: yellow;";
    }
  }
};
initiateNavBar();
window.addEventListener("scroll", activateSection);
