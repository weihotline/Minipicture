InstagramClone.Views.SearchShow = Backbone.View.extend({

  initialize: function (options) {
    this.result = options.result;
  },

  tagName: 'li',

  className: "search-result well well-sm",

  template: JST["searches/show"],

  render: function () {

    var content = this.template({
      result: this.result
    });

    this.$el.html(content);
    this._addFollowFormBtn();

    return this;
  },

  _addFollowFormBtn: function () {

    if (this.result === 'No Match Found') {
      this.$el.append('<div>');
    } else {
      var userId = (this.result.id || this.result.user_id);
      var followFormView = new InstagramClone.Views.FollowForm({
        userId: userId,
        collection: InstagramClone.Collections.followees
      });

      this.$el.append(followFormView.render().$el);
    }
  }
});