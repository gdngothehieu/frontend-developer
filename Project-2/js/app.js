const sections = document.querySelectorAll("section");
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
    navbarLinkId.style.cssText = "background-color: black";
    if (
      Math.floor(sections[i].getBoundingClientRect().top) <= 100 &&
      Math.floor(sections[i].getBoundingClientRect().top) >= -100
    ) {
      navbarLinkId.classList.add("your-active-class");
      navbarLinkId.style.cssText = "background-color: yellow;";
    }
  }
};
initiateNavBar();
window.addEventListener("scroll", activateSection);
