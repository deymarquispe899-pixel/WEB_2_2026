const postData=()=>{
    const newPost={
        titulo:"nuevo post",
        descripcion:"es un nuevo post creado",
        fecha: new Date().toISOString()
    };
    fetch(API_URL,{
        method:"POST",
        headers:{"Content-type":"application/jason",
            "Accept":"application/json"

        },
        body:JSON.stringify(newPost)
    }).then(response=>{
        if (Response.ok){
            throw new Error(`http error estado${response.status}`);
        }
        return response.json();

    })
    .then(data=>showResult(data))
    .catch(error=>showResult(error.message,true));
    
}