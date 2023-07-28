const url="https://api.example.com";
export const fetchData=()=>{

   return fetch('${url}/data')
    .then((Response)=Response.json())
    .catch((Error)=>{
        throw Error;

    })
};
export const postData=(data)=>{
    return fetch('${url}/data',{
        method: "post",
        headers:{
            "content-type" :"application/json",
        },
        body:JSON.stringify(data)
    }
   
    ).then((Response)=Response.json())
    
}
export const updateData=(data)=>{
    return fetch('${url}/data',{
        method:"put",
        headers:{
            "content-type" :"application/json",
        },
        body:JSON.stringify(data)
    }
   
    ).then((Response)=Response.json())
    }
