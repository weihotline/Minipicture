InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  initialize: function () {
    this.model.fetch();
  },

  tagName: "li",

  template: JST['images/index_items'],

  events: {
    "click [id^=toggle-image-detail-]": "toggleModal"
  },

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  toggleModal: function (event) {
    event.preventDefault();

    var imageDetailView = new InstagramClone.Views.ImageDetail({
      model: this.model
    });

    this.$el.append(imageDetailView.render().$el);

    // listen on closing modal
    $("#image-detail-modal").on('hidden.bs.modal', function () {
      $(this).remove();
    });
    $('#image-detail-modal').modal('show');
  }
})