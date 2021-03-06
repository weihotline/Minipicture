Minipicture.Views.ImageForm = Backbone.View.extend({

  template: JST['images/form'],
  className: 'image-jeff',
  events: {
    "submit form": "submit",
  },

  render: function() {
    var content = this.template();

    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var imageCaption = $(event.currentTarget).serializeJSON()["image"].caption;

    // set up aviary feather editor
    var featherEditor = new Aviary.Feather({
        apiKey: Minipicture.aviaryKey,
        apiVersion: 3,
        theme: 'light',
        onSave: function(imageID, newURL) {
          filepicker.export(newURL, { extension:'.png' });
          var params = {
            image_url: newURL,
            caption: imageCaption
          }

          Minipicture.Collections.images.create(params, { wait: true });
          $('#image-form-modal').remove();
          $('body').removeClass('modal-open');
        },
        onError: function(errorObj) {
          alert(errorObj.message);
        },
        appendTo: ''
    });

    var preview = document.getElementById('aviary-preview');

    function error (fperror) {
      console.log(fperror.toString());
    }

    filepicker.pick({
      mimetypes: 'image/*',
      services: 'COMPUTER'
    }, function (blob) {
      preview.src = blob.url;

      featherEditor.launch({
        image: preview,
        url: blob.url
      });
    }, error);
  }
});