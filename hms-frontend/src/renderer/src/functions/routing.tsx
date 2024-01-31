export function routing(username:string):any{
    switch(username.charAt(0) && username.charAt(1)){
        case 'D' && 'C':{
            window.location.href = '/Doctor'
            break;
    }
        case 'N' && 'U':{
            window.location.href = '/Nurse'
            break;
    }   
        case 'F' && 'D':{
            window.location.href = '/Frontdesk'
        }
    }
};