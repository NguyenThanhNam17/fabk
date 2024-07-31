import course from '../models/course.js';
import Course from '../models/course.js';
import {mongooseToObject, mutipleMongooseToObject}from'../until/mongooes.js';

class MeController {

  storedCourse(req,res,next){
    Course.find({})
    .then((courses)=>res.render('me/stored-Course',{
      courses:mutipleMongooseToObject(courses)
    }))
    .catch(next)
  }
}

// Export the instance of NewsController
export default new MeController();