InstagramClone.Collections.Followers = Backbone.Collection.extend({
  url: '/api/follows'
});

InstagramClone.Collections.followers = new InstagramClone.Collections.Followers;