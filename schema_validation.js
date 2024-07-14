//// --------------> schema validation 

db.instructors.find({_id: 8})


db.instructors.insertOne({salary:"any string" , name: "omar"})


/// instructor ==> no schema rules applied on collection instructors 


db.getCollectionInfos({name:'instructors'})




/// create collection with validator 
/// add some rules to the emp_document 
// first, lname string 

db.createCollection("employees", 
{
   validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           properties: {
               fname: {bsonType: "string"},
               lname: {bsonType: "string"}
             }
           
           }// jsonSchema 
       
       }// validator  
   } // schema creation options 
)



db.getCollectionInfos({name: "employees"})

db.employees.find()


db.employees.insertOne({_id:1 , fname:'a', lname:'b'})



db.employees.find()

db.employees.insertOne({_id:1 , fname:888, lname:'b'}) // error 

db.employees.insertOne({_id:2 , lname:'b'}) //  


// modify employess collection schema  --> add field age --> type number:

////////////////////////////////////

db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           properties: {
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number"}
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )


db.employees.insertOne({_id:3 , lname:'b', age:"iti"}) //  error
db.employees.insertOne({_id:3 , lname:'b', age:22})

db.employees.insertOne({_id:4 , lname:'b', age:44, email:"test"})




/// specify required field 

db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           properties: {
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number"}
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )


db.employees.insertOne({_id:5 , lname:'b', age:44, email:"test"})

db.employees.insertOne({_id:5 ,fname:"ddd", lname:'b', age:44, email:"test"})





///// disable adding extra fields 


db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number"}
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )


db.employees.insertOne({_id:7 ,fname:"ddd", lname:'b', 
    age:44, email:"test"}) /// error



db.employees.insertOne({_id:7 ,fname:"ddd", lname:'b', 
    age:44}) /// 
    
    
    
  /// when need to disable addiontail properties you
  // must add it to the properties   
    
    
    db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               _id: {},  /// allow any datatype 
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number"}
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )
    
    
    db.employees.insertOne({_id:7 ,fname:"ddd", lname:'b', 
    age:44}) /// 
    
    
      db.employees.insertOne({_id:"iti" ,fname:"ddd", lname:'b', 
    age:44}) /// 
    
      db.employees.insertOne({fname:"ddd", lname:'b', 
    age:44}) /// 
    
    
    
    
    
    
  /// specify _id must be number 
  
  db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               _id: {bsonType: "number"},  /// allow only number
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number"}
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )  

  db.employees.insertOne({_id:"iti" ,fname:"ddd", lname:'b', 
    age:44}) /// error




  db.employees.insertOne({_id:56 ,fname:"ddd", lname:'b', 
    age:44}) /// 


  db.employees.insertOne({fname:"ddd", lname:'b', 
    age:44}) /// 



// restrict age number >> min 20 max 30 
    
     db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               _id: {bsonType: "number"},  /// allow only number
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number", minimum:20 }
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )  

 db.employees.insertOne({_id:57 ,fname:"ddd", lname:'b', 
    age:3}) /// 



    db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               _id: {bsonType: "number"},  /// allow only number
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number", minimum:20,
                  maximum: 30 }
             }
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )  



 db.employees.insertOne({_id:57 ,fname:"ddd", lname:'b', 
    age:44}) /// 



//// add field gender -> male , female 
    
    // 


    db.employees.runCommand("collMod", {
    
    validator : {
       $jsonSchema: {
           bsonType: "object" , // save data in form of object 
           required: ['fname', 'lname'],// define required fields
           additionalProperties: false,
           properties: {
               _id: {bsonType: "number"},  /// allow only number
               fname: {bsonType: "string"},
               lname: {bsonType: "string"},
               age : {bsonType: "number", minimum:20,
                  maximum: 30 },
               gender: {enum: ['male', 'female']}
                  
             }, 
             
           
           }// jsonSchema 
       
       }// validator  
    
    }/// command modify schema
    
    )  


 db.employees.insertOne({_id:58 ,fname:"ddd", lname:'b', 
   gender: 'm'}) /// 





 db.employees.insertOne({_id:58 ,fname:"ddd", lname:'b', 
   gender: 'male'}) /// 
























