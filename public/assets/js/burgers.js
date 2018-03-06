// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.form').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger-input')
        .val()
        .trim(),
      devoured: 0
    };
    // console.log(newBurger);

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      console.log('Burger added!');
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.eat-btn').on('click', function(event) {
    var burgerId = $(this).data('id');
    var newEat = $(this).data('newdevour');

    var burgerEaten = {
      devoured: newEat
    };

    $.ajax('/api/burgers/' + burgerId, {
      type: 'PUT',
      data: burgerEaten
    }).then(function() {
      console.log('Changed devoured to: ' + newEat);
      location.reload();
    });
  });
});
