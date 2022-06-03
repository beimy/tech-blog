const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');
const Post_Tags = require('./Post_Tags');
const Comment_Tags = require('./Comment_Tags')

 

Category.hasMany(Post, {
  foreignKey: 'post_id'
});
Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

User.hasMany(Post, {
  foreignKey: 'post_id'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  // foreignKey: 'comment_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'comment_id'
});
Comment.belongsTo(Post, {
  // foreignKey: 'post_id'
});

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
  through: Comment_Tags,
  as: "tag",
  foreignKey: "comment_id"
});

Tag.belongsToMany(Comment, {
  through: Comment_Tags,
  as: 'comment',
  foreignKey: 'tag_id'
});



module.exports = {
  User, 
  Comment, 
  Post, 
  Category, 
  Tag, 
  Post_Tags,
  Comment_Tags
};

