let candidates = document.querySelector('#candidates')


let cands = [
    {
        name: "Paul Kagame",
        office: "ministry of education",
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        name: "second candidate",
        office: "ministry of justice",      
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        name: "third candidate",
        office: "ministry of justice",
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo"
    },
    {
        name: "fourth cand",
        office: "ministry of education",
        image: "https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo"
    }
]

let candsHtml = cands.map(n =>  ` <div class="party-candidates">
<div><img src=${n.image} alt=""></div>
<div><h4 class="profile">${n.name}</h4> <p>${n.office}</p></div>
<div> <a href="polticianAcc.html"><button>View Profile</button></a> <button id="cand">Vote</button></div>
</div>`)

candsHtml.forEach(n => candidates.innerHTML += n)

let voted = `<div class="party-candidates inside">
<div><img src="https://yt3.ggpht.com/a/AGF-l79nqPCQJmpK60ot_3JjEZ_Fg0fBL7npF4kj1A=s900-c-k-c0xffffffff-no-rj-mo" alt=""></div>
<div><h4 class="profile">Paul kagame</h4> <p>Ministry of Education Office</p></div>
<div> <button class="cand">Voted</button> <button>Submit</button></div>
</div>`

let voteBtn = document.querySelector('#cand')

voteBtn.onclick = () => {
    document.querySelector('.voted').innerHTML = voted
}

document.querySelector('.counter').innerHTML =  '12 : 231 : 21'