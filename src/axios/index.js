import axios from 'axios';
const url='http://localhost:5001'

export const addRes = async (name,link,rating,room,contri)=>{
    await axios.post(`${url}/users/resources`, {
        name,link,rating,room,contri
    })
}
export const getRes = async (room)=>{
    console.log(room)
   return await axios.get(`${url}/users/resources/${room}`)
}