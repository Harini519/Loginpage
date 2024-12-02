let loginBtn=document.getElementById('login-btn')

let signupBtn=document.getElementById('signup-btn')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    var re = /^([a-zA-Z0-9_-]){5,6}$/;
    return re.test(password);
  }
  


function lBtn() {
        document.getElementById('headd').innerText='Login'
        signupBtn.style.display='none'
        loginBtn.style.display='block'

    
}

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let userName=document.getElementById('username').value
    let password=document.getElementById('password').value

    if(!validateEmail(userName))
    {
        alert("Please enter email in format 'some@domain.com'")
        return
    }

    if(!validatePassword(password))
    {
        alert("Please enter password of length 5-6")
        return

    }

    let pass=localStorage.getItem(userName)

    if(pass==null || pass!=password){
        alert('wrong userName or password!')
    }
    else{
        console.log('ddd');
        
        window.location.href='index.html'
    }




})


function sBtn() {
    document.getElementById('headd').innerText='SignUp'
    signupBtn.style.display='block'
        loginBtn.style.display='none'


}



signupBtn.addEventListener('click',()=>{
    let userName=document.getElementById('username').value
    let password=document.getElementById('password').value

    if(!validateEmail(userName))
    {
        alert("Please enter email in format 'some@domain.com'")
    }

    if(!validatePassword(password))
    {
        alert("Please enter password of length 5-6")

    }

    localStorage.setItem(userName,password)




})
document.getElementById('l-btn').addEventListener('click',lBtn)

document.getElementById('s-btn').addEventListener('click',sBtn)

