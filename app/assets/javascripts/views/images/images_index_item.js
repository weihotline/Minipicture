InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  tagName: "li",

  template: JST['images/images_index_item'],

  events: {
    'click div#comments': "keepDropdownOpen"
  },

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);

    return this;
  },

  keepDropdownOpen: function(event) {
    event.preventDefault();
    event.stopPropagation();
  }
})