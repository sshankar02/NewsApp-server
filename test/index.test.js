const supertest = require('supertest');
const {APP_PORT, APP_KEY} = require('../serverConfig');
const app = require('../app/index')

describe("app", ()=>{

    // Basic test and initial test setup for api
    it("should start at port " + APP_PORT, ()=>{
        supertest(app({APP_PORT,APP_KEY})).get('/').expect(200);
    })

    // testing endpoints
    it("should load news from the news api", ()=>{
        supertest(app({APP_PORT,APP_KEY})).get('/')
            .expect(200)
            .then( response =>{
                const articles = response.body.articles;
                expect(articles.length).not.toBe(0);
            })
    })

    it("should return 404 when identified api endpoint was used", ()=>{
        supertest(app({APP_PORT,APP_KEY})).get('/test').expect(404)
    })

    // testing keyword based filter of news.
})