const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 
const _  = require('lodash'); 

app.use(bodyParser.json());

app.get('/:time', function(req, res){
    res.send(createResponse(req.params.time)); 
}) 

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

function createResponse(str)
{
    return { "unix" : Date.parse(str), "netural" : "???"} ;
}

/*
var taskList = [];
app.get('/list', function(req, res){  
    res.send(taskList); 
}) 
app.post('/task', function(req, res){  
    taskList.push(req.body.task);   
    res.send(taskList); 
})

app.put('/task/:task_index', function(req, res){  
    var taskIndex = req.params.task_index;  
    taskList[taskIndex] = req.body.task  
    res.send(taskList);
}); 

app.delete('/task/:task_index', function(req, res){  
    var taskIndex = req.params.task_index;  
    taskList.splice(taskIndex, 1)  
    res.send(taskList); 
}) 
*/