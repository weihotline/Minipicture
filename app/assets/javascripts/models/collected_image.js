Minipicture.Models.CollectedImage = Backbone.Model.extend({
  urlRoot: 'api/image_collections',

  likes: function () {
    if (!this._likes) {
      this._likes = new Minipicture.Collections.Likes([], {
        image: this
      });
    }

    return this._likes;
  },

  parse: function (response) {
    if (response.likes) {
      this.likes().set(response.likes, { parse: true });
      delete response.likes;
    }

    return response;
  }
});