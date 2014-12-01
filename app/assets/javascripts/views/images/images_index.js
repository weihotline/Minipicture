InstagramClone.Views.ImagesIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addImagesIndexItem);

    this.collection.each(this.addImagesIndexItem.bind(this));
  },

  template: JST['images/index'],

  addImagesIndexItem: function (imagesIndexItem) {
    var imagesIndexItemView =
      new InstagramClone.Views.ImagesIndexItem({
        model: imagesIndexItem
      });

    this.addSubview(".images-index-items", imagesIndexItemView);
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
});