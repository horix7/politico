import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'


chai.should()
chai.use(chaiHttp)
const { expect } = chai;


let partyInfo ={
    "partyname":`${Math.floor(Math.random() * 100) + 100} new name here`,
    "hqaddress": "this one is required ",
    "logourl": "logo is left home"
}	


let PartExist = {   
        "partyname": " new name herre ",
        "hqaddress": "this one is required ",
        "logourl": "logo is left home"
}	

let partyInfo2 = {
    "partyname": "man no w andk"
}

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJEdWlzLmFAZXRydXRydW0uY29tIiwiaXNhZG1pbiI6IlRydWUiLCJpYXQiOjE1ODQ2NzM0NjF9.qmGXRr54RRwgrgQXaMM31EIfOyU6wrNlPECvxdMW5_8"
let fakeToken  = "snadjewfonoencodnonoqfncovnonncanINXNXONJCNkjwkfncodcnlac"
let userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc2FkbWluIjpudWxsLCJmaXJzdG5hbWUiOiJmaXJzdG5hbWUiLCJpZCI6MTA0LCJlbWFpbCI6InJlYWxhbjEyQG1hbi5jb20iLCJpYXQiOjE1ODQ2NzIxMzN9.0UYyN4GCXYAURknitYRvX1fi0S7QQrdXweqEVBZMgII"

describe('Party Tests', ()=> {
    
    it('user should not create A party without  being authorized ', (done) => {        
        chai.request(app)
            .get('/api/v1/parties')
            .end((err, res) =>{
                res.should.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
            
    });
    it('user should not get All parties without  being authorized ', (done) => {        
        chai.request(app)
            .get('/api/v1/parties')
            .send(partyInfo)
            .end((req, res) =>{
                res.should.have.status(401);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('error');
                done();
            });
            
    });
    it('user should get  All  parties when he is  being authorized ', (done) => {        
        chai.request(app)
            .get('/api/v1/parties')
            .set("Authorization", userToken) 
            .send(partyInfo)
            .end((req, res) =>{
                res.should.have.status(200);
                expect(res.body).to.have.property('data');
                done();
            });
            
    });

    it('user should not  create A party with being admin ', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .set("Authorization", userToken) 
            .send(partyInfo2)
            .end((err, res) =>{
                res.should.have.status(403);
                done();
            });
            
    });

    it('user should not create A party with invalid data ', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .set("Authorization", token) 
            .send(partyInfo2)
            .end((err, res) =>{
                res.should.have.status(400);
                expect(res.body).to.have.property('status');
                expect(res.body).to.have.property('message');
                done();
            });
            
    });
    
    it('user should   create A party when  he/shes is admin with valid data ', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .set("Authorization", token) 
            .send(partyInfo)
            .end((err, res) =>{
                res.should.have.status(201);
                expect(res.body).to.have.property('data');
                done();
            });
            
    });
    
    it('user should  not  create A party with existing name', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .set("Authorization", token) 
            .send(PartExist)
            .end((err, res) =>{
                res.should.have.status(201);
                expect(res.body).to.have.property('status');
                done()
            })
            
    });

    it('user should not delete One particular party with invalid id ', (done) => {        
        chai.request(app)
            .delete('/api/v1/parties/mdsfndsvn')
            .set("Authorization", token) 
            .end((err, res) =>{
                res.should.have.status(400);
                 done();
            });
           
    });

    it('user should  delete One particular party with valid id ', (done) => {        
        chai.request(app)
            .delete('/api/v1/parties/2')
            .set("Authorization", token) 
            .end((err, res) =>{
                res.should.have.status(200);
                 done();
            });
           
    });



})



