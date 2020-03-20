let signUpArea = document.querySelector('.main_up')
let option1 = document.querySelector('.select1')
let option2 = document.querySelector('.select2')
let firstName = document.querySelector('#firstName')
let secondName = document.querySelector('#secondName')
let UserName = document.querySelector('#UserName')
let phoneNumber = document.querySelector('#phoneNumber')
let yourAddress = document.querySelector('#yourAddress')
let password = document.querySelector('#password')
let settlement = document.querySelector('#settle')
let displaySignUp = document.querySelector('#sign_up_form')

let signUpBtn = document.querySelector('#sign_up')


displaySignUp.innerHTML = `
<div class="inputs"><input required type="text" placeholder="First Name" class="inputs_sign1" id="firstName">
<input required type="email" placeholder="Second Name" class="inputs_sign1" id="secondName"></div>
<input required  requiredtype="text" placeholder="Your Email" class="inputs_sign1" id="UserName">
<input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber">

<input required type="number" placeholder="Your National Id" class="inputs_sign1" id="nationId">
<div>
<input required type="text" placeholder="district" class="inputs_sign2" id="settle1">
<input required type="text" placeholder="sector " class="inputs_sign2" id="settle2">
<input required type="text" placeholder="village" class="inputs_sign2" id="settle3">

</div>

<div class="inputs"><input required type="password" name="pass" placeholder="Creat PassWord"  class="inputs_sign1" id="password">
<input required type="password" name="pass" placeholder="Repeat your PassWord"  class="inputs_sign1 mark" id="password1"></div>
<button class="sign_up_btn" id="sign_up">Sign Up</button>
<div class="extra">Already Have Account <a href="login.html">Login Here</a>
</div>
` 
option2.onclick = () => {
    displaySignUp.innerHTML = `
<div class="inputs"><input required type="text" placeholder="First Name" class="inputs_sign1" id="firstName">
<input required type="email" placeholder="Second Name" class="inputs_sign1" id="secondName"></div>
<input required  requiredtype="text" placeholder="Your Email" class="inputs_sign1" id="UserName">
<input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber">

<input required type="number" placeholder="Your National Id" class="inputs_sign1" id="nationId">


<div class="inputs"><input required type="password" name="pass" placeholder="Creat PassWord"  class="inputs_sign1" id="password">
<input required type="password" name="pass" placeholder="Repeat your PassWord"  class="inputs_sign1 mark" id="password1"></div>
<button class="sign_up_btn" id="sign_up">Sign Up</button>
<div class="extra">Already Have Account <a href="login.html">Login Here</a>
</div>
` 
}

option1.onclick = () => {
    displaySignUp.innerHTML = `
<div class="inputs">
<input required type="email" placeholder="your Party" class="inputs_sign1" id="secondName"></div>
<input required  requiredtype="text" placeholder="Your Email" class="inputs_sign1" id="UserName">
<input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber">

<div>
<input required type="text" placeholder="district" class="inputs_sign2" id="settle1">
<input required type="text" placeholder="sector " class="inputs_sign2" id="settle2">
<input required type="text" placeholder="village" class="inputs_sign2" id="settle3">

</div>

<div class="inputs"><input required type="password" name="pass" placeholder="Creat PassWord"  class="inputs_sign1" id="password">
<input required type="password" name="pass" placeholder="Repeat your PassWord"  class="inputs_sign1 mark" id="password1"></div>
<button class="sign_up_btn" id="sign_up">Sign Up</button>
<div class="extra">Already Have Account <a href="login.html">Login Here</a>
</div>
` 
}