InstagramClone.Collections.Images = Backbone.Collection.extend({
  url: "/api/images",

  model: InstagramClone.Models.Image,

  getOrFetch: function (id) {
    var image = this.get(id);
    var images = this;

    if (!image) {
      image = new InstagramClone.Models.Image({ id: id });
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

InstagramClone.Collections.images = new InstagramClone.Collections.Images;