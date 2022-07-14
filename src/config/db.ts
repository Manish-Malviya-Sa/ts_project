import mongoose,{connect} from 'mongoose'

function connects(){
    return connect('mongodb://localhost:27017/Demo')
    .then(()=>{
        console.log('database connected successfully')        
    })
    .catch((error:any)=>{
        console.log(error);
    })
}

export default connects;