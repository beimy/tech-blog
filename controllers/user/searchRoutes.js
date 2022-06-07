const router = require('express').Router();
const { User, Post, Comment, Category, Tag } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// GET route for displaying posts from search
router.get('/', async(req, res) => {
    console.log('-----------------------------------------');
    console.log(req.query.id);
    try{  
        idArr = req.query.id;
        const postData = await Post.findAll({
        where: {
            post_id: idArr
        },
        attributes: [
            'post_id',
            'post_title',
            'post_content',
        ],
        include: [
            {
    
            model: User,
            attributes: ["username"],
            },
            {
            model: Category,
            attributes: ['category_id', 'category_name']
            },
            {
            model: Tag,
            as: 'tags',
            },
            {
            model: Comment,
            attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
            include: [
                {
                model: User,
                attributes: ['username'],
                },
                {
                model: Tag,
                as: 'tags'
                }
            ]
            },
        ]
    
        });
        const posts = postData.map(post => post.get({ plain: true }))
        res.status(200).render('index', { 
        posts,
        loggedIn: req.session.loggedIn,
        pageTitle: "search",
        errorCSS: false,
        mainCSS: true,
        adminCSS: false,
        mainJS: true,
        errorJS: false,
    
        })
    } catch (err) {
        res.status(500).json(`Unexpected error occured in search route /search ${err}`);
    } finally {

    }
    
})

module.exports = router