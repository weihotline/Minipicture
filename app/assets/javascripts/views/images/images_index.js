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
