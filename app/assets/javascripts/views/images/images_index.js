InstagramClone.Views.ImagesIndex = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addImagesIndexItem);
    this.listenTo(this.collection, "remove", this.removeImagesIndexItem);

    this.isImageCollection = options.isImageCollection;
    this.collection.each(this.addImagesIndexItem.bind(this));
  },

  addImagesIndexItem: function (imagesIndexItem) {

    var imagesIndexItemView =
      new InstagramClone.Views.ImagesIndexItem({
        model: imagesIndexItem,
        isImageCollection: this.isImageCollection
      });

    this.addSubview(".images-index-items", imagesIndexItemView);
  },
  removeImagesIndexItem: function(imagesIndexItem) {
    var imagesIndexItemView =
      _(this.subviews()[".images-index-items"]).find(function (subview) {
        return subview.model == imagesIndexItem;
      });

    this.removeSubview('.images-index-items', imagesIndexItemView);
  },

  template: JST['images/index'],

  render: function () {

    var content = this.template();

    this.$el.html(content);
    this.attachSubviews();
    this.listenForScroll();

    return this;
  },

  listenForScroll: function () {
    $(window).off("scroll");
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (self.collection.page < self.collection.total_pages) {
        self.collection.fetch({
          data: { page: self.collection.page + 1 },
          remove: false,
          wait: true
        });
      }
    }
  }
});
