InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  initialize: function () {
    this._addCommentFormView();
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

  _addCommentFormView: function() {
    var commentFormView = new InstagramClone.Views.CommentForm({
      model: this.model
    })

    this.addSubview(".modal-header", commentFormView);
  }
})