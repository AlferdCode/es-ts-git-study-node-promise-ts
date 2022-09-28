function getDataStore(){ // {aa:11}
    return getData().then(res=>{
        console.log(res,'store');
        return res
    })
}