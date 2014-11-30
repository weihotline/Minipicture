InstagramClone.Views.ImagesDetailShow = Backbone.CompositeView.extend({

  template: ["images/detail_show"],

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);

    return this;
  }

});