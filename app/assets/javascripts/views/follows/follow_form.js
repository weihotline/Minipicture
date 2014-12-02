InstagramClone.Views.FollowForm = Backbone.View.extend({

  initialize: function (options) {
    this.listenTo(this.collection, "add", this.handleAdd);
    this.listenTo(this.collection, "remove", this.handleRemove);
    this.image = options.image;

    this.imageOwnerId = parseInt(this.image.escape('user_id'));
    this.follower = this.collection.findWhere({ follower_id: this.imageOwnerId });
  },

  className: "user-follow-detail",

  template: JST['follows/form'],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template({
      image: this.image,
      follower: this.follower
    });

    this.$el.html(content);

    return this;
  },

  handleAdd: function (model, collection) {
    this.follower = model;
    this.render();
  },

  handleRemove: function (model, collection) {
    this.follower = undefined;
    this.render();
  },

  submit: function (event) {
    event.preventDefault();

    if (this.follower === undefined) {
      var params = {
        follower_id: this.imageOwnerId
      }

      this.collection.create(params, { wait: true });
    } else {
      this.follower.destroy();
    }
  }
});