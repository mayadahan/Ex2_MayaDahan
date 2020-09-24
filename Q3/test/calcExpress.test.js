const parallel = require('run-parallel');
const fetch = require('node-fetch');

parallel([
    //user 1
    async function(){
        let res = await fetch('http://localhost:5000/start', {method: 'GET'});
        let id1 = await res.text();
        console.log("USER1 Creating new session: ", res.ok ? "OK" : "Failure");

        res = await fetch(`http://localhost:5000/calc/maya/add/10`, {method: 'POST'});
        res.text().then(function(text) {
            console.log("USER1 unknown ID (404 status): ", (res.status == 404 && text === 'Unknown ID: maya') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id1}/add/5`, {method: 'POST'});
        res.text().then(function(text) {
            console.log("USER1 Addition: ", (res.ok && text === '5') ? "OK" : "Failure");
        });       

        res = await fetch(`http://localhost:5000/calc/${id1}/sub/10`,{method: 'POST'});
        res.text().then(function(text) {
            console.log("USER1 Subtraction: ", (res.ok && text === '-5') ? "OK" : "Failure");
        });  
 
        res = await fetch(`http://localhost:5000/calc/${id1}/multiply/-2`, {method: 'PUT'});
        res.text().then(function(text) {
            console.log("USER1 Multiplication: ", (res.ok && text === '10') ? "OK" : "Failure");
        });  

        res = await fetch(`http://localhost:5000/calc/${id1}/divide/2`, {method:'PUT'});
        res.text().then(function(text) {
            console.log("USER1 Devision: ", (res.ok && text === '5') ? "OK" : "Failure");
        }); 

        res = await fetch(`http://localhost:5000/calc/${id1}/M`, {method:'GET'});
        res.text().then(function(text) {
            console.log("USER1 Returning value: ", (res.ok && text === '5') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id1}/reset`, {method:'POST'});
        res.text().then(function(text) {
            console.log("USER1 Reset: ", (res.ok && text === '0') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id1}/hello/10`, {method: 'POST'});
        res.text().then(function(text) {
            console.log("USER1 Invalid operator (404 status): ", (res.status == 404 && text === 'Invalid operator: hello') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id1}/del`, {method: 'DELETE'});
        res.text().then(function(text) {
            console.log("USER1 Deleting the session: ", (res.ok && text === 'Session was deleted successfully!') ? "OK" : "Failure");
        });

    },

    //user 2
    async function(){
        let res = await fetch('http://localhost:5000/start', {method: 'GET'});
        let id2 = await res.text();
        console.log("USER2 Creating new session: ", res.ok ? "OK" : "Failure");

        res = await fetch(`http://localhost:5000/calc/maya/multiply/10`, {method: 'PUT'});
        res.text().then(function(text) {
            console.log("USER2 unknown ID (404 status): ", (res.status == 404 && text === 'Unknown ID: maya') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id2}/add/5`, {method: 'POST'});
        res.text().then(function(text) {
            console.log("USER2 Addition: ", (res.ok && text === '5') ? "OK" : "Failure");
        });       

        res = await fetch(`http://localhost:5000/calc/${id2}/sub/10`,{method: 'POST'});
        res.text().then(function(text) {
            console.log("USER2 Subtraction: ", (res.ok && text === '-5') ? "OK" : "Failure");
        });  
 
        res = await fetch(`http://localhost:5000/calc/${id2}/multiply/-2`, {method: 'PUT'});
        res.text().then(function(text) {
            console.log("USER2 Multiplication: ", (res.ok && text === '10') ? "OK" : "Failure");
        });  

        res = await fetch(`http://localhost:5000/calc/${id2}/divide/2`, {method:'PUT'});
        res.text().then(function(text) {
            console.log("USER2 Devision: ", (res.ok && text === '5') ? "OK" : "Failure");
        }); 

        res = await fetch(`http://localhost:5000/calc/${id2}/M`, {method:'GET'});
        res.text().then(function(text) {
            console.log("USER2 Returning value: ", (res.ok && text === '5') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id2}/reset`, {method:'POST'});
        res.text().then(function(text) {
            console.log("USER2 Reset: ", (res.ok && text === '0') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id2}/hello/10`, {method: 'POST'});
        res.text().then(function(text) {
            console.log("USER2 Invalid operator (404 status): ", (res.status == 404 && text === 'Invalid operator: hello') ? "OK" : "Failure");
        });

        res = await fetch(`http://localhost:5000/calc/${id2}/del`, {method: 'DELETE'});
        res.text().then(function(text) {
            console.log("USER2 Deleting the session: ", (res.ok && text === 'Session was deleted successfully!') ? "OK" : "Failure");
        });
    }]);