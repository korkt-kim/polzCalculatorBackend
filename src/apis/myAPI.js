const myAPI = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([{
                id:1,
                name:'SAM',
                email:'korkt1.kim@samsung.com'  
            },{
                id:2,
                name:'SUNG',
                email:'korkt2.kim@samsung.com'  
            }])
        },2000)
    })
}

export default myAPI;