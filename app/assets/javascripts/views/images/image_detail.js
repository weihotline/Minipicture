InstagramClone.Views.ImageDetail = Backbone.CompositeView.extend({

  template: JST['images/detail'],

  render: function() {
    var content = this.template();

    this.$el.html(content);
    this._onRender();
    return this;
  },

  _onRender: function () {
    this._addCommentFormView();
    this._addCommentsIndexView();
    this._addFollowFormView();
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
  },

  _addFollowFormView: function () {
    var followFormView = new InstagramClone.Views.FollowForm({
      image: this.model
    });

    this.addSubview(".modal-header", followFormView);
  }
});