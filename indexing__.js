// 

// in mongo we have  index 

db.getCollectionInfos({name: "instructors"})



// create index for data --> 


use inventory

db.product.find()


// get total no of documents 

use inventory

db.product.find().count()

/// check if index exists or not ??


use inventory

db.getCollectionInfos({name: "product"})




// get all documents with brand Washington


use inventory

db.product.find({
    brand_name : 'Washington'
    }) 
    
    
    /// get no of data 


use inventory

db.product.find({
    brand_name : 'Washington'
    }).count()


// get execution info ?/
    
use inventory

db.product.find({
    brand_name : 'Washington'
    }).explain('executionStats')
    
    
    /// to drop index 
    
use inventory
db.product.dropIndex('brand_name_1')
    
    
    
use inventory

db.product.find({
    brand_name : 'Washington'
    }).explain('executionStats')
    
    
    
use inventory
db.product.createIndex({
    brand_name: 1
    
    })
     
    
    
    
    
    
    
    
    
    
    





























