Minipicture.Collections.Images = Backbone.Collection.extend({
  url: "api/images",

  model: Minipicture.Models.Image,

  getOrFetch: function (id) {
    var image = this.get(id);
    var images = this;

    if (!image) {
      image = new Minipicture.Models.Image({ id: id });
      image.fetch({
        success: function () {
          images.add(image);
        }
      });
    } else {
      image.fetch();
    }

    return image;
  },

  parse: function (response) {
    this.page = response.page;
    this.total_pages = response.total_pages;

    return response.models;
  }
});

Minipicture.Collections.images = new Minipicture.Collections.Images;