const express=require('express')
const app=express()
prefix=["bonfire", "cardio", "case", "character", "bonsai"]
app.route('/prefix/:prefix').get((req,res)=>{
    var param=req.params.prefix
    for( var i=0;i<prefix.length;i++){
        if(param === prefix[i]){
            const responseData = {
                
              Data:{
                "keyword": param,
                "Status":"Found"
                  
              }
             
            }
             
            const jsonContent = JSON.stringify(responseData);
            res.send(jsonContent);
          }else{
            const data={
                Data:{
                    "keyword":param,
                    "status":"Not found"
                }
            }
            const content = JSON.stringify(data)
            res.send(content)
          }
        }
    }
)
app.listen(5000)