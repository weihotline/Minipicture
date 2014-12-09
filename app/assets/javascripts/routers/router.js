Minipicture.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#content');
  },

  routes: {
    "": "imagesIndex",
    "collections": "collectedImagesIndex"
  },

  imagesIndex: function () {
    Minipicture.Collections.images.fetch();
    Minipicture.Collections.followees.fetch();

    var imagesIndexView = new Minipicture.Views.ImagesIndex({
      collection: Minipicture.Collections.images,
      isImageCollection: false
    });

    this._swapView(imagesIndexView);
  },

  collectedImagesIndex: function () {
    Minipicture.Collections.collectedImages.fetch();

    var collectedImagesIndexView = new Minipicture.Views.ImagesIndex({
      collection: Minipicture.Collections.collectedImages,
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
