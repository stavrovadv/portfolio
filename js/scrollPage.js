export function pageAnimation(){
  let pageHash = window.location.hash;
  let visiblePage = pageHash.substr(1);

  let introBlock = document.querySelector(".intro");
  let projectsBlock = document.querySelector(".projects");

  if(visiblePage === "projects") {
    projectsBlock.scrollIntoView({behavior: "smooth"});
  }
  else {
    introBlock.scrollIntoView({behavior: "smooth"});
  }
}