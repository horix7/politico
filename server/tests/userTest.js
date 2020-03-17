import {Client} from 'pg'
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'
import auth from '../middleware/authentication'
import isadmin from '../middleware/isAdmin'
import validator from  '../middleware/validation'

let client = new Client({
    user: "postgres",
    password: "paul",
    host: "localhost",
    port: 5432,
    database: "politico"
})

client.connect()
chai.should()
chai.use(chaiHttp)

let signUp = {
	"firstname": "firstname",
	"secondname": "second",
	"email": "suscy@seut12sncursus.com",
	"password": "mainpass12",
	"nationalid": 2111323123,
	"address": "home",
	"phonenumber": 1234321,
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


describe('User Auth Tests', ()=> {
    
    it('user should sign-up in the system', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signup')
            .send(signUp)
            .end((err, res) =>{
                res.should.have.status(400);
            });
            done();
    });
    
    it('user should sign-in in the system with valid inputs ', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send(userSignin2)
            .end((err, res) =>{
                res.should.have.status(200);
            });
            done();
    });

    it('user should not sign-in in the system without valid email and password', (done) => {        
        chai.request(app)
            .post('/api/v1/auth/signin')
            .send(userSignin2)
            .end((err, res) =>{
                res.should.have.status(403);
            });
            done();
    });

})



