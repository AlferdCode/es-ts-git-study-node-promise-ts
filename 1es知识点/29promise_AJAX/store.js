function getDataStore(query){ // {aa:11}
    return getData(query).then(res=>{
        console.log(res,'store');
        return res
    })
}