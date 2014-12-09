Minipicture.Models.Image = Backbone.Model.extend({
  urlRoot: "api/images",

  likes: function () {
    if (!this._likes) {
      this._likes = new Minipicture.Collections.Likes([], {
        image: this
      });
    }

    return this._likes;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Minipicture.Collections.Comments([], {
        image: this
      });
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    if (response.likes) {
      this.likes().set(response.likes, { parse: true });
      delete response.likes;
    }

    return response;
  }
});