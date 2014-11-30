InstagramClone.Views.ImageForm = Backbone.View.extend({

  template: JST['images/form'],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template();

    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var imageTitle = $(event.currentTarget).serializeJSON()["image"].title;

    function success (blob) {
      $.ajax({
        url: '/api/images',
        type: 'POST',
        data: { "image": { "image_url": blob.url, "title": imageTitle } },
        dataType: 'json',
        success: function (image) {
          $(event.currentTarget).find('input:text').val('');
          $('#imageFormModal').modal('hide');

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
});