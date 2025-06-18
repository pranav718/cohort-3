// we are creating 4 routes
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney  --> isme we are using isHealthy ki you need to ask healhy or unhealhy kidney 
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());   //using this to take input 

app.get('/', function(req,res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    for(let i = 0; i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', function(req,res) {
    const isHealthy = req.body.isHealthy;   //this uses req to take input, everytime we will post, it will increase the number of healthy kidneys

    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!" //not giving msg is fine too as we have to update only
    })

})

app.put('/', function(req,res) {
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})  // this is needed to send or else it would take forever to post
})

app.delete('/', function(req,res) {
    // we should return 411(wrong input) in case if there is no unhealthy kidneys
    if (isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    }else{
        res.sendStatus(411).json({
            msg: "You have no bad kidneys"
        });
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let  atLeastOneUnhealthyKidney = false;
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}

app.listen(3000); 


