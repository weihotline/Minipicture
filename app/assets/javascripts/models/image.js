InstagramClone.Models.Image = Backbone.Model.extend({
  urlRoot: "/api/images",

  comments: function () {
    if (!this._comments) {
      this._comments = new InstagramClone.Collections.Comments([], {
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

    return response;
  }
});