InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  tagName: "li",

  template: JST['images/images_index_item'],

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);

    return this;
  }
})