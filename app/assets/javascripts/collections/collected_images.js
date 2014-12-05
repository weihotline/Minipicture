InstagramClone.Collections.CollectedImages = Backbone.Collection.extend({
  url: 'api/image_collections',

  model: InstagramClone.Models.CollectedImage,

  getOrFetch: function (id) {
    var image = this.get(id);
    var images = this;

    if (!image) {
      image = new InstagramClone.Models.CollectedImage({ id: id });
      image.fetch({
        success: function () {
          images.add(image);
        }
      });
    } else {
      image.fetch();
    }

    return image;
  }
});

InstagramClone.Collections.collectedImages = new InstagramClone.Collections.CollectedImages;