InstagramClone.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    InstagramClone.Collections.images.fetch();
    InstagramClone.Collections.followees.fetch();

    this.$rootEl = $('#content');
  },

  routes: {
    "": "imagesIndex"
  },

  imagesIndex: function () {
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
