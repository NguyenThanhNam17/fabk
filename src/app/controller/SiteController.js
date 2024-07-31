import course from '../models/course.js';
import { mutipleMongooseToObject } from '../until/mongooes.js';



class SiteController {
    // Get home
    async home(req, res, next) {
      
      course.find({})
      .then(course=> {
        res.render('home', {
          course: mutipleMongooseToObject(course),   
        })
      })
      .catch(next);
    }
    // Get search
    search(req, res) {
        res.render('search');
    }
}

// Export the instance of SiteController
export default new SiteController();
