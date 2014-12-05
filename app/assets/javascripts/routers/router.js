InstagramClone.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#content');
  },

  routes: {
    "": "imagesIndex",
    "collections": "collectedImagesIndex"
  },

  imagesIndex: function () {
    InstagramClone.Collections.images.fetch();
    InstagramClone.Collections.followees.fetch();

    var imagesIndexView = new InstagramClone.Views.ImagesIndex({
      collection: InstagramClone.Collections.images,
      isImageCollection: false
    });

    this._swapView(imagesIndexView);
  },

  collectedImagesIndex: function () {
    InstagramClone.Collections.collectedImages.fetch();

    var collectedImagesIndexView = new InstagramClone.Views.ImagesIndex({
      collection: InstagramClone.Collections.collectedImages,
      isImageCollection: true
    });

    this._swapView(collectedImagesIndexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
