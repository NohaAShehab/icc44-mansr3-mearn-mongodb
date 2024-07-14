// update 

db.instructors.find()


db.instructors.findOne()


/// update documents 

db.instructors.updateMany()

db.instructors.updateOne()


/// update 

/// ************************
// ******** which documents you need to update 
/// **** update which fields 

/// update instructors set firstname= 'Noha' 
// where id  = 6;


/// update existing properties 
db.instructors.updateOne(
{
    _id:6
    
 }, /// condition   || which documents you need to update ?

    // in condition object you can use all the condition
    // operators you used in the find 
    
    
{
    $set : {firstName: "Noha", age: 32}
    
    } /// operation of update  update which fields  inside documement 

)



// update  document with non-exisitng property ?
    
    /// update instructors set email = 'ddd' where id = 5
    
    
 db.instructors.updateOne(
    {
        _id:6
        
      }, /// condition


    {
        $set : {email: 'n@gmail.com'}
        
     } // operation


)


/// add email property to all instructors 
     
     
     
      db.instructors.updateMany(
    {
     
        
      }, /// condition


    {
        $set : {email: 'n@gmail.com'}
        
     } // operation


)






    
      db.instructors.updateOne(
    {
     
        _id: 1000
      }, /// condition


    {
        $set : {name: 'Ahmed'}
        
     } // operation


)


// in some cases when you update documents 
     
 // if document doesn't exist ?? insert 
     
     
       
  db.instructors.updateOne(
    {
     
        _id: 1000
      }, /// condition


    {
        $set : {email: 'n@gmail.com'}
        
     } , // operation

        {
            upsert: true
        } /// update options 
)
  
        
        
        
        
        
        
    db.instructors.updateOne(
    {
     
        _id: 1001
      }, /// condition


    {
        $set : {email: 'n@gmail.com'}
        
     } , // operation

        {
            upsert: true
        } /// update options 
)
       
        
 //////////////////////////////////////////////////////////
    
 //// ***** rename field    
        
        db.instructors.updateOne(
        
        {}, 
        
        {
            $rename: {email : "in_email"}
         }

        )
    
         
         /// *** remove field from document  {fieldname: value}
         
         
      db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $unset: {in_email : "anyvalue"}
         }

        )
      
         
         
  //// ******************** update embedded objects 
         
        db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $set: {'address.street' : "100"}
         }

        )
         
         
   ///////      
         
         
         db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $set: {'address.state' : "abc"}
         }

        )
         
         
         ////// numeric values 
         
         /// increment 
         
         
      db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $inc : {salary: 1000}
         }

        )
         
         
db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $inc : {salary: -2000}
         }

        )
         
          /// salary  = 1000 , netsal == 800
         
      
         
// find 
         
        db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $mul : {salary: 3}
         }

        )
         
    /////////////////////////////////////////////
      db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $max : {salary: 10000} 
            /// check id docu.salary < 10000
            /// then update to 10000
         }

        )
              
         
         
         
       db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $min : {salary: 7000}
          
         }

        )
         
         //////////////////////////
         
      db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $set : {salary: 2000}
          
         }

        )    
         
         
         
         
         
          db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $min : {salary: 4000} // salary must less than
            /// or equal 4000
          
         }

        )   
         
         
         
        db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $min : {salary: 1000} // salary must less than
            /// or equal 1000
          
         }

        )   
         
         
         
         db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $max : {salary: 7000} // salary must greater than
            /// or equal 7000
          
         }

        )   
         
         //////////////////////////////////////
         
         
         
         
         
    //// dealing with array values
    // update value at array at know index ---> 
    
      db.instructors.updateOne(
        
        { _id: 6}, 
        
        {
            $set : {"courses.0": "javascript"} 
         }

        )      
         
         
         
   /// update js to javascript in all documents 
   
         db.instructors.updateMany(
        
        { }, 
        
        {
            $set : {"courses.0": "javascript"} 
         }

        )      
         
         
         
         //// unknow posistion ??? 
         db.instructors.updateMany(
        
        { 
            courses: "js"
            }, 
        
        {
            $set : {"courses.$": "javascript"} 
         }

        )    
         
         
         
         
     /////////////////////////////////////////////////////////////////////////////
     
     
     /// add element to the array 
         
         
         db.instructors.updateOne({
             
             _id:6}, 
             
            {
                $set : {"courses": "nodejs"}
                
                
                } 
             
             )
         
               
          db.instructors.updateOne({
             
             _id:6}, 
             
            {
                $set : {"courses":[ 
                        "javascript", 
                        "mvc", 
                        "signalR", 
                        "expressjs"] }
                
    } 
             
             )
                   
               
               
               
    // push element to Array


       db.instructors.updateOne({
             
             _id:6}, 
             
            {
                $push : {"courses":'nodejs'}
                
            } 
             
             )
                     
               
         db.instructors.updateOne({
             
             _id:6}, 
             
            {
                $push : {"courses":[
                    'graph',
                    'nest',
                    'next'
                    
                    ]}
            } 
             
             )
                     
               
    /// push each element as new element in the array ?
            
            
            
           db.instructors.updateOne({
             
             _id:6}, 
             
            {
                $push : {"courses": {$each: [
                    'graph',
                    'nest',
                    'next']}}
            } 
             
             )   
            
            
            
            
            
            //// 
            
            
           db.instructors.updateOne({
               _id:6
               
               },{
                   $push: {courses: "updated"}
                   
                   }) 
            
            
            /// add value to array only if doesn't exist 
            
            
              db.instructors.updateOne({
               _id:6
               
               },{
                   $addToSet: {courses: "updated"}
                   
                   }) 
                   
    /// pop element from array 
    
    
    
      db.instructors.updateOne({
               _id:6
               
               },{
                   $pop: {
                       "courses": 1
                       
                      }
                   
                   })               
                   /// remove nest
                   
                db.instructors.updateOne({
               _id:6
               
               },{
                   $pop: {
                       "courses": 3
                       
                      }
                   
                   })               
          /// pop -->  1 , -1                  
                   
     //// I need to remove elements from list ??
     
     
           db.instructors.updateOne({
               _id:6
               
               },{
                   $pull: {
                       "courses": "nest"
                       
                      }
                   
                   })               
                            
              
              
              
              
              
              
              
              
              
              
              
              
  /// 
                   
                   
       
       db.instructors.deleteOne({_id:6})   

db.instructors.deleteOne({_id:1000})       



db.instructors.deleteMany()
              





























              
              
              
              
              
              
         
    






    
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
              
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
               
               
               
               
               
               
               
               
               
               
               
              
              
                
       
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
               
         
       
       
       
       
       
       
       
       
       
       
       
       
       
       
     
   
 



 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
 /// aggregation 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
     /////////////////////////// Array operators 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
   
         
    
    
    
    
    
    
    
    
    
    
    
    
    
    







    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
























     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     














