// 데이터를  처리하는 로직을 별도의 파일로 분리하여 api처럼 사용하기 위함..


import menus from "../data/Menu-detail.json"; // 변수를 만들어서 담았다.

// 1. 메뉴 전체 반환
export function getMenuList (){
    return menus;
}

// 2. 검색 함수
export function searchMenu(menuName){
    return menus.filter(menu => menu.menuName.match(menuName));
}

// 3. 디테일 페이지 함수
export function getMenuDetail(menuCode){
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]
    // 필터로 뱉은
    
    // 혹시 중복되더라도.. 0은 필터링 이후 최상위 리스트 1개만 보여준다는 의미다.
}