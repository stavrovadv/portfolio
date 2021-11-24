import {fixResizePage} from "./fixResizePage.js";
import {scrollPage} from "./scrollPage.js";
import {sliderInit} from "./slider.js";
import {selectSkill} from "./skills.js";

(function(){
  window.addEventListener("load", scrollPage);
  window.addEventListener("hashchange", scrollPage);

  let [introArrow, projectsArrow] = document.querySelectorAll(".arrow");
  introArrow.addEventListener("click", scrollPage);
  projectsArrow.addEventListener("click", scrollPage);

  window.addEventListener("resize", fixResizePage);

  sliderInit();

  const skillsList = document.querySelector(".skills__list");
  skillsList.addEventListener("click", selectSkill);
}());
