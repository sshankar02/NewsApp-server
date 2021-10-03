const express = require('express');
const NewsAPI = require('newsapi');

const app = (APP_KEY) =>{
    server = express();
    const newsapi = new NewsAPI(APP_KEY);

    server.use((req, res, next) =>{
        res.header('Access-Control-Allow-Origin', 'http://localhost:3011');
        res.header('Access-Control-Allow-Methods', 'GET');

        next();
    })

    server.get(['/', '/query'], (req, res)=>{
        newsapi.v2.topHeadlines({
            language: 'en',
            country: 'gb'
        })
        .catch(err=>{
            console.log('error occurred in news api. Error description : ' + err)
        })
        .then(response => {
            res.status(200).send({statusMessage:"success", data:response});
        });
    })

    server.get('/query/:q', (req, res)=>{
        const filterKeyword = req.params['q'];
        newsapi.v2.everything({
            q: filterKeyword,
            language: 'en'
        })
        .catch(err=>{
            console.log('error occurred in news api. Error description : ' + err)
        })
        .then(response => {
            res.status(200).send({statusMessage:"success", data:response});
        })
    })

    server.get('*', (req, res)=>{
        res.status(404).send(`<h1>404! Route not found</h1>`)
    })

    return server;
}

module.exports = app