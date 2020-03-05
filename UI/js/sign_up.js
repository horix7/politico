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

let signUpBtn = document.querySelector('#sign_up')




option1.onclick = () => {
    signUpArea.innerHTML = ""

    signUpArea.innerHTML = `
    <div class="main_1">
                <h1>Sign Up As</h1>
                <div class="option1 select1"><h1>Citizen</h1></div>
                <div class="option2 select2"><h1>Party</h1></div>
                
            </div>
            <div class="midd">
            </div>
            <div class="sign_up" id="sign_up_form">
                <div class="inputs"><input required type="text" placeholder="First Name" class="inputs_sign1" id="firstName">
                    <input required type="text" placeholder="Second Name" class="inputs_sign1" id="secondName"></div>
                <input required  requiredtype="text" placeholder="UserName" class="inputs_sign1" id="UserName">
                <input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber">
                <input required type="text" placeholder="your address" class="inputs_sign1" id="yourAddress">
            
                <div class="inputs"><input required type="password" name="pass" placeholder="Creat PassWord"  class="inputs_sign1" id="password">
                <input required type="password" name="pass" placeholder="Repeat your PassWord"  class="inputs_sign1 mark" id="password1"></div>
                <button class="sign_up_btn" id="sign_up">Sign Up</button>
                <div class="extra">Already Have Account <a href="login.html">Login Here</a>
                </div>
        </div>
    
    `
}

option2.onclick = () => {
    signUpArea.innerHTML = ""
    signUpArea.innerHTML = `
    <div class="main_1">
                <h1>Sign Up As</h1>
                <div class="option2 select1"><h1>Citizen</h1></div>
                <div class="option1 select2"><h1>Party</h1></div>
                
            </div>
            <div class="midd">
            </div>
            <div class="sign_up" id="sign_up_form">
                <div class="inputs"><input required type="text" placeholder="First Name" class="inputs_sign1" id="firstName">
                    <input required type="text" placeholder="Second Name" class="inputs_sign1" id="secondName"></div>
                <input required  requiredtype="text" placeholder="UserName" class="inputs_sign1" id="UserName">
                <input required type="number" placeholder="Phone number" class="inputs_sign1" id="phoneNumber">
                <input required type="text" placeholder="your address" class="inputs_sign1" id="yourAddress">
            
                <div class="inputs"><input required type="password" name="pass" placeholder="Creat PassWord"  class="inputs_sign1" id="password">
                <input required type="password" name="pass" placeholder="Repeat your PassWord"  class="inputs_sign1 mark" id="password1"></div>
                <button class="sign_up_btn" id="sign_up">Sign Up</button>
                <div class="extra">Already Have Account <a href="login.html">Login Here</a>
                </div>
        </div>
    
    `
}
