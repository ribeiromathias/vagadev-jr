var currentItems = 0;

$(document).ready(function () {
  $('.add-to-cart').click(function () {
    currentItems++;
    $('#badge').text(currentItems);
  });
});
