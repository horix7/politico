import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'

chai.should()
chai.use(chaiHttp)


const { expect } = chai;

let officeInfo2 = {
    "officename": `new name `,
	"officeinfo": "office info trial",
	"hqaddress": "this is the address",
    "logourl": "logo Url now",
    "type": "local government"	
}

let updateInfo = {
	"officename": "tr1al name ",
	"officeinfo": "office info trial",
	"logourl": "logo Url now",
	"type": "local goverment"
}
let officeInfo = {
    "officename": 123221
}

let aVote = {
	"candidate": 2,
	"office": 2
	
}

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJEdWlzLmFAZXRydXRydW0uY29tIiwiaXNhZG1pbiI6IlRydWUiLCJpYXQiOjE1ODQ2NzM0NjF9.qmGXRr54RRwgrgQXaMM31EIfOyU6wrNlPECvxdMW5_8"
let fakeToken  = "snadjewfonoencodnonoqfncovnonncanINXNXONJCNkjwkfncodcnlac"
let userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2FkbWluIjpudWxsLCJmaXJzdG5hbWUiOiJmaXJzdG5hbWUiLCJpZCI6MTA0LCJlbWFpbCI6InJlYWxhbjEyQG1hbi5jb20iLCJpYXQiOjE1ODQ2NzIxMzN9.0UYyN4GCXYAURknitYRvX1fi0S7QQrdXweqEVBZMgII"


describe('office Tests', ()=> {
    
    it('user should not view all  Offices without authorization ', (done) => {        
        chai.request(app)
            .get('/api/v1/offices')
            .end((err, res) =>{
                res.should.have.status(401);
                 done();
            });
           
    });
    it('user should  viel all  offices  when authorized', (done) => {        
        chai.request(app)
            .get('/api/v1/offices')
            .end((err, res) =>{
                res.should.have.status(401);
                 done();
            });
           
    });
    
    it('user should not create an offices  when he/she is not admin ', (done) => {        
        chai.request(app)
            .post('/api/v1/offices')
            .set("Authorization", userToken) 
            .send(officeInfo2)
            .end((err, res) =>{
                res.should.have.status(403);
                 done();
            });
           
    });

    it('user should not create an offices with invalid information ', (done) => {        
        chai.request(app)
            .post('/api/v1/offices')
            .set("Authorization", token) 
            .send(officeInfo)
            .end((err, res) =>{
                res.should.have.status(400);
                 done();
            });
           
    });

    it('user should  create an offices with valid information ', (done) => {        
        chai.request(app)
            .post('/api/v1/offices')
            .set("Authorization", token) 
            .send(officeInfo2)
            .end((err, res) =>{
                res.should.have.status(409);
                done();
            });
           
    });
    
    it('user should  delete One particular office', (done) => {        
        chai.request(app)
            .delete('/api/v1/offices/23')
            .set("Authorization", token) 
            .end((err, res) =>{
                res.should.have.status(403);
                 done();
            });
           
    });

    it('user should not delete One particular office with invalid id ', (done) => {        
        chai.request(app)
            .delete('/api/v1/offices/mdsfndsvn')
            .set("Authorization", token) 
            .end((err, res) =>{
                res.should.have.status(400);
                 done();
            });
           
    });

    it('user should   vote a candidate ', (done) => {        
        chai.request(app)
            .post('/api/v1/votes')
            .set("Authorization", userToken) 
            .send(aVote)
            .end((err, res) =>{
                res.should.have.status(200);
                done();
            });
    });

    it('can not view result unless they are made ', (done) => {        
        chai.request(app)
            .get('/api/v1/office/1/result')
            .set("Authorization", userToken) 
            .end((err, res) =>{
                res.should.have.status(200);
                done();
            });
    });

})


