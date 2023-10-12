let form=document.querySelector('#form')
let u_name=document.querySelector('#username')
let email=document.querySelector('#email')
let pwd=document.querySelector('#password')
let c_pwd=document.querySelector('#cpassword')


form.addEventListener('submit',(obj)=>{
    if(validate_input()===false)
    obj.preventDefault()

})


function validate_input(){
    let user_name_value=u_name.value.trim()
    let email_value=email.value.trim()
    let password_value=pwd.value.trim()
    let cpassword_value=c_pwd.value.trim()
    let success=true

    if(user_name_value===""){
        success=false
        setError(u_name,'user name is required')
    }else{
        setSuccess(u_name)
    }


    if(email_value===""){
        success=false
        setError(email,'email_id is required')
    }else if(validation_email(email_value)==null)
    {
       success=false
       setError(email,'Invalid email_Id')
    }
    else{
        setSuccess(email)
    }


    if(password_value===""){
        success=false
        setError(pwd,'password required')
    }else if(password_value.length<8)
    {
       success=false
       setError(pwd,'Password should be atleast 8 Character')
    }
    else{
        setSuccess(pwd)
    }
    
    if(cpassword_value===""){
        success=false
        setError(c_pwd,'confirm password  required')
    }else if(password_value!==cpassword_value)
    {
       success=false
       setError(c_pwd,'password mismatch')
    }
    else{
        setSuccess(c_pwd)
    }

    return success

}


function setError(element,message){

    let parent_tag=element.parentElement
    let error_element=parent_tag.querySelector('.error')
    error_element.innerHTML=message
    parent_tag.classList.add('error')
    parent_tag.classList.remove('success')


}

function setSuccess(element){

    let parent_tag=element.parentElement
    let error_element=parent_tag.querySelector('.error')
    error_element.innerHTML=""
    parent_tag.classList.remove('error')
    parent_tag.classList.add('success')


}

function validation_email(vm){
    return String(vm).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

}