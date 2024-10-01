import menus from "../data/Menu-detail.json";

export function getMenus(){
    return menus;
}

export function getMenusDetail(id){
    return(
        menus.filter(menu => menu.id === parseInt(id))[0]
    )
}