InstagramClone.Views.CommentForm = Backbone.View.extend({

  template: JST['comments/form'],

  events: {
    'submit form': "submit"
  },

  render: function() {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["comment"];
    $(event.currentTarget).find('input:text').val('');
    //...
    console.log(params);
  }
});