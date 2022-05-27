exports.get404 = 
(req, res, next) => {
res.status(404).render('error', { pageTitle: "404"})
}