import { encode as base64_encode } from 'base-64'

//export a module
export async function setAPIFromData(path: string, resultFunc: Function): Promise<any> {
    const password = localStorage.getItem("password");
    let url="https://api.willfarhat.com:5000/";
    if (window.location.hostname==="localhost") url="http://localhost:5000/";
    const netObj = {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': base64_encode("admin:" + password)
        }
    }
    return new Promise(function (resolve) {
        fetch(url + path, netObj).then(response => response.json())
            .then(function (data) {
                resultFunc(data.data);
                resolve(null);
            });
    });
}