Minipicture.Collections.Followees = Backbone.Collection.extend({
  url: 'api/follows'
});

Minipicture.Collections.followees = new Minipicture.Collections.Followees;