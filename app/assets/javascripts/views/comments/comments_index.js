Minipicture.Views.CommentsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCommentsIndexItem);

    this.collection.each(this.addCommentsIndexItem.bind(this));
  },

  template: JST['comments/index'],

  addCommentsIndexItem: function (commentsIndexItem) {
    var commentsIndexItemView =
      new Minipicture.Views.CommentsIndexItem({
        model: commentsIndexItem
      });

    this.addSubview(".comments-index-items", commentsIndexItemView);
  },

  render: function() {
    var content = this.template({
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});