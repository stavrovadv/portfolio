export function scrollPage(e){
  e.preventDefault;
  if(window.innerWidth <= 480) return;
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