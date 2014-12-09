Minipicture.Collections.Comments = Backbone.Collection.extend({
  url: 'api/comments',

  model: Minipicture.Models.Comment,

  comparator: function(comment) {
    var date = new Date(comment.get('created_at'));
    return date.getTime();
  },

  getOrFetch: function(id) {
    var comment = this.get(id);
    var comments = this;

    if (!comment) {
      comment = new Minipicture.Models.Comment({ id: id });
      comment.fetch({
        success: function () {
          comments.add(comment);
        }
      });
    } else {
      comment.fetch();
    }

    return comment;
  }
});
