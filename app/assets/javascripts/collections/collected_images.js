Minipicture.Collections.CollectedImages = Backbone.Collection.extend({
  url: 'api/image_collections',

  model: Minipicture.Models.CollectedImage,

  getOrFetch: function (id) {
    var image = this.get(id);
    var images = this;

    if (!image) {
      image = new Minipicture.Models.CollectedImage({ id: id });
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

Minipicture.Collections.collectedImages = new Minipicture.Collections.CollectedImages;