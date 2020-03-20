import { Client } from 'pg';
import dotenv from 'dotenv'

import 'dotenv/config'

let client = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432,
    database: process.env.DATABASE_TEST
})

client.connect()
.then(() => {
client.query(`
DROP TABLE IF EXISTS "candidates";

CREATE TABLE "candidates" (
  id SERIAL PRIMARY KEY,
  firstname varchar(255) default NULL,
  secondname varchar(255) default NULL,
  applyid integer NULL,
  candidateid integer NULL,
  candidateinfo TEXT default NULL,
  candidatebackground TEXT default NULL,
  partyid integer NULL,
  profileimage TEXT default NULL
);

DROP TABLE IF EXISTS "users";

CREATE TABLE "users" (
  id SERIAL PRIMARY KEY,
  firstname varchar(255) default NULL,
  secondname varchar(255) default NULL,
  email varchar(255) default NULL,
  phone varchar(100) default NULL,
  nationalid varchar(11) default NULL,
  password TEXT default NULL,
  userprofile TEXT default NULL,
  address TEXT default NULL,
  userid integer NULL,
  usertype TEXT default NULL,
  isadmin varchar(255) default NULL
);


DROP TABLE IF EXISTS "votes";

CREATE TABLE "votes" (
  id SERIAL PRIMARY KEY,
  votefor integer NULL,
  office integer NULL,
  createdon TEXT default NULL,
  votecount TEXT default NULL,
  party integer NULL,
  voter integer NULL
);

DROP TABLE IF EXISTS "parties";

CREATE TABLE "parties" (
  id SERIAL PRIMARY KEY,
  partyname TEXT default NULL,
  partinfo TEXT default NULL,
  foundedon TEXT default NULL,
  goveremntid varchar(11) default NULL,
  partyaddress TEXT default NULL,
  candidateid integer NULL,
  partyleader varchar(255) default NULL,
  partymortal TEXT default NULL,
  leaderemail varchar(255) default NULL,
  logourl TEXT default NULL
);



DROP TABLE IF EXISTS "petition";

CREATE TABLE "petition" (
  id SERIAL PRIMARY KEY,
  createby integer NULL,
  office integer NULL,
  supports integer NULL,
  evidence TEXT default NULL,
  information TEXT default NULL
);
`)})
.then(() => {
    console.log('hello')
}).catch(err => console.log('nooo', err))
