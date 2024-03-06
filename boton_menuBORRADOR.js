const d = document ;

export default function (selectorBtn, selectorMenu){
  const $btnMenu = d.querySelector(selectorBtn)
  const $menu = d.querySelector(selectorMenu)

$btnMenu.addEventListener(`click`, (e)=>{
  $btnMenu.firstElementChild.classList.toggle("none");
  $btnMenu.lastElementChild.classlist.toggle("none")
})


}