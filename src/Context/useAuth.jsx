import { use } from "react"
import { AuthContext } from "./AuthContext"

export const useAuth = () =>{
    const authInfo = use(AuthContext)
    return authInfo
}