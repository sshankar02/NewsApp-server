const supertest = require('supertest');
const {APP_PORT, APP_KEY} = require('../serverConfig');
const server = require('../server')

describe("app", ()=>{

    // Basic test and initial test setup for api
    it("should start at port " + APP_PORT, ()=> 
        supertest(server).get('/').expect(200)
    )

    // testing endpoints
    it("should load news from the news api", async ()=> 
        await supertest(server).get('/')
                .expect(200)
                .then( response =>{
                    const articles = response.body.data.articles;
                    expect(articles.length).not.toBe(0);
                })
    )

    it("should return 404 when identified api endpoint was used", ()=>
        supertest(server).get('/test').expect(404)
    )

    // testing keyword based filter of news.
})