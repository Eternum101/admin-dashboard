// Declaring Variables

let sideBarOpen = false;
let sideBar = document.querySelector('.sidebar');

function openSideBar() {
    if (!sideBarOpen) {
        sideBar.classList.add("sidebar-responsive");
        sideBarOpen = true;
    }
}

function closeSideBar() {
    sideBar.classList.remove("sidebar-responsive");
    sideBarOpen = false;
}