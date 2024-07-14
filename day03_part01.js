// 


db.instructors.find()


db.instructors.find({}) // options you need to apply on selection query


/// select * from instructors 

db.instructors.find(
    {}, // condition you need to apply on data 
    {} // projection ? fields you need to retrieve 
)



// select first name from instructors 
   db.instructors.find(
    {}, 
    {firstName: 1})
    
  db.instructors.find(
    {}, 
    {firstName: 1, _id:0})
    
    // many fields use projection
    
   
    db.instructors.find().forEach((document)=> {
        print(`${document.firstName} ${document.lastName}`)
        
        })
    
        // for better performance 
    db.instructors.find(
            {}, // condition, 
            {firstName:1 , lastName:1} // projection 
        
        ).forEach((document)=> {
        print(`${document.firstName} ${document.lastName}`)
        
        })
    
    
        /////
        db.instructors.find({}, {_id:0, firstName:1})
    
        db.instructors.find({_id:0, firstName:1}) // condition// 
        
      


// *********************************************/ 
        
        
        db.instructors.find().constructor.name   // cursor || DBQuery
        
        
        
        db.instructors.find().forEach((document)=> {
            
            print(document)
            })




    /// to use array properties with cursor // dbquery Object 
     // I need to convert it to array ?
            
            
     db.instructors.find().toArray().constructor.name   

      db.instructors.find().toArray().forEach()
         
         
   db.instructors.find().forEach()    /// mongo db added func. 
            
            
            
  /// ************************************/
            // when you need to use any of the array functions with 
            // the cursor object don't forget to convert it to array 
            // first except forEach 
            
            
            
 /// ************************** CRUD ************************          
            
   /// 1- retrieve 
   
   // 1- select * from instructor where id  = 6 
   
   db.instructors.find({_id:6})
            
            
    ///

 db.instructors.find({firstName:"noha"})   
 
 
 //// with age > 21
 
 db.instructors.find().forEach((document)=>{
     
        if(document.age > 21){
                print(document)
            }
     
     })
 
 
     ///********************************** comparison operators 
     
     db.instructors.find(
            {
         age : {$gt:21} 

         }, 

         {firstName:1 , age:1})
     
     /// less than 
     
     
         
       db.instructors.find({
         age : {$lt:22} 

         }, {firstName:1 , age:1})
     
     ////// equal
         
              db.instructors.find({
         age : {$eq:21} 

         }, {firstName:1 , age:1})
     
     
     
   /// ************************** in operator ********************
       // get instructors age between 22 and 28 ?
       
       
       db.instructors.find(
         {age : {$gt: 20, $lt:28}},   // between /// and 
         {}
         
         
         )  
     
     
   db.instructors.insertOne({
             
             "_id" : 20.0,
    "firstName" : "mona",
    "lastName" : "mohammed",
    "age" : 27.0,
    "salary" : 3600.0,
    "address" : {
        "city" : "mansoura",
        "street" : 20.0,
        "building" : 18.0
    },
    "courses" : [ 
        "es6", 
        "js", 
        "mongodb", 
        "expressjs"
    ]
 
             })
     
     //// use in operator 
             
             
     db.instructors.find(
         {age : {$in: [22,28]}}, 
         {age:1, firstName:1}
         )  
     /// **************************** top level operators 
         // age 22 or 28 ??
         // and , or top level operators 
         
    db.instructors.find(
         {$or : [{age:22}, {age:28}] }, 
         {age:1, firstName:1}
         
         
         )  
         
         
         
         db.instructors.find(
         
            {$and: [
                    {age: {$gt: 21}},
                    {age : {$lt: 29}}
                
                ]}
         
         )
         
    ///////////////////////// condition based on object ///////////////////////////////////////
         /// embeded 
         
         
       db.instructors.find({
           
            address: 'cairo'
           })
         
         
        db.instructors.find({
           
            city: 'cairo'
           })
         
         // get data from embedded object 
           
           
       db.instructors.find({
           
            "address.city": 'cairo'
           })
         
           
           
   //////////////// condition based on array ///////////////////////
           
         ////*********** Array operators 
           
       db.instructors.find({
           
            courses: 'js'  // check if value exists in array or not 
           }, {courses:1 , firstName:1})
           
           
           
           
           
    
          
       db.instructors.find({
           
            courses: 'js', courses: 'es6'  // check if value exists in array or not 
           }, {courses:1 , firstName:1})
           
           
        
        
        
             
       db.instructors.find({
           
            courses: ['js','es6']  // check if value exists in array or not 
           }, {courses:1 , firstName:1})  
        
           
           /// ********** array operator 
     /// js or es6
     
     db.instructors.find({
         
         courses : {$in : ['js', 'es6']}
         
         })      
           
           
           
         
   /// exact contains es6 and js ? 
         
          
     db.instructors.find({
         
         courses : {$all : ['js', 'es6']}
         
         }, {firstName:1 , courses:1})    
         
         
         
     ///// get instructor teach only 3 courses ? 
         
      
            
     db.instructors.find({
         
         courses : {$size  :3}
         
         }, {firstName:1 , courses:1})      
         
         
         
    //////////////////////////////
         
   db.instructors.insertOne({
       
       _id:100, 
       firstName: "Noha",
       lastName : "Shehab", 
       subjects : [
        2,
       4,
       6
       ]
       
       })      
         
       
       
            
   db.instructors.insertOne({
       
       _id:103, 
       firstName: "Noha",
       subjects : [
        12,
       10,
       8
       ]
       
       })      
       
       
       
       
      /// get instructor each subject < 8 
      
      
      db.instructors.find({
          
          subjects: {$elemMatch: {$lt:8}}
          
          }) 
          
          
          
            db.instructors.find({
          
          subjects: {$elemMatch: {$lt:10}}
          
          }) 
       
       
       //// 
       
     
        
        /// 
        db.instructors.find({
            city: {$exists: true}
            
            })  
       

         
         
         
 ///////////////////////// Element operator ////////
     db.instructors.find(
            {}, // condition, 
            {firstName:1 , lastName:1} // projection 
        
        ).forEach((document)=> {
        print(`${document.firstName} ${document.lastName}`)
        
        }) 
         
         
        
        
        /// get only documents that have field fistName , 
        
        
        
          db.instructors.find(
            {
                firstName: {$exists: true }, 
                lastName: {$exists: true }
                
                }, // condition, 
            {firstName:1 , lastName:1} // projection 
        
        ).forEach((document)=> {
        print(`${document.firstName} ${document.lastName}`)
        
        }) 
         
         
        /////// salary 
        
        
