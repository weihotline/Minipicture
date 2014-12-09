Minipicture.Views.FollowForm = Backbone.View.extend({

  initialize: function (options) {
    this.listenTo(this.collection, "add remove", this.render);

    this.image = options.image;
    this.userId = (options.userId || parseInt(this.image.escape('user_id')));
  },

  className: "user-follow-detail",

  template: JST['follows/form'],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var followee = this._findFollowee();

    var content = this.template({
      image: this.image,
      followee: followee
    });

    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    $(event.currentTarget).find('button').prop('disabled', true);

    var followee = this._findFollowee();

    function success () {
      Minipicture.Collections.images.fetch();
    }

    if (followee === undefined) {
      var params = {
        followee_id: this.userId
      }

      this.collection.create(params, { wait: true, success: success });
    } else {
      followee.destroy({ wait: true, success: success });
    }
  },

  _findFollowee: function () {
    return this.collection.findWhere({ followee_id: this.userId });
  }
});