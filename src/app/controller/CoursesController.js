
import Course from '../models/course.js';
import {mongooseToObject}from'../until/mongooes.js';

class CoursesController {

    //post create
    store(req,res,next){
       const formData = req.body;
       formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
       const course = new Course(formData);
       course.save()
       .then(()=>res.redirect('/'))
       .catch((error)=>{
        
       })
    }

    //get create
    create(req,res,next){
      res.render('courses/create');
    }

    // Get courses
    show(req,res,next){
         Course.findOne({slug:req.params.slug})
        .then(course=>{res.render('courses/show', {course:mongooseToObject(course)});})
        .catch(next)
        //  res.send('Hello '); 
    }

    edit(req,res,next){
      Course.findById(req.params.id)
      .then(course=> res.render('courses/edit',{
        course:mongooseToObject(course)
      }))
    }


    //[put]update
    update(req,res,next){
       Course.updateOne({ _id: req.params.id }, req.body)
       .then(()=>res.redirect('/me/stored/courses'))
       .catch(next);
    }

}

// Export the instance of NewsController
export default new CoursesController();