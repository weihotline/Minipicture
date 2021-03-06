Minipicture.Views.LikeFormView = Backbone.View.extend({

  initialize: function (options) {
    this.listenTo(this.collection, "add remove", this.render);
    this.image = options.image
  },

  tagName: 'form',

  template: JST['likes/form'],

  events: {
    "click button": "submit"
  },

  render: function () {
    var like = this.collection.findWhere({ image_id: this.image.id });

    var content = this.template({
      like: like,
    });

    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    $(event.currentTarget).prop('disabled', true);

    var like = this.collection.findWhere({ image_id: this.image.id })

    if (like === undefined) {

      var params = {
        image_id: this.image.id
      }

      this.collection.create(params, { wait: true });
    } else {
      like.destroy();
    }
  }
})