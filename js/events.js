import {fixResizePage} from "./fixResizePage.js";
import {scrollPage} from "./scrollPage.js";
import {sliderInit} from "./slider.js";
import {selectSkill} from "./skills.js";

(function(){
  let [introArrow, projectsArrow] = document.querySelectorAll(".arrow");
  let [intro, projects] = document.querySelectorAll(".section");

  let userAgent = navigator.userAgent;
  if(userAgent.match(/chrome|chromium|crios/i) || userAgent.match(/edg/i)){
    introArrow.addEventListener("click", scrollPage);
    projectsArrow.addEventListener("click", scrollPage);
    window.addEventListener("load", scrollPage);
    window.addEventListener("hashchange", scrollPage);
  }
  else {
    intro.setAttribute("id", "intro");
    projects.setAttribute("id", "projects");
  }

  window.addEventListener("resize", fixResizePage);

  sliderInit();

  const skillsList = document.querySelector(".skills__list");
  skillsList.addEventListener("click", selectSkill);
}());
