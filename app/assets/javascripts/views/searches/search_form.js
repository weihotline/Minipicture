Minipicture.Views.SearchForm = Backbone.CompositeView.extend({

  template: JST['searches/form'],

  events: {
    "keyup input:text": "search"
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);

    return this;
  },


  search: function (event) {
    var query = $(event.currentTarget).val();
    var that = this;

    $('#search-results').empty();
    if (query !== "") {
      $.ajax({
        url: "/users/search",
        dataType: "json",
        method: "GET",
        data: { query: query },
        success: function (results) {
          if (results.length === 0) { results = ['No Match Found'] };
          _(results).each(function (result) {
            that._showSearchResult(result);
          });
        }
      });
    }

  },

  _showSearchResult: function (result) {
    var searchShowView = new Minipicture.Views.SearchShow({
      result: result
    });

    this.addSubview('#search-results', searchShowView);
  }

});