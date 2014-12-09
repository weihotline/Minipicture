Minipicture.Views.CommentShowView = Backbone.View.extend({

  initialize: function (options) {
    this.image = options.image
  },

  template: JST['comments/show'],

  render: function () {
    var content = this.template({
      image: this.image
    });

    this.$el.html(content);

    return this;
  }
});