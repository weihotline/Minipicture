InstagramClone.Views.CommentsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addCommentsIndexItem);
    // this.listenTo(this.collection, 'sync', this.addAllCommentsIndexItems);
    this.collection.each(this.addCommentsIndexItem.bind(this));
  },

  template: JST['comments/index'],

  addCommentsIndexItem: function (commentsIndexItem) {
    var commentsIndexItemView =
      new InstagramClone.Views.CommentsIndexItem({
        model: commentsIndexItem
      });

    this.addSubview(".comments-index-items", commentsIndexItemView);
  },

  addAllCommentsIndexItems: function () {
    this.subviews('.comments-index-items').sort()
    // this.collection.sort().each(this.addCommentsIndexItem.bind(this));
  },

  render: function() {
    var content = this.template({
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});