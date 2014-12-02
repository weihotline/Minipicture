InstagramClone.Views.FollowForm = Backbone.View.extend({

  initialize: function (options) {
    this.listenTo(this.collection, "add", this.handleAdd);
    this.listenTo(this.collection, "remove", this.handleRemove);
    this.image = options.image;

    this.imageOwnerId = parseInt(this.image.escape('user_id'));
    this.followee = this.collection.findWhere({ followee_id: this.imageOwnerId });
  },

  className: "user-follow-detail",

  template: JST['follows/form'],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var content = this.template({
      image: this.image,
      followee: this.followee
    });

    this.$el.html(content);

    return this;
  },

  handleAdd: function (model, collection) {
    this.followee = model;
    this.render();
  },

  handleRemove: function (model, collection) {
    this.followee = undefined;
    this.render();
  },

  submit: function (event) {
    event.preventDefault();
    $(event.currentTarget).find('button').prop('disabled', true);

    if (this.followee === undefined) {
      var params = {
        followee_id: this.imageOwnerId
      }

      this.collection.create(params, { wait: true });
    } else {
      this.followee.destroy();
    }
  }
});