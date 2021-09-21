import { getAPIAuth } from './APIAuth';
import { getAPIUrl } from './APIUrl';

//export a module
export async function setAPIFromData(path: string, resultFunc: Function, ): Promise<any> {
    const url=getAPIUrl();
    const netObj = {
        method: 'GET',
        withCredentials: true,
        headers: getAPIAuth()
    }
    return new Promise(function (resolve) {
        fetch(url + path, netObj).then(response => response.json())
            .then(function (data) {
                if (path==="art") console.log(url+data.data);
                if (data.data!==false) resultFunc(data.data);
                resolve(null);
            });
    });
}