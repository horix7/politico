--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: CANDIDATES; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CANDIDATES" (
    id integer NOT NULL,
    firstname character varying(255) DEFAULT NULL::character varying,
    secondname character varying(255) DEFAULT NULL::character varying,
    applyid character varying(255) DEFAULT NULL::character varying,
    candidateid integer,
    candidateinfo character varying(255) DEFAULT NULL::character varying,
    candidatebackground text,
    profileimage character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public."CANDIDATES" OWNER TO postgres;

--
-- Name: CANDIDATES_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CANDIDATES_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CANDIDATES_id_seq" OWNER TO postgres;

--
-- Name: CANDIDATES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CANDIDATES_id_seq" OWNED BY public."CANDIDATES".id;


--
-- Name: OFFICES; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OFFICES" (
    id integer NOT NULL,
    officename character varying(255) DEFAULT NULL::character varying,
    officeinfo character varying(255) DEFAULT NULL::character varying,
    officetype character varying(255) DEFAULT NULL::character varying,
    goveremntid integer,
    officeadress character varying(50) DEFAULT NULL::character varying,
    officeleader character varying(255) DEFAULT NULL::character varying,
    officestatus text,
    leaderemail character varying(255) DEFAULT NULL::character varying,
    applyid character varying(255) DEFAULT NULL::character varying,
    logourl character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public."OFFICES" OWNER TO postgres;

--
-- Name: OFFICES_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."OFFICES_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."OFFICES_id_seq" OWNER TO postgres;

--
-- Name: OFFICES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."OFFICES_id_seq" OWNED BY public."OFFICES".id;


--
-- Name: PARTIES; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PARTIES" (
    id integer NOT NULL,
    partyname character varying(255) DEFAULT NULL::character varying,
    partinfo character varying(255) DEFAULT NULL::character varying,
    foundedon character varying(255) DEFAULT NULL::character varying,
    goveremntid integer,
    partyaddress character varying(50) DEFAULT NULL::character varying,
    candidateid character varying(255) DEFAULT NULL::character varying,
    partyleader text,
    partymortal character varying(36) NOT NULL,
    leaderemail character varying(255) DEFAULT NULL::character varying,
    logourl character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public."PARTIES" OWNER TO postgres;

--
-- Name: PARTIES_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PARTIES_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."PARTIES_id_seq" OWNER TO postgres;

--
-- Name: PARTIES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PARTIES_id_seq" OWNED BY public."PARTIES".id;


