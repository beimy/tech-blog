const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');
const Post_Tags = require('./Post_Tags');

 

Category.hasMany(Post, {
});
Post.belongsTo(Category, {
});

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.belongsToMany(Tag, {
  through: Post_Tags,
  as: 'tag',
  foreignKey: 'post_id'
});

Tag.belongsToMany(Post, {
  through: Post_Tags,
  as: 'post',
  foreignKey: "tag_id"
});

Comment.belongsToMany(Tag, {
  through: "comment_tags",
  as: "tag",
  foreignKey: "comment_id"
});

Tag.belongsToMany(Comment, {
  through: "comment_tags",
  as: 'comment',
  foreignKey: 'tag_id'
});



module.exports = {
  User, 
  Comment, 
  Post, 
  Category, 
  Tag, 
  Post_Tags
};

