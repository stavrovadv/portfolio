import {fixResizePage} from "./fixResizePage.js";
import {pageAnimation} from "./scrollPage.js";

(function(){
  window.addEventListener("load", pageAnimation);
  window.addEventListener("hashchange", pageAnimation);
  
  let [introArrow, projectsArrow] = document.querySelectorAll(".arrow");
  introArrow.addEventListener("click", pageAnimation);
  projectsArrow.addEventListener("click", pageAnimation);

  window.addEventListener("resize", fixResizePage);
  
}());