//       
//         let 
        total = 0;
      
       db.instructors.find(
            {
              
                }, // condition, 
            {firstName:1 , salary:1} // projection 
        
        ).forEach((document)=> {
            total +=  document.salary
            
        
        })  
       
       print(total) 
        


      
        let total = 0;
      total  = 0;
       db.instructors.find(
            {
              salary : {$exists:true }
                }, // condition, 
            {firstName:1 , salary:1} // projection 
        
        ).forEach((document)=> {
            total +=  document.salary
            
        
        })  
       
       print(total) 
        
        
        
        
        
   
   db.instructors.insertOne({
       
       _id:105, 
       salary : "thousand",
       firstName: "ahmed" 
       
       })     
        
        
        //// I need field with specific type ??? 
        total  = 0;
       db.instructors.find(
            {
              salary : {$exists:true }
              // 
                }, // condition, 
            {firstName:1 , salary:1} // projection 
        
        ).forEach((document)=> {
            total +=  document.salary
            
        
        })  
       
       print(total)   
        
        
        
    /// use with specific type 
    
      total  = 0;
       db.instructors.find(
            {
              salary : {$type:"number" }
              // 
                }, // condition, 
            {firstName:1 , salary:1} // projection 
        
        ).forEach((document)=> {
            total +=  document.salary
            
        
        })  
       
       print(total)   
            
        
  
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
           
           
           
           
           
           
           
           
           
           
           
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     
  




  
           
           
                  
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
                
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
         
         
         
         
         
         
     
     
     
     
     
     
     
     
     
     
     
     
 
 
 
 
 
 
 
 
 
 
 
 
            
            
            
            
            
            













    /// first name >> option >> firsts exists or not 
    
    
        
        
    

    
    
    
    
    
    
    
    
    
    
    
    
    