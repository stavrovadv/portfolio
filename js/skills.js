import { renderSlider } from "./slider.js";

export function selectSkill(e) {
    let skillEl = e.target;
    if(skillEl instanceof HTMLLIElement) {
        removeSelectedSkill();
        skillEl.classList.add("btn-selected");
        renderSlider(skillEl.textContent);
    }
}

function removeSelectedSkill() {
    let selectedSkills = document.querySelectorAll(".skills .btn-selected");
    selectedSkills.forEach((skill) => skill.classList.remove("btn-selected"));
}
