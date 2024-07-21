class NewsController {
    
    // Get news
    index(req, res) {
        res.render('news');
    }

    //Get detail
    detail(req,res){
        res.send('detaill!!');
    }

}

// Export the instance of NewsController
export default new NewsController();
