import axios from "axios";

export const imageUpload = async (imageData) =>{
    const fromData = new FormData();
    fromData.append('image', imageData);
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API_KEY}`, fromData)
     console.log(data);
     return data
}