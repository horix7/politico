import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'



chai.should()

const { expect } = chai;

chai.use(chaiHttp)

let signUp = {
	"firstname": "firstname",
	"secondname": "second",
	"email": `realman@${Math.floor(Math.random * 1000) + 1000}man.com`,
	"password": "mainpass12",
	"nationalid": 2111323123,
	"address": "home",
	"phone": 1234321,
	"passporturl": "userdbhsadbsc"	
	
}

let signUp2= {
	"firstname": "firstname",
	"secondname": "second",
	"email": `realman@${Math.floor(Math.random * 1000) + 1000}man.com`,
	"password": "mainpass12",
	"nationalid": 2111323123,
	"address": "home",
	"phone": 1234321,
	"passporturl": "userdbhsadbsc"	
	
}

let existemail = {
	"firstname": "firstname",
	"secondname": "second",
	"email": "realman@man.com",
	"password": "mainpass12",
	"nationalid": 2111323123,
	"address": "home",
	"phone": 1234321,
	"passporturl": "userdbhsadbsc"	
	
}

let invalidData = {
	"firstname": "firstname",
	"secondname": "second",
	"email": 12321334,
	"password": "mainpass12",
	"nationalid": 2111323123,
	"address": "home",
	"phone": 1234321,
	"passporturl": "userdbhsadbsc"	
	
}

let userSignin = {
   
	"email": "suscy@seut12sncursus.com",
	"password": "mainpass12"
	
}

let userSignin2 = {
   
	"email": "suscy@seut12sncursus.com",
	"password": ""
	
}
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJEdWlzLmFAZXRydXRydW0uY29tIiwiaXNhZG1pbiI6IlRydWUiLCJpYXQiOjE1ODQ2NzM0NjF9.qmGXRr54RRwgrgQXaMM31EIfOyU6wrNlPECvxdMW5_8"
let fakeToken  = "snadjewfonoencodnonoqfncovnonncanINXNXONJCNkjwkfncodcnlac"
let userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2FkbWluIjpudWxsLCJmaXJzdG5hbWUiOiJmaXJzdG5hbWUiLCJpZCI6MTA0LCJlbWFpbCI6InJlYWxhbjEyQG1hbi5jb20iLCJpYXQiOjE1ODQ2NzIxMzN9.0UYyN4GCXYAURknitYRvX1fi0S7QQrdXweqEVBZMgII"


describe('User Auth Tests', ()=> {
    
    it('user should  sign-up in the system with all required  infromation', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(signUp)
            .end((err, res) =>{
                res.should.have.status(201);
                 done();
            });
           
    });

    it('user should  not sign-up in the system with exisiting email', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(signUp2)
            .end((err, res) =>{
                res.should.have.status(409);
                 done();
            });
           
    });
    
    it('user should  not sign-up in the system with invalid info', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(invalidData)
            .end((err, res) =>{
                res.should.have.status(400);
                 done();
            });
           
    });
    
   
})



describe('User Login' , () => {
    it('user should sign-in in the system with valid inputs ', (done) => {        
        chai.request(app)
        .post('/api/v1/auth/signin')
        .send(userSignin)
        .end((err, res) =>{
                res.should.have.status(403);
                expect(res.body).to.have.property('status');
             done();
            });
           
    });

    it('user should not sign-in in the system without valid email and password', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send(userSignin2)
            .end((err, res) =>{
                res.should.have.status(403);

                 done();
            });
           
    });

    it('user can see one particular user ', (done) => {        
        chai.request(app)
            .get('/api/v1/useraccount/1')
            .set('Authorization', token)
            .end((err, res) =>{
                res.should.have.status(200);

                 done();
            });
           
    });

    it('user admin see all user ', (done) => {        
        chai.request(app)
            .get('/api/v1/allusers')
            .set('Authorization', token)
            .end((err, res) =>{
                res.should.have.status(200);

                 done();
            });
           
    });    

    
   
})
