Minipicture.Views.ImagesIndexItem = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.isImageCollection = options.isImageCollection;
    if (!this.isImageCollection) { this.model.fetch() };
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

    var imageDetailView = new Minipicture.Views.ImageDetail({
      model: this.model
    });

    this.$el.append(imageDetailView.render().$el);

    // listen on closing modal
    $("#image-detail-modal").on('hidden.bs.modal', function () {
      $(this).remove();
    });
    $('#image-detail-modal').modal('show');
  },

  _onRender: function () {
    if (!this.isImageCollection) {
      this._addLikeFormBtn();
      this._addCommentShowBtn();
    }
  },

  _addLikeFormBtn: function () {

    var likeFormBottonView = new Minipicture.Views.LikeFormView({
      collection: this.model.likes(),
      image: this.model
    });

    this.addSubview("#image-menus-btn", likeFormBottonView);
  },

  _addCommentShowBtn: function () {
    var commentShowBottonView = new Minipicture.Views.CommentShowView({
      image: this.model
    });

    this.addSubview("#image-menus-btn", commentShowBottonView);
  }
})