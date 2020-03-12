import {Client} from 'pg'
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'

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

let officeInfo = {
        "officename": "nandsa"
}

let officeInfo2 = {
    "officename": `new name ${Math.floor(Math.random() * 100) + 100}`,
    'hqaddress': 'home'
}

describe('office Tests', ()=> {
    
    it('user should not create An Office with existing name ', (done) => {        
        chai.request(app)
            .post('/api/v1/offices')
            .send(officeInfo)
            .end((err, res) =>{
                res.should.have.status(403);
            });
            done();
    });
    it('user should  create An office with new name ', (done) => {        
        chai.request(app)
            .post('/api/v1/offices')
            .send(officeInfo2)
            .end((err, res) =>{
                res.should.have.status(403);
            });
            done();
    });
    
   

})



