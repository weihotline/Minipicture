window.Minipicture = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Minipicture.Routers.Router;

    Backbone.history.start();
  }
};