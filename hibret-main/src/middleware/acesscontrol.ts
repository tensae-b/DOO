import { Access } from "payload/config";
import Users from "../collections/Users";
export const isAdmin:Access = ({req:{user},id}) => {
    if (user.role === "Admin") {
        return true
      
    } 
    return user?.id==id
  }
  
  export const isSectionHead :Access = ({req:{user},id}) => {
    if (user.role === "Section Head") {
        return true
      
    } 
    return user?.id==id
  }
  
  export const isChiefCreditOfficer :Access = ({req:{user},id}) => {
    if (user.role === "Chief Credit Officer") {
        return true
      
    } 
    return user?.id==id
  }
  
  export const isDepartmentDirector :Access = ({req:{user},id}) => {
    if (user.role === "Department Director") {
        return true
      
    } 
    return user?.id==id
  }
  
  export const isDivisionManager :Access = ({req:{user},id}) => {
    if (user.role === "Division Manager") {
        return true
      
    } 
    return user?.id==id
  }
  