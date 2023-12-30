export function routing(username:string):any{
    if (username.charAt(0) == 'D' && username.charAt(1)=='C'){
        window.location.href = '/doctor'
    }else if(username.charAt(0)=='N' && username.charAt(1)=='U'){
        window.location.href = '/nurse'
    }else{
        window.location.href = '/doctor'
    }
};