InstagramClone.Views.CommentsIndexItem = Backbone.View.extend({
  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
    this.model.fetch();
  },

  tagName: 'li',

  className: "well well-sm",

  template: JST["comments/index_item"],

  render: function () {

    var content = this.template({
      comment: this.model
    });

    this.$el.html(content);

    return this;
  }
});