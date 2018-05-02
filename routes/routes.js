module.exports =(app) =>{
    const controller=require("../controllers/controller.js");
 
    app.get('/', controller.start);
    app.get('/insert', controller.insert);
    app.get('/retrive', controller.getData);
}