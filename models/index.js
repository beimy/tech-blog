const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const Tag = require('./Tag');
const Post_Tags = require('./Post_Tags');
const Comment_Tags = require('./Comment_Tags')
const Post_Comment = require('./Post_Comments')

 


User.hasMany(Post, {
});
Post.belongsTo(User, {
});

User.hasMany(Comment, {
});
Comment.belongsTo(User, {
});


Post.hasMany(Comment, {
  as: 'comment',
  through: Post_Comment,
  foreignKey: 'comment_id'
});
// Comment.belongsTo(Post, {
//   as: 'comment',
//   through: Post_Comment
// });

Category.hasMany(Post, {
  foreignKey: 'category_id'
});
Post.belongsTo(Category, {
  foreignKey: 'category_id'
});




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



module.exports = {
  User, 
  Comment, 
  Post, 
  Category, 
  Tag, 
  Post_Tags,
  Comment_Tags
};

