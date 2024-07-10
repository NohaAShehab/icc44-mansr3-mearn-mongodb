
/***
 * 
 * 
 *  
 * 
 * 
 * 
 */

customer = {
    id: 100,
    name: "Ahmed", 
    balance : 1000000
}
 
product = {
    id: 'ip15_1',
    brand: 'apple',
    prd_name: 'iphone15'

}


// option one 

order = {
    prd_id:  'ip15_1',
    customer_id: 100, 
    date : 'today'
}

order2 = {
    prd_id:  'jkhsdjkf',
    customer_id: 100, 
    date : 'today'
}


// option two


order = {
    prd:  {
        id: 'ip15_1',
        brand: 'apple',
        prd_name: 'iphone15'
    
    },
    customer_id: {
        id: 100,
        name: "Ahmed", 
        balance : 1000000
    }, 
      date : 'today'
}

order2 = {
    prd:  {
        id: 'ip15_1',
        brand: 'apple',
        prd_name: 'iphone15'
    
    },
    customer_id: 100,
      date : 'today'
}





// once you connect to mongodb for the first time -->
/// you will redirected to default db test 
// empty database 

// show available databases in mongo 


// to list all databases in server 
// show databases; ---> (local , config , admin )


// test database will be created unless you add collections 
//and documents to it





// create new database 
// use mearn44

/// create myfirst collection 
db.createCollection('iti');

db.createCollection('students');











