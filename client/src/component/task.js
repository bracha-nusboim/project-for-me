import react from 'react'
import axios from 'axios'
function getAllEmloye(){
    axios.get('http://localhost:9000/getAllEmploye').then(
        res=>data=res,
        err=>console.log(err)
    )
    if(data)
      return data
}


export default getAllEmloye;