InstagramClone.Views.CommentForm = Backbone.View.extend({
  initialize: function (options) {
    this.image = options.image;
  },

  template: JST['comments/form'],

  events: {
    'submit form': "submit"
  },

  render: function() {
    var content = this.template();

    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var commentContent = $(event.currentTarget).serializeJSON()["comment"].content;

    var params = {
      content: commentContent,
      image_id: this.image.id
    }

    this.collection.create(params, { wait: true });
  }
});