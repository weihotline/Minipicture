InstagramClone.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.$rootEl = $('#content');
  },

  routes: {
    "": "imagesIndex"
  },

  imagesIndex: function () {
    InstagramClone.Collections.images.fetch();

    var imagesIndexView = new InstagramClone.Views.ImagesIndex({
      collection: InstagramClone.Collections.images
    });

    this._swapView(imagesIndexView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
