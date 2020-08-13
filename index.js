const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000,()=>console.log('listening at 3000'));
app.use(express.static('public'));

const database = new Datastore('database.db');
database.loadDatabase();
database.insert({state:'ca',status:'2'});
database.insert({state:'or',status:'2'});
database.insert({state:'mn',status:'3'});
database.insert({state:'ma',status:'3'});
database.insert({state:'ny',status:'3'});
database.insert({state:'nj',status:'3'});
database.insert({state:'ct',status:'3'});
database.insert({state:'ok',status:'3'});
database.insert({state:'ks',status:'3'});
database.insert({state:'tx',status:'3'});
database.insert({state:'nc',status:'3'});
database.insert({state:'il',status:'3'});
database.insert({state:'tx',status:'3'});
database.insert({state:'mi',status:'3'});
database.insert({state:'in',status:'3'});
database.insert({state:'fl',status:'3'});
database.insert({state:'az',status:'3'});
database.insert({state:'wi',status:'3'});
database.insert({state:'pa',status:'3'});
database.insert({state:'ga',status:'3'});


app.get('/api',(request,response) => {
    database.find({},(err,data)=> {
      if(err){
        response.end();
        return;
      }
      response.json(data);
    });
});
