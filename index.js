
//mobile navigation using mobile toggle
const mobiletoggle = document.querySelector(".mobile-navigation");
const nav = document.querySelector(".navigation");

mobiletoggle.addEventListener("click", (e) => {
  e.preventDefault();
  let visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    mobiletoggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    mobiletoggle.setAttribute("aria-expanded", false);
  }
});


// opening the sub navigation 
const navLinkToggle = document.querySelectorAll(".link-toggle");
// console.log(navLinkToggle);

let visibility = null;

navLinkToggle.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      let arrow = e.target;
      let show = arrow.parentElement.nextElementSibling;
      visibility = show.getAttribute("data-visible");
      console.log("a");
      if (visibility === "false") {
        show.setAttribute("data-visible", true);
        toggle.setAttribute("aria-expanded", true);
      } else {
        show.setAttribute("data-visible", false);
        toggle.setAttribute("aria-expanded", false);
      }
    } catch (error) {
      console.log("click the button");
    }
  });
});
