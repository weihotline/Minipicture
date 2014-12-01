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

    var imageCaption = $(event.currentTarget).serializeJSON()["image"].caption;

    function success (blob) {
      $.ajax({
        url: '/api/images',
        type: 'POST',
        data: { "image": { "image_url": blob.url, "caption": imageCaption } },
        dataType: 'json',
        success: function (image) {
          $('#image-form-modal').remove();

          InstagramClone.Collections.images.fetch();
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