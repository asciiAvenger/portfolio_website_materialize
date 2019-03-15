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
        hover: true
    });

    // init collapsible mobile sidenav
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles, {});

    // init scrollspy
    let scrollspyElements = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(scrollspyElements, {});
});