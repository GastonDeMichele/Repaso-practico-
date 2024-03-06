import searchFilters from "./filtro_busquedas.js";
import BtnMenu from "./boton_menu.js";
const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    searchFilters(".card-filter",".card")
    BtnMenu(".menu-btn",".menu")
})



