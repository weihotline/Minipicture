InstagramClone.Collections.Followees = Backbone.Collection.extend({
  url: '/api/follows'
});

InstagramClone.Collections.followees = new InstagramClone.Collections.Followees;