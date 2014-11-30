function refresh(event) {
  var $refresh = $('button#refresh-feed > i');
  $refresh.addClass("gly-spin");

  InstagramClone.Collections.images.fetch({
    success: function () {
      // setTimeout allows user to see the fetch effect
      setTimeout(function() {
        $refresh.removeClass("gly-spin");
      }, 1000);
    }
  });
}

function logout(event) {
  event.preventDefault();

  $.ajax({
    url: '/session',
    type: 'DELETE',
    dataType: 'json',
    success: function(response) {
      window.location.reload();
    }
  });
}

function upload(event) {
  event.preventDefault();

  $('#imageFormModal').modal('show');
}