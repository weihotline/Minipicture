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
      var params = {
        image_url: blob.url,
        caption: imageCaption
      }

      InstagramClone.Collections.images.create(params, { wait: true });
      $('#image-form-modal').remove();
    }

    function error (fperror) {
      console.log(fperror.toString());
    }

    //Setup Aviary
    // var featherEditor = new Aviary.Feather({
    //     apiKey: '<%= ENV["AVIARY_API_KEY" %>',
    //     apiVersion: 3,
    //     onSave: function(imageID, newURL) {
    //         //Export the photo to the cloud using the Filepicker!
    //         filepicker.export(newURL, {extension:'.png'});
    //     },
    //     appendTo: 'web_demo_pane'
    // });

    filepicker.pick({
      mimetypes: 'image/*',
      services: 'COMPUTER'
    }, success, error);
  }
});