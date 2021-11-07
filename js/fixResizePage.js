  export function fixResizePage() {
    let pageHash = window.location.hash;
    let pageEl = document.querySelector(pageHash);
    if(pageEl) pageEl.scrollIntoView();
  }
