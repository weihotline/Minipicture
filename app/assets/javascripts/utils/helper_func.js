function signOut(event) {
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

  function success (blob) {
    $.ajax({
      url: '/api/images',
      type: 'POST',
      data: { "image": { "image_url": blob.url } },
      dataType: 'json',
      success: function (image) {
        InstagramClone.Collections.images.fetch();
       // eventually use getOrFetch when finish json.jbuilder show page from each image
       // InstagramClone.Collections.images.getOrFetch(image.id);
      }
    });
  }

  function error (fperror) {
    console.log(fperror.toString());
  }

  filepicker.pick({
    mimetypes: 'image/*',
    services: 'COMPUTER'
  }, success, error);
}