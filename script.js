// Declaring Variables
let sideBarOpen = false;
let sideBar = document.querySelector('.sidebar');

// Opens the sidebar by adding the "sidebar-responsive" class if the sidebar is 
// not already open
function openSideBar() {
    if (!sideBarOpen) {
        sideBar.classList.add("sidebar-responsive");
        sideBarOpen = true;
    }
}

// Closes the sidebar by removing the "sidebar-responsive" class and setting the 
// sideBarOpen variable to false
function closeSideBar() {
    sideBar.classList.remove("sidebar-responsive");
    sideBarOpen = false;
}