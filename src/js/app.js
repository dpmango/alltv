import sayHello from "./lib/sayHello.js";

sayHello();

$(document).on("click", ".tab-control", function() {
  var dataTab = $(this).data("tab");
  $(this).addClass("active").siblings().removeClass("active");
  $('.tab[data-tab="' + dataTab + '"]')
    .addClass("active")
    .siblings()
    .removeClass("active");
});
