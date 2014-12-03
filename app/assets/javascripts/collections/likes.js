InstagramClone.Collections.Likes = Backbone.Collection.extend({
  url: 'api/likes'
});

InstagramClone.Collections.likes = new InstagramClone.Collections.Likes;