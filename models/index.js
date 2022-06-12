const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');
const Post_Tags = require('./Post_Tags');
const Comment_Tags = require('./Comment_Tags')
// const Post_Follow = require('./Post_Follow')
// const User_Follow = require('./User_Follow')
 




User.hasMany(Post, {
  foreignKey: 'user_id'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Post, {
  foreignKey: 'category_id'
});
Post.belongsTo(Category, {
  foreignKey: 'category_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// Post.belongsToMany(User, {
//   through: Post_Follow,
//   as: 'post',
//   foreignKey: 'post_id'
// });

// User.hasMany(Post, {
//   through: Post_Follow,
//   as: 'user'
// });

Post.belongsToMany(Tag, {
  through: Post_Tags,
  as: 'tags',
  foreignKey: 'post_id'
});

Tag.belongsToMany(Post, {
  through: Post_Tags,
  as: 'post',
  foreignKey: "tag_id"
});

Comment.belongsToMany(Tag, {
  through: Comment_Tags,
  as: "tags",
  foreignKey: "comment_id"
});

Tag.belongsToMany(Comment, {
  through: Comment_Tags,
  as: 'comment',
  foreignKey: 'tag_id'
});

Post_Tags.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post_Tags.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Comment_Tags.belongsTo(Comment, {
  foreignKey: 'comment_id'
});

Comment_Tags.belongsTo(Tag, {
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

