
//// 
show collections


db.students.find()

db.departments.find()

db.subjects.find()






/////////////////////////////////////////////////////////////

// save students data including subjects 

// student study many subjects ..... subjects is studied by many student ? 


// 1- students = 
[

    {name: '', subjects: [id: 1 , id: 10]}, 
   {name: '', subjects: [id: 1 , id: 10]} // size document 
]

// collections of subjects 
[ name: "", max_score: 100 , ]
// 2nd approach. 

// save all data in one collection
[

    {name: '', subjects: [{} , {}}/// data in the same place ---> disadv. update one subjects ?? 
]// update all subject in all documents /// time consuming process 



/// ask me about subjects and the students are studing it 
    
 [
        {_id: 1 , name:"mongo", students : [{}, {}, {} ]} 
        
        
    ]

///  *********************************check this 
        
  /// subjects 
        [ {name:"", id:1 }, {}, {}]


// students : 
        [ {name:"", id:2, }, {}, {}]
    
    // std_sub 
        
        [{sub_id:1 , std: 1 }]


/////////////////////////////////////////////////
        
        /// subjects 
        [ {name:"", id:1, circlum: "", totalhours:'', evaluationCreteria: "" }, {}, {}]


// students : 
        [ {name:"", id:2, subjects: [{_id:1 , name: ''}, {}] }, {}, {}]  
        
        
  ////******************************* get data from different collections 
        
        
      // fname , last , deptname from student collection 
        
        
   db.students.find().forEach((document)=>{
       
       dept_id =  document.department;
       dept_obj = db.departments.findOne({_id:dept_id})
       
print(`${document.firstName}, ${document.lastName}, ${document.department} ${dept_obj}`)
       
       })
        
        
 //// 
   db.students.find().forEach((document)=>{
       
       dept_id =  document.department;
       dept_obj = db.departments.findOne({_id:dept_id})
       if(dept_obj){
       
print(`${document.firstName}, ${document.lastName}, ${document.department} ${dept_obj.name}`)
       }
      })       
       
   //// 
     db.students.find({}, {firstName:1 , lastName:1 , department:1}).forEach((document)=>{
       
       dept_id =  document.department;
       dept_obj = db.departments.findOne({_id:dept_id})
       if(dept_obj){
       
print(`${document.firstName}, ${document.lastName}, ${document.department} ${dept_obj.name}`)
       }
      })       
           
       
      
      
      ////////////////////////////////
      
      ////^^^^^^^^^^^^^ GET DATA from one to many relation 
      // load data in the memory ... in js 
      all_depts = db.departments.find({}, {name:1}).toArray()
     
db.students.find({}, {firstName:1 , lastName:1 , department:1}).forEach((document)=>{
       
dept_id =  document.department;
    // deal with array as a js array .
dept_obj = all_depts.find((elem)=>elem._id==dept_id)
    if(dept_obj){
// print(dept_obj.name)
        
       
print(`${document.firstName}, ${document.lastName}, ${document.department} ${dept_obj.name}`)
    }

      })       
      
   
   
   //// m---> many to many 
   
   /// display student name with subjects names he studies ??
   
   
   
/// mohamed js , css    
   
   
      all_subjects = db.subjects.find({}, {name:1}).toArray()
//       print(all_subjects)
      
      
      db.students.find({subjects:{$type:"array"}}, {firstName:1, subjects: 1})
      .forEach((document)=>{
          std_subjects = document.subjects
          
          std_sub_names = ''
           
          std_subjects.forEach((sub)=> {  // sub is id 
              subname = all_subjects.find((e)=>e._id==sub)
//               print(subname.name)
              
              std_sub_names += ` ${subname.name}`
              })
          
          print(`${document.firstName} ${std_sub_names}`)
          
          
          
          
          })
   
   
   
   
   
   
   
   
   














   
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
           
     
     
     
     
     
     
     
     
     
     
     
     
     
    
   
  
 


 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        




































