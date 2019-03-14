// initialising components
document.addEventListener('DOMContentLoaded', () => {
    // init sidenav
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: "right"
    });

    // init navbar dropdown menu
    let dropdown = document.querySelector(".dropdown-trigger");
    M.Dropdown.init(dropdown, {
        hover: false
    });
});