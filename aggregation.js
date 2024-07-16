/// aggregate


db.instructors.aggregate()

db.instructors.aggregate([])



/// stages 

db.instructors.aggregate([ {} ,/// object --> represent stage
    {}, 
    {}
])




//// types of stages 
    
    
    db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
    
    
    ])
    
    /////// pass this output to another stage // sorting data 
        
        db.instructors.insertOne({
    "_id" : 500.0,
    "firstName" : "badr",
    "lastName" : "mohamed",
    "age" : 22.0,
    "salary" : 5550.0,
    "address" : {
        "city" : "cairo",
        "street" : 10.0,
        "building" : 8.0
    },
    "courses" : [ 
        "javascript", 
        "mvc", 
        "signalR", 
        "asp.net"
    ],
    "email" : "n@gmail.com"
}
)
    
   db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}
            
         }, /// stage two
        
    
    
    ])   
    
         
         //// project 
         
    db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}
            
         }, /// stage two
          {
              
              $project: {firstName:1 , lastName:1 , age:1, _id:0}
              
              
        }, // stage 3
          

    ])       
         
        /// modify data representation ? 
        
       db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}}, /// stage two
          {
              
        $project: {
    
            fullname: {$concat: ["firstName" , " ", "lastName"]}
            }
  
        }, // stage 3

    ])   
        
        ///////
//         firstName= "noha"
//         lastName="Shehab"
        
        
     db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}}, /// stage two
          {
              
        $project: {
    
            fullname: {$concat: ["$firstName" , " ", "$lastName"]}
            }
  
        }, // stage 3

    ])   
        
  //// display fullname and mul_sal * 2
  
    db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}}, /// stage two
          {
              
        $project: {
    
            fullname: {$concat: ["$firstName" , " ", "$lastName"]},
            mulsal : {$multiply : ["$salary", 2]},
            salary: 1
            }
  
        }, // stage 3

    ])        
        
        
  //// stage --> save output of the aggregation to another collection       
        
     db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
            $sort: {firstName:1 , lastName:-1}}, /// stage two
          {
              
        $project: {
    
            fullname: {$concat: ["$firstName" , " ", "$lastName"]},
            mulsal : {$multiply : ["$salary", 2]},
            salary: 1, 
            _id:0  // don't do this ???
            }
  
        }, // stage 3
        
        {       
            $out: "inst_info"
            
          }, // stage 4

    ])           
        
          
   ///// group 
          
           db.instructors.aggregate([
        {
            $match : {age: {$gt:21}}
        }, // stage one ? 
        
        {
           $group : {
                _id: "$age"
               }  /// _id of grouping 
            
         }
        
    ])           
       
          
         
         db.instructors.aggregate([
        {
            $match: {age: {$exists:true}}
            }
        ,
        {
           $group : {
                _id: "$age"
               }  /// _id of grouping 
            
         }
        
    ])           
         
         
         /// display no_of_instructor in each age 
         
         
         
              db.instructors.aggregate([
        {
            $match: {age: {$exists:true}}
            }
        ,
        {
           $group : {
                _id: "$age"  , /// _id of grouping 
               
                total_no: {$sum: 1} // count no of instructoe
               } 
            
         }
        
    ])           
         
         
         
  /// get total sum of salaries for instructor with thee same age 
         
  
        db.instructors.aggregate([
        {
            $match: {age: {$exists:true}}
            }
        ,
        {
           $group : {
                _id: "$age"  , /// _id of grouping 
               
                total_no: {$sum: 1}, // count no of instructoe
                
               total_salaries: {$sum: "$salary"},
               
               min_salary :{$min: "$salary"},
               max_salary: {$max: "$salary"},
               avg_salary: {$avg: "$salary"}
                
                } 
            
         }
        
    ])           
                
         
         
    /// --.> get instructor with the same age in the same city      
         
         
             db.instructors.aggregate([
        {
            $match: {age: {$exists:true}}
            }
        ,
        {
           $group : {
                _id: {age: "$age", city: "$address.city"}  , /// _id of grouping 
               
                total_no: {$sum: 1}, // count no of instructoe
                
               total_salaries: {$sum: "$salary"},
               avg_salary: {$avg: "$salary"}
                
                } 
            
         }
        
         
    ])  
         
         
         
    db.instructors.aggregate([
        {
            $match: {age: {$exists:true}}
            }
        ,
        {
           $group : {
                _id: {age: "$age", city: "$address.city"}  , /// _id of grouping 
               
                total_no: {$sum: 1}, // count no of instructoe
               total_salaries: {$sum: "$salary"},
               avg_salary: {$avg: "$salary"}
                
                }    
         }, 
         
         {
             $project : {
                 city : "$_id.city", 
                 age: "$_id.age", 
                 total_no: 1, 
                 total_salaries: 1,
                 _id:0
                 }
             
             }
        
    ])   
         
         
         
         
         
         
         /////////////////----> get data from different collection 
             
  
  // get student and dept_name
  
  
  db.students.aggregate([
             {
                 $match : {department: {$exists:true }}
                 }, 
                 {
                     
             $lookup : {
             
             from : "departments", // collection name 
             localField: "department" , // name of field in students collectiosn
             foreignField: "_id", 
             as: "dept_info"
             }    
         
                     
                     
                 }
                 
                  
             ])           
             // this case return dept as array 
             
             
             
             
             
             
             
 /// get department name 
     
       /// get dept as object from array 
  db.students.aggregate([
             {
                 $match : {department: {$exists:true }}
                 }, 
                 {
                     
             $lookup : {
                 from : "departments", // collection name 
                 localField: "department" , // name of field in students collectiosn
                 foreignField: "_id", 
                 as: "dept_info"
             } }, 
             
             {
                 
              $project: {
                  
                  firstName:1 ,
                  lastName: 1, 
                  dept_name: {$arrayElemAt: ["$dept_info", 0]}
                  
                  }    
                 }

                  
             ])               
             
             
   /// to get name 
  db.students.aggregate([
             {
                 $match : {department: {$exists:true }}
                 }, 
                 {
                     
             $lookup : {
                 from : "departments", // collection name 
                 localField: "department" , // name of field in students collectiosn
                 foreignField: "_id", 
                 as: "dept_info"  
             } },  // lookup retrun with array 
             
             {
                 
            $project: {
                  
                  firstName:1 ,
                  lastName: 1, 
                  dept_name: {$arrayElemAt: ["$dept_info", 0]}
                  
                  }    
                 }, 
                 {$project: {firstName:1 , dept_name: "$dept_name.name"}}

                  
             ])                              
                
             
             
             
             
             
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
              
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
    
         
         
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






