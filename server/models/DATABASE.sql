-- DROP TABLE IF EXISTS "USERS";

CREATE TABLE "USERS" (
  id SERIAL PRIMARY KEY,
  firstName varchar(255) default NULL,
  secondName varchar(255) default NULL,
  email varchar(255) default NULL,
  phone integer NULL,
  nationalId integer NULL,
  livesAt varchar(50) default NULL,
  isAdmin varchar(255) default NULL,
  userType TEXT default NULL,
  userId varchar(36) NOT NULL,
  password varchar(255) default NULL,
  userProfile varchar(255) default NULL
);



CREATE TABLE "PARTIES" (
  id SERIAL PRIMARY KEY,
  partyName varchar(255) default NULL,
  partInfo varchar(255) default NULL,
  foundedOn varchar(255) default NULL,
  goveremntId integer NULL,
  partyAddress varchar(50) default NULL,
  candidateId varchar(255) default NULL,
  partyLeader TEXT default NULL,
  partyMortal varchar(36) NOT NULL,
  leaderEmail varchar(255) default NULL,
  logoUrl varchar(1000) default NULL
);


CREATE TABLE "OFFICES" (
  id SERIAL PRIMARY KEY,
  officeName varchar(255) default NULL,
  officeInfo varchar(255) default NULL,
  officeType varchar(255) default NULL,
  goveremntId integer NULL,
  officeAdress varchar(50) default NULL,
  officeLeader varchar(255) default NULL,
  officeStatus TEXT default NULL,
  leaderEmail varchar(255) default NULL,
  applyId varchar(255) default NULL,
  logoUrl varchar(1000) default NULL

);

CREATE TABLE "CANDIDATES" (
  id SERIAL PRIMARY KEY,
  firstName varchar(255) default NULL,
  secondName varchar(255) default NULL,
  applyId varchar(255) default NULL,
  candidateId integer NULL,
  candidateInfo varchar(255) default NULL,
  candidateBackground TEXT default NULL,
  profileImage varchar(1000) default NULL

);



CREATE TABLE "VOTES" (
  id SERIAL PRIMARY KEY,
  voteFor varchar(255) default NULL,
  office varchar(255) default NULL,
  nationalId integer NULL,
  voteCount varchar(255) default NULL,
  voteCandidates TEXT default NULL,
  voter varchar(255) default NULL
);

CREATE TABLE "PETITION" (
  id SERIAL PRIMARY KEY,
  createBy varchar(255) default NULL,
  office varchar(255) default NULL,
  supports integer NULL,
  evidence varchar(1000) default NULL
  text TEXT default NULL

);




