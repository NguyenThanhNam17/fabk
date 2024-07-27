import courses from '../models/course.js';
import {mongooseToObject}from'../until/mongooes.js';

class CoursesController {
    // Get courses
    show(req,res,next){
         courses.findOne({slug:req.params.slug})
        .then(course=>{res.render('courses/show', {course:mongooseToObject(course)});})
        .catch(next)
        //  res.send('Hello '); 
    }
}

// Export the instance of NewsController
export default new CoursesController();