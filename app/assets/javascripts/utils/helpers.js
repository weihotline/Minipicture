(function () {

  if (typeof JSUtil === "undefined") {
    window.JSUtil = {};
  };

  JSUtil.refresh = function (event) {
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

  JSUtil.logout = function (event) {
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

  JSUtil.upload = function (event) {
    event.preventDefault();

    var imageFormView = new InstagramClone.Views.ImageForm;

    $('#image-form').html(imageFormView.render().$el);
    $('#image-form-modal').modal('show');
  }

  JSUtil.fancyboxHTMLInjector = function (text) {
    var html = '<h5>' + text + '</h5>';
    html += '<button class="image-menus btn btn-default pull-right">';
    html += '<i class="glyphicon glyphicon-heart"></i>';
    html += '</button>';
    html += '<button class="image-menus btn btn-default pull-right"';
    html += 'id="fancybox-toggle-image-detail">';
    html += '<i class="glyphicon glyphicon-pencil"></i>';
    html += '</button>';

    return html;
  }
})();
