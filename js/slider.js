import data from "./dataProjects.js";

const list = document.querySelector(".slider__list");
let itemsEl = createOrUpdateSliderList(list);
let activeItemInd = itemsEl.findIndex((item) => item.classList.contains("slider__item--active"));
const btnPrev = document.querySelector(".slider__prev");
const btnNext = document.querySelector(".slider__next");
const sliderCounter = document.querySelector(".slider__counter");

export function sliderInit() {
  btnPrev.addEventListener("click", (e) => showPrevOrNextItem(e, "prev"));
  btnNext.addEventListener("click", (e) => showPrevOrNextItem(e, "next"));

  document.addEventListener('mousedown', (e) => startTouch(e));
  document.addEventListener('mouseup', (e) => endTouch(e));

  document.addEventListener('touchstart', (e) => startTouch(e));
  document.addEventListener('touchend', (e) => endTouch(e));

  renderSlider();
}

let x1, x2;

function startTouch(e) {
  if(!(e.touches || e.clientX)) return;
  x1 = (e.touches) ? e.touches[0].clientX : e.clientX;
}

function endTouch(e) {
  if(!(e.changedTouches || e.clientX)) return;
  x2 = (e.changedTouches) ? e.changedTouches[0].clientX : e.clientX;
  if(x1 && x2) {
    if(x2 > x1) {
      btnPrev.click();
    }
    else if(x2 < x1) {
      btnNext.click();
    }
  }
  x1 = null;
  x2 = null;
}

export function renderSlider(selectedTechnology = undefined) {
  itemsEl = createOrUpdateSliderList(list, selectedTechnology);
  activeItemInd = itemsEl.findIndex((item) => item.classList.contains("slider__item--active"));

  setCounterBlock(activeItemInd, sliderCounter, itemsEl.length);
  disableArrow(activeItemInd, btnNext, btnPrev, itemsEl.length-1);
}

function showPrevOrNextItem(e, btnVal) {
  let btn = e.currentTarget;
  if(!btn.classList.contains("slider__arrow--disabled")) {
    itemsEl[activeItemInd].classList.remove("slider__item--active");
    if(btnVal === "next") activeItemInd++;
    else if(btnVal === "prev") activeItemInd--;
    itemsEl[activeItemInd].classList.add("slider__item--active");
    setCounterBlock(activeItemInd, sliderCounter, itemsEl.length);
    disableArrow(activeItemInd, btnNext, btnPrev, itemsEl.length-1);
  }
}

function createOrUpdateSliderList(listEl, selectedTechnology = undefined) {
  listEl.innerHTML = "";
  return data.map((dataItem, ind) => {
    if(selectedTechnology && !dataItem.technologies.includes(selectedTechnology)) return;

    let item = createItem(dataItem, ind);
    if(listEl.children.length === 0) item.classList.add("slider__item--active");
    listEl.append(item);
    return item;
  }).filter((el) => el);
}

function createItem(dataItem){
  let item = document.createElement("li");
  item.classList.add("slider__item");

  let imgBlock = document.createElement("div");
  imgBlock.classList.add("slider__img");
  imgBlock.innerHTML = `<img src="${dataItem.img}" alt="project ${dataItem.title}">`;
  item.append(imgBlock);

  let descBlock = document.createElement("div");
  descBlock.classList.add("slider__desc");
  descBlock.innerHTML = `
    <h2 class="slider__title">${dataItem.title}</h2>
    <div class="slider__tech">${dataItem.technologies.join(", ")}</div>
    <p class="slider__text">${dataItem.text}</p>
    <div class="slider__links">
      <a href="${dataItem.deployLink || "#"}" target="_blank" class="slider__link slider__deploy">To deploy</a>
      <a href="${dataItem.codeLink || "#"}" target="_blank" class="slider__link slider__code">To code</a>
    </div>
  `;
  item.append(descBlock);

  return item;
}

function setCounterBlock(activeItemInd, sliderCounter, itemsCount) {
  sliderCounter.innerHTML="";

  let counterChild = document.createElement("span");
  counterChild.classList.add("slider__curr");
  counterChild.append(activeItemInd >= 9 ? (activeItemInd + 1) : "0" + (activeItemInd + 1));
  sliderCounter.append(counterChild,
      itemsCount > 9 ? `/${itemsCount}` : `/0${itemsCount}`);
}

function disableArrow(activeItemInd, btnNext, btnPrev, lastItemInd) {
  btnNext.classList.remove("slider__arrow--disabled");
  btnPrev.classList.remove("slider__arrow--disabled");

  if(activeItemInd <= 0) {
    btnPrev.classList.add("slider__arrow--disabled");
  }

  if(activeItemInd ===  lastItemInd) {
    btnNext.classList.add("slider__arrow--disabled")
  }
}
