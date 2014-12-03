InstagramClone.Views.SearchForm = Backbone.View.extend({

  template: JST['searches/form'],

  events: {
    "keyup form": "search"
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);

    return this;
  },

  search: function (event) {

  }
});