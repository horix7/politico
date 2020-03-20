let parties  = [`
<div class="inline-three">
                <img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
                <div class="ins">  <h3>Replubucan Party<span class="labeled">30 Candidates</span></h3> <p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
                <div class="actions">
                    <i class="far fa-eye  ikon "></i>
                    <i class="fas fa-pen ikon "></i>
                    <i class="far fa-trash-alt ikon bad"></i>
                </div>
            </div>`
,
            `<div class="inline-three">
                <img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
                <div class="ins"> <h3>FPR <span class="labeled">30 Candidates</span></h3><p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
                <div class="actions">
                    <i class="far fa-eye  ikon "></i>
                    <i class="fas fa-pen ikon "></i>
                    <i class="far fa-trash-alt ikon bad"></i>
                </div>
            </div>`
,
            `<div class="inline-three">
                <img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
                <div class="ins">  <h3>Democratic Party <span class="labeled">30 Candidates</span></h3><p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
                <div class="actions">
                    <i class="far fa-eye  ikon "></i>
                    <i class="fas fa-pen ikon "></i>
                    <i class="far fa-trash-alt ikon bad"></i>
                </div>
            </div> `]

let displayThem = document.querySelector('#displayTHem')

displaySignUp.innerHTML = `<div class="inline-three">
<img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
<div class="ins">  <h3>Replubucan Party<span class="labeled">30 Candidates</span></h3> <p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
<div class="actions">
    <i class="far fa-eye  ikon "></i>
    <i class="fas fa-pen ikon "></i>
    <i class="far fa-trash-alt ikon bad"></i>
</div>
</div>
<div class="inline-three">
<img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
<div class="ins"> <h3>FPR <span class="labeled">30 Candidates</span></h3><p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
<div class="actions">
    <i class="far fa-eye  ikon "></i>
    <i class="fas fa-pen ikon "></i>
    <i class="far fa-trash-alt ikon bad"></i>
</div>
</div>
<div class="inline-three">
<img src="https://www.scholaro.com/pro/Images/Resources/Rwanda.jpg" alt="" width="70px">
<div class="ins">  <h3>Democratic Party <span class="labeled">30 Candidates</span></h3><p class="ins"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Voluptate asperiores voluptatum enim itaque fugiat nostrum odit libero corrupti vitae iure nobis magni, consectetur aut. Alias quos id maxime?</p></div>
<div class="actions">
    <i class="far fa-eye  ikon "></i>
    <i class="fas fa-pen ikon "></i>
    <i class="far fa-trash-alt ikon bad"></i>
</div>
</div> `

parties.forEach(n => {
    displayThem.innerHTML += n
})

let delete = document.querySelector('.fa-trash-alt')

delete.onclick = () => {
    return parties.pop()
}