import { encode as base64_encode } from 'base-64'

export function getAPIAuth(){
    const password = localStorage.getItem("password");
    return {
        'Authorization': base64_encode("admin:" + password)
    }
}