function $ajax({ url = '/', method = 'GET', data = {},timeOuT=1000 }) {
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

        xhr.onreadystatechange = function (data) {
            setTimeout(function () {
                if (xhr.readyState === 4 && xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(data)
                }
            }, timeOuT)


        }
    })
}