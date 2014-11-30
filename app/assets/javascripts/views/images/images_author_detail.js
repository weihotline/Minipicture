InstagramClone.Views.AuthorDetail = Backbone.View.extend({

  template: JST['images/author_detail'],

  render: function() {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);

    return this;
  }
});