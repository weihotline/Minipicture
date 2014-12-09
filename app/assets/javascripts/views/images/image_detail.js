Minipicture.Views.ImageDetail = Backbone.CompositeView.extend({

  template: JST['images/detail'],

  render: function() {
    var content = this.template();

    this.$el.html(content);
    this._onRender();
    return this;
  },

  _onRender: function () {
    this._addFollowFormView();
    this._addCommentsIndexView();
    this._addCommentFormView();
  },

  _addFollowFormView: function () {
    var followFormView = new Minipicture.Views.FollowForm({
      image: this.model,
      collection: Minipicture.Collections.followees
    });

    this.addSubview(".modal-header", followFormView);
  },

  _addCommentsIndexView: function () {
    var commentsIndexView = new Minipicture.Views.CommentsIndex({
      collection: this.model.comments()
    });

    this.addSubview(".modal-body", commentsIndexView);
  },

  _addCommentFormView: function () {
    var commentFormView = new Minipicture.Views.CommentForm({
      collection: this.model.comments(),
      image: this.model
    })

    this.addSubview(".modal-footer", commentFormView);
  }
});