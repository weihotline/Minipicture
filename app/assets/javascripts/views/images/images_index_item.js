InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  initialize: function () {
    this.model.fetch();
    this._addCommentFormView();
    this._addCommentsIndexView();
  },

  tagName: "li",

  template: JST['images/index_item'],

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  _addCommentFormView: function () {
    var commentFormView = new InstagramClone.Views.CommentForm({
      collection: this.model.comments(),
      image: this.model
    })

    this.addSubview(".modal-header", commentFormView);
  },

  _addCommentsIndexView: function () {
    var commentsIndexView = new InstagramClone.Views.CommentsIndex({
      collection: this.model.comments()
    });

    this.addSubview(".modal-body", commentsIndexView);
  }
})