InstagramClone.Views.FollowForm = Backbone.View.extend({

  initialize: function (options) {
    this.image = options.image;
  },

  className: "user-follow-detail",

  template: JST['follows/form'],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template({
      image: this.image
    });

    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()['follow'];

  }
});