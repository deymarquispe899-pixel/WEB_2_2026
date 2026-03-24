const deleteData=()=>{
    fetch(`${API_URL}/1`,{
        method:"DELETE"
    }).then(response=>{
        if (!response.ok){
            throw new Error (`http error estado ${response.status}`)
        }
        showResult({
            message:"post con el id 1 eliminado",
            status:"response.statis "
        })

    })
    .catch(error=>(error.message,true));
}