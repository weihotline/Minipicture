InstagramClone.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  initialize: function () {
    this.model.fetch();
  },

  tagName: "li",

  template: JST['images/index_items'],

  events: {
    "click [id^=toggle-image-detail-]": "toggleModal",
  },

  render: function () {
    var content = this.template({
      image: this.model
    });

    this.$el.html(content);
    this._onRender();

    return this;
  },

  toggleModal: function (event) {
    event.preventDefault();

    var imageDetailView = new InstagramClone.Views.ImageDetail({
      model: this.model
    });

    $('body').append(imageDetailView.render().$el);

    // listen on closing modal
    $("#image-detail-modal").on('hidden.bs.modal', function () {
      $(this).remove();
    });
    $('#image-detail-modal').modal('show');
  },

  _onRender: function () {
    this._addLikeFormBtn();
    this._addCommentShowBtn();
  },

  _addLikeFormBtn: function () {

    var likeFormBottonView = new InstagramClone.Views.LikeFormView({
      collection: this.model.likes(),
      image: this.model
    });

    this.addSubview("#image-menus-btn", likeFormBottonView);
  },

  _addCommentShowBtn: function () {
    var commentShowBottonView = new InstagramClone.Views.CommentShowView({
      image: this.model
    });

    this.addSubview("#image-menus-btn", commentShowBottonView);
  }
})