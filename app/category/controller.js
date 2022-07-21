module.exports = {
    index: async(req, res) => {
        try {
            res.render('index', {
                title: "express js"
            })
        } catch (err) {
            console.log(err)
        }
    }
}