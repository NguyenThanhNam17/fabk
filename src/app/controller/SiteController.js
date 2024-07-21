class SiteController {
    
    // Get home
    home(req, res) {
        res.render('home');
    }

    // Get search
    search(req,res){
        res.render('search');
    }

}

// Export the instance of SiteController
export default new SiteController();
