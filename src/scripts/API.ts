import { encode as base64_encode } from 'base-64'

//export a module
export async function setAPIFromData(path: string, resultFunc: Function): Promise<any> {
    const password = localStorage.getItem("password");
    const netObj = {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': base64_encode("admin:" + password)
        }
    }
    return new Promise(function (resolve) {
        fetch("http://localhost:5000/api/" + path, netObj).then(response => response.json())
            .then(function (data) {
                resultFunc(data.data);
                resolve(null);
            });
    });
}