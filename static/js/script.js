document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel-slider');
    var instances = M.Carousel.init(elems);   });


let sidenavs = document.querySelectorAll(".sidenav");
let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
let collapsibles = document.querySelectorAll(".collapsible");
let collapsiblesInstance = M.Collapsible.init(collapsibles);
let tooltips = document.querySelectorAll(".tooltipped");
let tooltipsInstance = M.Tooltip.init(tooltips);
let selects = document.querySelectorAll("select");
let selectsInstance = M.FormSelect.init(selects);