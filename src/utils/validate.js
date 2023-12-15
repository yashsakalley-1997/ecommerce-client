const validateInput = (isSignInForm,firstName,email,password,contactNumber,address)=>{
    if(!isSignInForm){
        if(!(/^[a-zA-Z]+$/.test(firstName))){
            return "Invalid name entered"
        }
        if(!(/^\+(?:[0-9] ?){6,14}[0-9]$/.test(contactNumber))){
            return "Invalid contact Number"
        }
        if(!(/^[a-zA-Z0-9\s,.'-]{3,}$/.test(address))){
            return "Invalid address entered"
        }
    }
    if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){
        return "Invalid email address"
    }
    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password))){
        return "Invalid Password"
    }
    return ""
}

export const validateProducts = (name,price,imageLink)=>{
    if(!(/^[a-zA-Z0-9\s\-]+$/.test(name))){
        return "Invalid Product Name"
    }
    if(!(/^\d+(\.\d{1,2})?$/.test(price))){
        return "Invalid Product Price"
    }
    if(!(/\.(jpg|jpeg|png|gif|bmp)$/i.test(imageLink))){
        return "Invalid Image Link"
    }
}

export default validateInput;