--
-- Name: USERS; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."USERS" (
    id integer NOT NULL,
    firstname character varying(255) DEFAULT NULL::character varying,
    secondname character varying(255) DEFAULT NULL::character varying,
    email character varying(255) DEFAULT NULL::character varying,
    phone integer,
    nationalid integer,
    livesat character varying(50) DEFAULT NULL::character varying,
    isadmin character varying(255) DEFAULT NULL::character varying,
    usertype text,
    userid character varying(36) NOT NULL,
    password character varying(255) DEFAULT NULL::character varying,
    userprofile character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public."USERS" OWNER TO postgres;

--
-- Name: USERS_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."USERS_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."USERS_id_seq" OWNER TO postgres;

--
-- Name: USERS_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."USERS_id_seq" OWNED BY public."USERS".id;


--
-- Name: VOTES; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."VOTES" (
    id integer NOT NULL,
    votefor character varying(255) DEFAULT NULL::character varying,
    office character varying(255) DEFAULT NULL::character varying,
    nationalid integer,
    votecount character varying(255) DEFAULT NULL::character varying,
    votecandidates text,
    voter character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public."VOTES" OWNER TO postgres;

--
-- Name: VOTES_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."VOTES_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."VOTES_id_seq" OWNER TO postgres;

--
-- Name: VOTES_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."VOTES_id_seq" OWNED BY public."VOTES".id;


--
-- Name: candidates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.candidates (
    id integer NOT NULL,
    firstname character varying(255) DEFAULT NULL::character varying,
    secondname character varying(255) DEFAULT NULL::character varying,
    applyid integer,
    candidateid integer,
    candidateinfo character varying(255) DEFAULT NULL::character varying,
    candidatebackground text,
    partyid integer,
    profileimage character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public.candidates OWNER TO postgres;

--
-- Name: candidates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.candidates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.candidates_id_seq OWNER TO postgres;

--
-- Name: candidates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.candidates_id_seq OWNED BY public.candidates.id;


--
-- Name: offices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.offices (
    id integer NOT NULL,
    officename character varying(255) DEFAULT NULL::character varying,
    officeinfo character varying(255) DEFAULT NULL::character varying,
    officetype character varying(255) DEFAULT NULL::character varying,
    goveremntid integer,
    officeadress character varying(50) DEFAULT NULL::character varying,
    officeleader character varying(255) DEFAULT NULL::character varying,
    officestatus text,
    leaderemail character varying(255) DEFAULT NULL::character varying,
    applyid character varying(255) DEFAULT NULL::character varying,
    logourl character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public.offices OWNER TO postgres;

--
-- Name: offices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.offices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.offices_id_seq OWNER TO postgres;

--
-- Name: offices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.offices_id_seq OWNED BY public.offices.id;


--
-- Name: parties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parties (
    id integer NOT NULL,
    partyname character varying(255) DEFAULT NULL::character varying,
    partinfo character varying(255) DEFAULT NULL::character varying,
    foundedon character varying(255) DEFAULT NULL::character varying,
    goveremntid integer,
    partyaddress character varying(50) DEFAULT NULL::character varying,
    candidateid character varying(255) DEFAULT NULL::character varying,
    partyleader text,
    partymortal character varying(36) DEFAULT NULL::character varying,
    leaderemail character varying(255) DEFAULT NULL::character varying,
    logourl character varying(1000) DEFAULT NULL::character varying
);


ALTER TABLE public.parties OWNER TO postgres;

--
-- Name: parties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.parties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.parties_id_seq OWNER TO postgres;

--
-- Name: parties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.parties_id_seq OWNED BY public.parties.id;


--
-- Name: petition; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.petition (
    id integer NOT NULL,
    createby character varying(255) DEFAULT NULL::character varying,
    office character varying(255) DEFAULT NULL::character varying,
    supports integer,
    evidence character varying(1000) DEFAULT NULL::character varying,
    information text
);


ALTER TABLE public.petition OWNER TO postgres;

--
-- Name: petition_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.petition_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.petition_id_seq OWNER TO postgres;

--
-- Name: petition_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.petition_id_seq OWNED BY public.petition.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    firstname character varying(255) DEFAULT NULL::character varying,
    secondname character varying(255) DEFAULT NULL::character varying,
    email character varying(255) DEFAULT NULL::character varying,
    phone character varying(100) DEFAULT NULL::character varying,
    nationalid character varying(255) DEFAULT NULL::character varying,
    password character varying(255) DEFAULT NULL::character varying,
    userprofile character varying(255) DEFAULT NULL::character varying,
    address character varying(255) DEFAULT NULL::character varying,
    userid character varying(255) DEFAULT NULL::character varying,
    usertype character varying(255) DEFAULT NULL::character varying,
    isadmin character varying(255) DEFAULT NULL::character varying
)


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: votes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.votes (
    id integer NOT NULL,
    votefor character varying(255) DEFAULT NULL::character varying,
    office character varying(255) DEFAULT NULL::character varying,
    createdon integer,
    votecount character varying(255) DEFAULT NULL::character varying,
    party text,
    voter character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.votes OWNER TO postgres;

--
-- Name: votes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.votes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.votes_id_seq OWNER TO postgres;

--
-- Name: votes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.votes_id_seq OWNED BY public.votes.id;


--
-- Name: CANDIDATES id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CANDIDATES" ALTER COLUMN id SET DEFAULT nextval('public."CANDIDATES_id_seq"'::regclass);


--
-- Name: OFFICES id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OFFICES" ALTER COLUMN id SET DEFAULT nextval('public."OFFICES_id_seq"'::regclass);


--
-- Name: PARTIES id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PARTIES" ALTER COLUMN id SET DEFAULT nextval('public."PARTIES_id_seq"'::regclass);


--
-- Name: USERS id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."USERS" ALTER COLUMN id SET DEFAULT nextval('public."USERS_id_seq"'::regclass);


--
-- Name: VOTES id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VOTES" ALTER COLUMN id SET DEFAULT nextval('public."VOTES_id_seq"'::regclass);


--
-- Name: candidates id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidates ALTER COLUMN id SET DEFAULT nextval('public.candidates_id_seq'::regclass);


--
-- Name: offices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offices ALTER COLUMN id SET DEFAULT nextval('public.offices_id_seq'::regclass);


--
-- Name: parties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parties ALTER COLUMN id SET DEFAULT nextval('public.parties_id_seq'::regclass);


--
-- Name: petition id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petition ALTER COLUMN id SET DEFAULT nextval('public.petition_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: votes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votes ALTER COLUMN id SET DEFAULT nextval('public.votes_id_seq'::regclass);


--
-- Data for Name: CANDIDATES; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CANDIDATES" (id, firstname, secondname, applyid, candidateid, candidateinfo, candidatebackground, profileimage) FROM stdin;
\.


--
-- Data for Name: OFFICES; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OFFICES" (id, officename, officeinfo, officetype, goveremntid, officeadress, officeleader, officestatus, leaderemail, applyid, logourl) FROM stdin;
\.


--
-- Data for Name: PARTIES; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PARTIES" (id, partyname, partinfo, foundedon, goveremntid, partyaddress, candidateid, partyleader, partymortal, leaderemail, logourl) FROM stdin;
\.


--
-- Data for Name: USERS; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."USERS" (id, firstname, secondname, email, phone, nationalid, livesat, isadmin, usertype, userid, password, userprofile) FROM stdin;
\.


--
-- Data for Name: VOTES; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."VOTES" (id, votefor, office, nationalid, votecount, votecandidates, voter) FROM stdin;
\.


--
-- Data for Name: candidates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.candidates (id, firstname, secondname, applyid, candidateid, candidateinfo, candidatebackground, partyid, profileimage) FROM stdin;
1	Dawn	Marshall	9	11	home now	\N	\N	Lacy
2	firstname	second	9	121	home now	\N	\N	\N
3	Drake	Nicole	9	10	home now	\N	\N	Cain
4	Velma	Kim	8	8	home now	\N	\N	Reuben
\.


--
-- Data for Name: offices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.offices (id, officename, officeinfo, officetype, goveremntid, officeadress, officeleader, officestatus, leaderemail, applyid, logourl) FROM stdin;
62	new name 118	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
63	new name 136	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
64	new name 	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
11	em@1a.il	mainpass12	\N	\N	\N	\N	\N	\N	\N	\N
13	the best offered office  to create now 	9 is the only number 	\N	\N	\N	\N	\N	\N	\N	man home is cool now
14	the bes office  to create now 	9 is the only number 	\N	\N	\N	\N	\N	\N	\N	man home is cool now
15	the  office  to create now 	9 is the only number 	\N	\N	\N	\N	\N	\N	\N	man home is cool now
16	the office  to create now 	9 is the only number 	\N	\N	\N	\N	\N	\N	\N	man home is cool now
17	the office to create now 	9 is the only number 	\N	\N	from home na	\N	\N	\N	\N	man home is cool now
18	thi office to create now 	9 is the only number 	\N	\N	from home na	\N	\N	\N	\N	man home is cool now
19	thi 12 to create now 	9 is the only number 	\N	\N	from home na	\N	\N	\N	\N	man home is cool now
21	trial name 	office info trial	\N	\N	\N	\N	\N	\N	\N	\N
24	new name 106	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
25	new name 133	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
26	new name 114	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
27	new name 104	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
22	tr1al name 	office info trial	\N	\N	\N	\N	\N	\N	\N	logo Url now
29	new name 174	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
10	tr1al name 	office info trial	\N	\N	\N	\N	\N	\N	\N	logo Url now
30	new name 108	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
31	new name 129	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
32	new name 165	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
33	new name 141	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
34	new name 130	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
35	new name 170	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
37	new name 171	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
38	new name 173	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
39	new name 101	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
40	new name 128	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
41	new name 126	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
42	new name 197	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
43	new name 138	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
44	new name 195	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
45	new name 175	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
46	new name 167	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
47	new name 100	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
48	new name 107	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
49	new name 159	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
50	new name 199	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
51	new name 182	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
52	new name 172	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
53	new name 188	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
54	new name 112	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
55	new name 179	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
56	new name 186	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
57	new name 120	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
58	new name 122	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
59	new name 198	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
60	new name 160	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
61	new name 113	office info trial	\N	\N	this is the address	\N	\N	\N	\N	logo Url now
\.


--
-- Data for Name: parties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parties (id, partyname, partinfo, foundedon, goveremntid, partyaddress, candidateid, partyleader, partymortal, leaderemail, logourl) FROM stdin;
2	paty man	\N	\N	\N	\N	\N	\N	\N	\N	\N
3	aty man	\N	\N	\N	\N	\N	\N	\N	\N	\N
5	name	\N	\N	\N	\N	\N	\N	\N	\N	\N
6	 nasndsa 	\N	\N	\N	\N	\N	\N	\N	\N	\N
7	 nasndsa 	\N	\N	\N	\N	\N	\N	\N	\N	\N
8	 nandsa 	\N	\N	\N	\N	\N	\N	\N	\N	\N
1	 new name herre 	\N	\N	\N	\N	\N	\N	\N	\N	\N
12	new name 186	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
13	new name 119	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
14	new name 121	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
15	new name 144	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
16	new name 126	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
17	new name 173	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
18	new name 170	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
19	new name 130	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
20	new name 116	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
21	new name 112	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
22	new name 102	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
23	new name 174	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
24	new name 149	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
25	new name 160	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
26	new name 113	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
27	new name 151	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
28	new name 105	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
29	new name 123	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
30	new name 179	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
31	new name 178	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
32	new name 197	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
33	new name 111	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
34	new name 152	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
35	new name 195	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
36	new name 127	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
37	new name 181	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
38	new name 193	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
39	new name 146	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
40	new name 138	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
41	new name 198	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
42	new name 114	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
43	new name 132	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
44	new name 180	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
45	new name 122	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
46	new name 124	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
47	new name 176	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
48	new name 108	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
49	new name 164	\N	\N	\N	\N	\N	\N	\N	\N	logo is left home
\.


--
-- Data for Name: petition; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.petition (id, createby, office, supports, evidence, information) FROM stdin;
1	12	8	0	\N	lorem ipsum home now 
2	12	8	0	\N	lorem ipsum home now 
3	12	8	0	\N	lorem ipsum home now 
4	12	9	0	\N	lorem ipsum home now 
5	12	9	0	\N	lorem ipsum home now 
6	12	9	0	\N	lorem ipsum home now 
7	12	9	0	 'evidence mansassad'	lorem ipsum home now 
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, secondname, email, phone, nationalid, password, userprofile, address, userid, usertype, isadmin) FROM stdin;
1	Sara	Leo	odio@Praesenteunulla.ca	592-3896	Kieran	Sophia	Alan	Ivy	Astra	Beverly	Nichole
2	Yen	Indigo	ante.Vivamus.non@indolor.org	1-654-259-2400	Daquan	Dexter	Daniel	Quon	Astra	Yetta	Ava
3	Joseph	Alma	nec@commodo.org	824-4073	Rooney	Elvis	Hamish	Quinn	Stella	Mariko	Shana
4	Scott	Elton	pede.ac@euismodmauris.com	438-0802	Tallulah	Charissa	Avye	Geraldine	Serina	Carissa	Miriam
5	Nyssa	Raphael	non@nequeNullamnisl.com	114-7462	Benedict	Zachery	Connor	Rebecca	Melanie	Rahim	Carter
6	Ethan	Wilma	nec.orci.Donec@ante.edu	789-8884	Nero	Rachel	Henry	Calvin	Kennan	Tad	Daphne
7	Cara	Chaim	gravida.mauris.ut@orcisem.edu	1-923-864-6601	Ivana	Aristotle	Gisela	Caldwell	Stewart	Clark	Zephania
8	Velma	Kim	magna@lobortistellusjusto.edu	231-0996	Nina	Fay	Reuben	Tasha	Sigourney	Darius	Yardley
9	Phoebe	John	eget.varius.ultrices@luctus.net	960-7645	Jaquelyn	Silas	Donovan	Chastity	Jelani	Noble	Alyssa
10	Drake	Nicole	mollis.Duis@tortor.com	1-770-546-9606	Cole	Selma	Cain	Inga	Claire	Porter	Colton
11	Dawn	Marshall	ac.feugiat@quis.ca	190-5919	Kieran	Plato	Lacy	Alexander	Dustin	Chaim	Quemby
12	Petra	Genevieve	turpis.vitae@Donec.ca	709-5815	Kiara	Jane	Selma	Cleo	Ignacia	Callie	Cullen
13	Coby	Joelle	Cras.dictum@ullamcorpernisl.edu	1-772-471-0917	Emmanuel	Kylynn	Simon	Madonna	Richard	Damon	Florence
14	Lani	Wyatt	auctor.ullamcorper.nisl@arcuetpede.ca	187-2977	Gregory	Brody	Shelley	Alan	Shay	May	Jeremy
15	Fay	Yasir	facilisis@tortordictumeu.ca	113-2087	Rafael	Riley	Zeph	Amity	Jillian	Ivory	Raphael
16	Germane	Allegra	pede.ac@musDonec.org	1-414-527-0677	Noble	Rafael	Deacon	Hyatt	Debra	Rafael	Colby
17	Sydnee	Noah	mollis@ametconsectetuer.org	592-1941	Lynn	Caldwell	Andrew	Todd	Armand	Aiko	Shellie
18	Lars	Yvette	tincidunt.Donec.vitae@acipsum.net	438-1372	Dante	Beatrice	Jolie	Buffy	Zane	Erich	Nolan
19	Amaya	Charles	mauris.sit@etmalesuada.com	1-964-878-9044	Nash	Blaine	Emma	Ava	Zelenia	Murphy	Mona
20	Tarik	Christen	sit.amet.diam@molestiedapibusligula.edu	581-9415	Quyn	Callie	Oliver	Dawn	Raphael	Stewart	Allistair
21	Christian	Hollee	ac.risus.Morbi@pretium.net	1-700-646-0364	Jelani	Avram	Wylie	Hop	Rinah	Doris	Aaron
22	Jaquelyn	Addison	Aliquam@Inscelerisquescelerisque.edu	1-543-491-6142	Beck	Amy	Clayton	Colin	Lacota	Maxine	Harper
23	Jonas	Jordan	dictum.ultricies@Loremipsum.net	1-991-767-0781	Adara	Cyrus	Slade	Dale	Griffin	Judah	Mercedes
24	Cora	Rachel	lorem.ipsum.sodales@Nullaaliquet.com	106-5614	Elvis	Eric	Asher	Micah	Kimberly	Germaine	Whitney
25	Ronan	Breanna	vitae@ante.edu	712-7378	Kevin	Kirk	Hector	Cole	Meghan	Cade	Samson
26	Zia	Breanna	Aliquam.rutrum.lorem@metusAeneansed.co.uk	1-909-138-5072	Allen	Urielle	Marshall	Demetria	Cyrus	Justina	Merritt
27	Gary	Kiona	et@eudolor.edu	1-121-947-2495	Allegra	Quamar	Micah	Jerome	Willow	Samuel	Liberty
28	Gavin	Vernon	massa.rutrum@purusgravida.net	745-5638	Tanek	Charity	Emery	Daria	Eliana	Felix	Anika
29	Amal	Jacqueline	in.cursus@nonbibendum.org	1-136-556-6726	Damian	Castor	Brian	Regina	Nina	Flynn	Charissa
30	Guinevere	Charity	fames.ac.turpis@consectetuerrhoncus.net	1-881-999-7851	Gregory	Abigail	Aline	Larissa	Prescott	Uriah	Kirsten
31	Brody	Hedwig	montes.nascetur.ridiculus@vehiculaetrutrum.org	555-4270	Boris	Rhonda	Chancellor	Cairo	Moana	Lani	Carson
32	Simone	Murphy	quis@placeratvelitQuisque.net	1-800-590-5888	Russell	Irma	Richard	Maggie	Amos	Donna	Erica
33	Lance	Clayton	risus.a.ultricies@atpede.net	857-8886	Holmes	Debra	Xander	Hermione	Zelenia	Idona	Aretha
34	Holly	Jonah	Duis.cursus@lectusNullam.com	151-8060	Teegan	Willow	Faith	Rowan	Hamilton	Lois	Dylan
35	Dane	Basil	libero.et.tristique@Donec.co.uk	464-8400	Gannon	Rebecca	Abra	Galena	Whitney	Larissa	Lee
36	Jena	Damon	ac@sitametconsectetuer.com	536-4267	Willow	Sage	Patricia	Margaret	Tallulah	Patrick	Jenna
37	Aladdin	Ina	mauris.rhoncus@Suspendisse.net	524-3409	Ahmed	Molly	Daniel	Jocelyn	Dai	Dante	Igor
38	Madaline	Chiquita	id.nunc@non.edu	857-9133	Pandora	Warren	Cameron	Evan	Tanya	Jason	Len
39	Ivor	Megan	dui.quis.accumsan@a.co.uk	292-9481	Quyn	Laith	Dominique	Keegan	Branden	Ulysses	Yoshi
40	Bradley	Amelia	nisi.sem.semper@hendreritDonec.org	379-9704	Ryder	Ethan	Keane	Zena	Hakeem	Nomlanga	Gloria
41	Dylan	Caesar	semper.et.lacinia@lacus.net	671-0146	Randall	Driscoll	Jasmine	Maia	Xenos	Miranda	Emerson
42	Vanna	Quemby	Vestibulum@ligulaelitpretium.net	1-240-576-7128	Wynne	Devin	Ruth	Eve	Darryl	Damian	Clinton
43	Howard	Andrew	Nulla@eunulla.edu	247-5507	Patience	Britanney	Ferdinand	Hayes	Jerome	Emi	Clark
44	Bertha	Nerea	tempor@disparturient.ca	1-654-225-1231	Montana	Allen	Emmanuel	Quynn	Neil	Selma	Sade
45	Rafael	Chelsea	risus.Morbi.metus@malesuadautsem.com	1-413-742-7769	Joan	Chandler	Pascale	Ryder	Warren	Iliana	Leonard
46	Nora	Allegra	odio.Aliquam@metusurna.edu	552-0055	Reese	Hector	Solomon	Xantha	Nina	Arden	Justina
47	Freya	Renee	netus.et.malesuada@lobortis.edu	1-500-191-2292	Quintessa	Haley	Driscoll	Joseph	Dane	Shelly	Audra
48	Leilani	Alexa	est@nislQuisquefringilla.org	1-409-383-2251	Reuben	Faith	Cody	Francis	Tad	Murphy	Rogan
49	Charles	Barbara	orci.lacus@magnamalesuadavel.co.uk	243-0560	Gannon	Stella	Brock	Sage	Jena	Kenneth	Ivor
50	Ruby	Hayley	id@etliberoProin.co.uk	1-592-455-0531	Wyatt	Lawrence	Clayton	Herman	Carson	Keely	Yvonne
51	Aileen	Wylie	arcu.Nunc.mauris@convallisdolor.co.uk	1-325-258-9306	Dolan	Uma	Brent	Lois	Levi	Lenore	Forrest
52	William	Karly	nonummy@pedeNuncsed.net	1-742-366-4552	Allen	Malachi	Rigel	Graiden	Maya	Uma	Rebecca
53	Xenos	Quinn	nulla@rutrumjustoPraesent.co.uk	133-2162	Hu	Flynn	Cailin	Mari	Nadine	Ora	Devin
54	Nehru	Ryan	velit.dui@sitamet.ca	734-0631	Hayes	Illana	Bertha	Oscar	Madeline	Kaitlin	Josephine
55	Colorado	Vielka	ullamcorper@perconubianostra.com	306-2385	Magee	Yael	Tatum	Cassandra	Winter	Beau	Kermit
56	Victoria	Xavier	sapien.imperdiet@urnaconvallis.net	1-263-510-4285	Gemma	Henry	Jin	Acton	Hanae	Renee	Ryan
57	Kermit	Graham	ultrices.iaculis.odio@maurisrhoncus.edu	412-6038	Hop	Gwendolyn	Caesar	Adrienne	Quinn	Louis	Quinlan
58	Rama	Elliott	eget.odio@lacusMauris.edu	994-4494	Faith	Linda	Ifeoma	Sandra	Barrett	Caryn	Paula
59	Emerson	Diana	mauris.sapien.cursus@ultrices.net	120-5323	Wyoming	Emily	Colton	Velma	Avram	Reece	Rajah
123	firstname	second	scmy@surs.ccom	1234321	2111323123	mainpass12	\N	home	\N	\N	\N
60	Nita	Karina	dapibus.rutrum.justo@leoCrasvehicula.ca	1-637-256-3926	Quincy	Cheryl	Lev	Sylvia	Ann	Mariko	George
61	Reuben	Rina	lacus.vestibulum.lorem@ac.com	1-392-528-4295	Raphael	Zenia	Tanya	Desiree	Yardley	Norman	Cathleen
62	Kuame	Kelsey	sociosqu@penatibuset.ca	1-945-119-1397	Abdul	Timon	Lara	Camden	Amal	Seth	Sybill
63	Callum	Tarik	Phasellus@tempordiam.ca	776-5963	Jada	Martena	Lacota	Isaiah	Hall	Murphy	Alma
64	Ciaran	Devin	tempor@nuncsedpede.edu	1-209-111-6605	Octavia	Ginger	Len	Jael	Duncan	Ali	Halee
65	Brynn	Shana	Sed@tincidunt.co.uk	1-544-515-7389	Tara	Pascale	Chanda	Igor	Ariel	Luke	Kibo
66	Gavin	Tatiana	Duis@semper.org	1-991-247-8603	Cain	Austin	Ria	Roanna	Todd	Cassady	Prescott
67	Willow	Freya	arcu.Vestibulum@eu.edu	399-2277	Elaine	Meredith	Donna	Mark	Linda	Ocean	Hanae
68	Alice	Lance	Morbi@aceleifend.com	1-132-648-9412	Amery	Camille	Medge	Curran	Carson	Xantha	Sydney
69	Kibo	Brady	Donec@ligulaelitpretium.edu	1-255-896-7535	Kenyon	Slade	Hyatt	Ori	Ina	Montana	Armando
70	Axel	Ivan	risus.In@tellus.org	1-337-244-1881	Gil	Basil	Branden	Holmes	Ayanna	Doris	Donovan
71	Dacey	Fitzgerald	dignissim@quis.edu	989-0419	Aquila	Hiroko	Nathan	Illana	Conan	Zena	Hasad
72	Reese	Hiroko	ipsum@posuerecubilia.org	896-5850	Hannah	Dalton	Erasmus	John	Eric	Ray	Montana
73	Belle	Eric	faucibus@Morbiaccumsan.co.uk	968-3468	Wanda	Madonna	Willow	Fatima	Keegan	Madeson	Echo
74	Ignatius	Larissa	gravida.Praesent@gravidamauris.co.uk	1-211-498-9194	Susan	Tashya	Nero	Daryl	Regan	Sylvia	Alexa
75	Dustin	Leo	nunc.ullamcorper.eu@turpis.com	1-740-555-4331	Carissa	Rooney	Rose	Jael	Dominic	Cassidy	Isaiah
76	Farrah	Cally	Ut.tincidunt@euaccumsan.co.uk	830-7999	Maisie	Holmes	Quemby	Kellie	Kadeem	Holmes	Brian
77	Bert	Amir	elit.pretium.et@turpisegestas.co.uk	1-746-598-2929	Lucian	Oliver	Danielle	Gage	Zahir	Kelsey	Wyatt
78	Basil	Latifah	sagittis.semper@Praesentluctus.edu	514-0963	Kevin	Ainsley	Beau	Kiara	Quinlan	Ava	Ferdinand
79	Melissa	Talon	Phasellus@nonleo.co.uk	552-4263	Moana	Finn	Jacqueline	Graiden	Paula	Vivien	Hamish
80	Knox	Cameron	et.pede.Nunc@vulputaterisus.co.uk	1-676-701-9956	Luke	Dustin	Signe	Lee	Tiger	Chester	Justin
81	Justin	Demetrius	ipsum.Suspendisse@euismodmauris.org	665-3909	Kylee	Ursula	Zane	Vivian	Alyssa	Stacy	Ira
82	Cody	Christian	odio@augueSedmolestie.com	416-6278	Eugenia	Zane	Baker	Mira	Jerry	Uriel	Cameran
83	Rogan	Fleur	mollis.dui.in@lobortisultricesVivamus.net	1-957-881-6088	Geoffrey	Colt	Keiko	Macy	Arthur	Melissa	Byron
84	Hoyt	Halee	adipiscing.elit.Etiam@erat.co.uk	1-528-388-2485	Alexis	Ryder	Igor	Xavier	Aidan	Nero	Julian
85	Logan	Jade	Integer@augueporttitorinterdum.net	1-105-990-6521	George	Craig	Luke	Daphne	Wyatt	Chelsea	Drew
86	Joshua	Axel	metus.In.nec@quamafelis.ca	1-470-444-7994	Leilani	Allegra	Thaddeus	Rashad	Joshua	Martina	Cyrus
87	Rama	Declan	est.mollis@acnulla.edu	1-856-924-5658	Wylie	Dennis	Lareina	Phillip	Kaden	Erich	Jana
88	Bruno	Brian	cursus.Integer.mollis@tempus.net	1-322-647-7753	Kylan	Cameron	Maisie	Stewart	Vance	Phillip	Genevieve
89	Solomon	Ahmed	convallis.est.vitae@eget.ca	157-0850	Shaine	Leah	Griffith	Florence	Xerxes	Althea	MacKenzie
90	August	Geraldine	diam.at@Aenean.com	579-5177	Axel	Clare	Lee	Lamar	Moana	Rebecca	Rama
91	Kameko	Brenda	ligula.Aenean@nuncrisusvarius.com	1-830-570-6327	Eagan	Chandler	Asher	Herrod	Aaron	Allegra	Montana
92	Caldwell	Rahim	non.dapibus.rutrum@etultrices.edu	333-4219	Martha	Simone	Jerry	Jessamine	Rebekah	Ebony	Piper
93	Randall	Thomas	et.magnis@senectuset.co.uk	1-231-219-1540	Colette	Byron	Jin	Doris	Rachel	Graham	Venus
94	Noelle	Maile	natoque@cursusluctus.edu	1-843-817-0566	Sydney	Quamar	Sharon	Wynter	Acton	Alma	Charles
95	Ray	Karly	Integer.urna@orciinconsequat.org	1-601-578-5897	Vernon	Chelsea	Sasha	Hayden	Rogan	Uriel	Portia
96	Thaddeus	Harding	Cras@nisisem.net	1-814-808-0977	Kareem	Ray	Jorden	Nicholas	Fiona	Gabriel	Gannon
97	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
98	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
99	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
100	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
101	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
102	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
103	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
104	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
105	Lydia	Stacey	suscipit.nonummy@semutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
106	Lydia	Stacey	suscipit.nonummy@seutcursus.com	1-822-508-7073	Callum	Sade	Andrew	Kim	Barclay	Mira	Neve
107	firstname	second	suscipit.nommy@seutcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
108	firstname	second	suscipit.nmmy@seutcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
109	firstname	second	suscipit.nmmy@setcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
110	firstname	second	suscipit.my@setcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
111	firstname	second	scipit.my@setcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
112	firstname	second	scpit.my@setcursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
113	firstname	second	scpit.my@secursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
114	firstname	second	scpit.my@secursus.om	\N	2111323123	mainpass12	\N	home	\N	\N	\N
115	firstname	second	scpit.my@secursus.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
116	firstname	second	scpit.my@seursus.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
117	firstname	second	scpit.my@seursu.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
118	firstname	second	scit.my@seursu.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
119	firstname	second	scit.my@sursu.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
120	firstname	second	scitmy@sursu.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
121	firstname	second	sctmy@sursu.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
122	firstname	second	sctmy@surs.ccom	\N	2111323123	mainpass12	\N	home	\N	\N	\N
124	firstname	second	scmy@snnnurs.ccom	1234321	2111323123	mainpass12	\N	home	\N	\N	\N
125	\N	\N	email@address.address	\N	\N	new password	\N	address for the user	\N	\N	\N
126	\N	\N	email@adress.address	\N	\N	new password	\N	address for the user	\N	\N	\N
127	firstname	second	suscipit.nmy@seut12sncursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
130	firstname	second	suscy@seut12sncursus.com	\N	2111323123	mainpass12	\N	home	\N	\N	\N
131	firstname	second	\N	\N	2111323123	mainpass12	\N	home	\N	\N	\N
132	firstname	second	em@a.il	\N	2111323123	mainpass12	\N	home	\N	\N	\N
133	firstname	second	em@1a.il	\N	2111323123	mainpass12	\N	home	\N	\N	true
134	user first name	last name 	email@a11ddress.address	\N	\N	new password	\N	address for the user	\N	\N	\N
135	user first name	last name 	email@a11dress.address	\N	\N	new password	\N	address for the user	\N	\N	\N
136	paul	home now	email@paul.com	\N	\N	pasword1221	\N	gikondo	\N	\N	\N
137	   	home now	email1@paul.com	\N	\N	pasword1221	\N	gikondo	\N	\N	\N
138	name_man	home now	email11@paul.com	\N	\N	pasword1221	\N	gikondo	\N	\N	\N
139	firstname	second	realman@man.com	1234321	2111323123	mainpass12	\N	home	\N	\N	\N
140	firstname	second	realman@NaNman.com	1234321	2111323123	mainpass12	\N	home	\N	\N	\N
\.


--
-- Data for Name: votes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.votes (id, votefor, office, createdon, votecount, party, voter) FROM stdin;
1	\N	\N	\N	0	\N	\N
2	\N	\N	\N	0	\N	\N
3	2	8	\N	0	\N	\N
4	2	8	\N	0	\N	\N
5	2	8	\N	0	\N	\N
6	2	8	\N	0	\N	12
7	2	8	\N	0	\N	12
8	2	8	\N	0	\N	12
9	2	8	\N	0	\N	12
10	2	8	\N	0	\N	turpis.vitae@Donec.ca
11	2	8	\N	0	\N	turpis.vitae@Donec.ca
12	2	8	\N	0	\N	turpis.vitae@Donec.ca
13	2	8	\N	0	\N	turpis.vitae@Donec.ca
14	2	8	\N	0	\N	turpis.vitae@Donec.ca
15	2	8	\N	0	\N	scpit.my@setcursus.com
16	2	8	\N	0	\N	ante.Vivamus.non@indolor.org
17	2	8	\N	0	\N	ac.risus.Morbi@pretium.net
18	2	8	\N	0	\N	scitmy@sursu.ccom
19	2	7	\N	0	\N	mollis.Duis@tortor.com
20	1	7	\N	0	\N	eget.varius.ultrices@luctus.net
21	1	7	\N	0	\N	suscipit.nonummy@semutcursus.com
22	4	8	\N	0	\N	pede.ac@euismodmauris.com
23	2	2	\N	0	\N	suscy@seut12sncursus.com
\.


--
-- Name: CANDIDATES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CANDIDATES_id_seq"', 1, false);


--
-- Name: OFFICES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."OFFICES_id_seq"', 1, false);


--
-- Name: PARTIES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PARTIES_id_seq"', 1, false);


--
-- Name: USERS_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."USERS_id_seq"', 1, false);


--
-- Name: VOTES_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."VOTES_id_seq"', 1, false);


--
-- Name: candidates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.candidates_id_seq', 4, true);


--
-- Name: offices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.offices_id_seq', 64, true);


--
-- Name: parties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parties_id_seq', 49, true);


--
-- Name: petition_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.petition_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 140, true);


--
-- Name: votes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.votes_id_seq', 23, true);


--
-- Name: CANDIDATES CANDIDATES_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CANDIDATES"
    ADD CONSTRAINT "CANDIDATES_pkey" PRIMARY KEY (id);


--
-- Name: OFFICES OFFICES_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OFFICES"
    ADD CONSTRAINT "OFFICES_pkey" PRIMARY KEY (id);


--
-- Name: PARTIES PARTIES_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PARTIES"
    ADD CONSTRAINT "PARTIES_pkey" PRIMARY KEY (id);


--
-- Name: USERS USERS_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."USERS"
    ADD CONSTRAINT "USERS_pkey" PRIMARY KEY (id);


--
-- Name: VOTES VOTES_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."VOTES"
    ADD CONSTRAINT "VOTES_pkey" PRIMARY KEY (id);


--
-- Name: candidates candidates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_pkey PRIMARY KEY (id);


--
-- Name: offices offices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offices
    ADD CONSTRAINT offices_pkey PRIMARY KEY (id);


--
-- Name: parties parties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parties
    ADD CONSTRAINT parties_pkey PRIMARY KEY (id);


--
-- Name: petition petition_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.petition
    ADD CONSTRAINT petition_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: votes votes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.votes
    ADD CONSTRAINT votes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

