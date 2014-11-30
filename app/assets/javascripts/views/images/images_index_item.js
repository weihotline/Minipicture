InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  tagName: "li",

  template: JST['images/index_item'],

  events: {
    'click div#comments': "keepDropdownOpen",
    'submit form': "submit"
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
  },

  submit: function(event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["comment"];
    //...
    console.log(params);
  }
})