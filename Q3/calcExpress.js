let sessions = {};
let len = 0;

function run(){
const express = require('express');
const app = express();
const uniqid = require('uniqid');

const PORT = process.env.port || 5000;

//Starts a new session and returns a unique string
app.get('/start', function(req, res){
    try{
        let id = uniqid();
        sessions[id] = 0;
        len += 1;
        res.status(200).send(id);
        return;
    } catch(error){
        res.status(500).send(error);
        return;
    }
});
//adds or subtracts :num to M and returns the new M
app.post('/calc/:uniqustring/:operator/:num', function(req, res){
    try{
        let id = req.params.uniqustring;
        let operator = req.params.operator;
        let num = parseInt(req.params.num);
        if(sessions.hasOwnProperty(id)){
            if(operator === "add")
                sessions[id] += Number(num);
            else 
                if(operator === "sub")    
                    sessions[id] -= Number(num);  
                else {
                    res.status(404).send(`Invalid operator: ${operator}`);
                    return;
                }
            res.status(200).send(sessions[id].toString());
            return;
        
        } else{
            res.status(404).send(`Unknown ID: ${id}`);
            return;
        }
    } catch (error){
        res.status(500).send(error);
        return;
    }
});

//multiply or divide :num and M and returns the new M
app.put('/calc/:uniqustring/:operator/:num', function(req, res){
    try{
        let id = req.params.uniqustring;
        let operator = req.params.operator;
        let num = parseInt(req.params.num);
        if(sessions.hasOwnProperty(id)){
            
            if(operator === "multiply")
            sessions[id] *= Number(num);
        else 
            if(operator === "divide")    
                sessions[id] /= Number(num);  
            else {
                res.status(404).send(`Invalid operator: ${operator}`);
                return;
            }
        res.status(200).send(sessions[id].toString());
        return;
        
        } else{
            res.status(404).send(`Unknown ID: ${id}`);
            return;

        }
    } catch(error){
        res.status(500).send(error);
    }
});

//returns M
app.get('/calc/:uniqustring/M', function(req, res){
    try{
        let id = req.params.uniqustring;
        if(sessions.hasOwnProperty(id)){
            res.status(200).send(sessions[id].toString());
            return;
        } else{
            res.status(404).send(`Unknown ID: ${id}`);
            return;
        }
    } catch(error){
        res.status(500).send(error);
        return;
    }
});

//Sets M=0 and returns 0
app.post('/calc/:uniqustring/reset', function(req, res){
    try{
        let id = req.params.uniqustring;
        if(sessions.hasOwnProperty(id)){
            sessions[id] = 0;
            res.status(200).send(sessions[id].toString());
            return;
        } else{
            res.status(404).send(`Unknown ID: ${id}`);
            return;
        }
    } catch(error){
        res.status(500).send(error);
        return;
    }
});

//Delete the session
app.delete('/calc/:uniqustring/del', function(req, res){
    try{
        let id = req.params.uniqustring;
        if(sessions.hasOwnProperty(id)){
            delete sessions[id];
            len -= 1;
            res.status(200).send('Session was deleted successfully!');
            return;
        } else{
            res.status(404).send(`Unknown ID: ${id}`);
            return;
        }
    } catch(error){
        res.status(500).send(error);
        return;
    }
});

app.listen(PORT);
console.log('server running', PORT)
}

function writeLog() {
    const fs = require('fs');
    fs.appendFileSync('./log.txt', `${len}\n`);
}
exports.run = run;
exports.writeLog = writeLog;
