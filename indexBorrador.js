import searchFilters from "./filtroBORRADOR.js";
import BtnMenu from "./boton_menuBORRADOR.js";
const d = document

d.addEventListener("DOMContentLoaded", e =>{
    searchFilters(".card-filter",".card")
    BtnMenu(".menu-btn",".menu")
})



