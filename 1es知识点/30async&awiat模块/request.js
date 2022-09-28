function $ajax({ url = '/', method = 'GET', data = {}, timeOuT = 1000 }) {
    return new Promise((resolve, reject) => {
        var params = '';
        for (var x in data) {
            params += `${x}=${data[x]}&`
        }
        params = params.slice(0, params.length - 1);
        method = method.toUpperCase();

        var xhr = new XMLHttpRequest();
        if (method === 'GET') {
            url = url + '?' + params;
            xhr.open(method, url, true);
            xhr.send();
        }
        if (method === 'POST') {
            xhr.open(method, url, true)
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(params)
        }
        // 0 1 2 3 4 

        xhr.onreadystatechange = function (data) {
            // 2 3 4 
            if (xhr.readyState === 4 && xhr.status == 200) {
                setTimeout(function () {
                    resolve(xhr.responseText)
                }, timeOuT)
            }
        }
    })
}