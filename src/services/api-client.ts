import axios from "axios";


export default axios.create ({
    baseURL : "https://api.rawg.io/api",
   params : {
    key : 'f16a1a3fde8546c1bfd8dff071d3b322'
   }
})