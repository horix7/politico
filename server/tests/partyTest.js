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

let partyInfo = {
        "partyname": " new name herre "
}

let partyInfo2 = {
    "partyname": `new name ${Math.floor(Math.random() * 100) + 100}`,
    'hqaddress': 'home'
}

describe('Party Tests', ()=> {
    
    it('user should not create A party with existing name ', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .send(partyInfo)
            .end((err, res) =>{
                res.should.have.status(401);
            });
            done();
    });
    it('user should  create A party with new name ', (done) => {        
        chai.request(app)
            .post('/api/v1/parties')
            .send(partyInfo2)
            .end((err, res) =>{
                res.should.have.status(401);
            });
            done();
    });
    
   

})



