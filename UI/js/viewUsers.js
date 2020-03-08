let displayUsers = document.querySelector('#users')

let users = [
    {
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo",
        name: "paul kagame",

    }
,
    {
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo",
        name: "paul kagame",
        
    }
    ,
    {
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo",
        name: "paul kagame",
        
    }
    ,
    {
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo",
        name: "paul kagame",
        
    }
]

let userHtml = users.map(n => ` <div class="party-candidates">
<div><img src=${n.image} alt=""></div>
<div><h4 class="profile">${n.name}</h4> <p>Ministry of Education Office</p></div>
<div> <a href="polticianAcc.html"><button>View Profile</button> </a> </div>
</div>`)

userHtml.forEach(n => {
    displayUsers.innerHTML += n
}) 