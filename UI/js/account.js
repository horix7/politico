let edit = document.querySelector('#edit')



let userInfo = [
    {
        name: "muhire fabrice",
        place: "gicukiro kigarama gikondo ",
        nationalId: '123-21213-1221'
    }
]

let tableHtml = userInfo.map(n => ` <ul>
<li class="first">Your Info</li>
<li>Name</li>
<li>From </li>
<li>Your Id </li>

</ul>
<ul>
<li class="first"> Citizen</li>
<li>${n.name}</li>
<li>${n.place}</li>
<li>${n.nationalId}</li>

</ul>`)

let table = document.querySelector('.table')
tableHtml.forEach(n => table.innerHTML = n)

let editable = document.querySelector('.change')

edit.onclick = () => {
    editable.innerHTML = `
    <div></div>
    <div>
    <div class="inputs"><input required type="text" placeholder="First Name" class="inputs_sign1" id="firstName" value=${userInfo[0].name}>
    <input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber" value=${userInfo[0].nationalId}>
    <input required type="text" placeholder="district" class="inputs_sign1" id="settle" value=${userInfo[0].place}>
    <input required type="text" placeholder="district" class="inputs_sign1" id="settle1" value=${userInfo[0].nationalId}>
    </div>
    <button class="sign_btn"> Change </button>
    `
}

