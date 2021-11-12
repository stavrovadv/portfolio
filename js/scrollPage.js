export function scrollPage(){
  let pageHash = window.location.hash;
  let visiblePage = pageHash.substr(1);

  const introBlock = document.querySelector(".intro");
  const projectsBlock = document.querySelector(".projects");

  let scrollToBlock;
  if(visiblePage === "projects") {
    scrollToBlock = projectsBlock;
  }
  else {
    scrollToBlock = introBlock;
  }
  scrollToBlock.scrollIntoView({behavior: "smooth"});
}