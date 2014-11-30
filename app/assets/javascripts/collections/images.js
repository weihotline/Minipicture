InstagramClone.Collections.Images = Backbone.Collection.extend({
  url: "/api/images",

  model: InstagramClone.Models.Image,

  comparator: function (image) {
    var date = new Date(image.get('created_at'));
    return -date.getTime();
  },

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
  }
});

InstagramClone.Collections.images = new InstagramClone.Collections.Images;