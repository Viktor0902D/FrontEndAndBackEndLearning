export const isValidEmail=(email)=>{
    if (!email.includes('@')) {
        return false;
    }
    return true;
}

export const isValidPassword=(pw)=>{
    if(pw.length<8){
        return false;
    }
    return true;
}