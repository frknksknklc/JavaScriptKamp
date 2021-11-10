import { BaseLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User Component Yüklendi")

let logger1 = new BaseLogger;
let userService = new UserService(logger1);

let user1 = new User(1,"Furkan","Keskinkilic","Ankara");
let user2 = new User(2,"Baran","Mugla","Denizli");


userService.add(user1)
userService.add(user2)

console.log(userService.list())

userService.getById(1)
console.log(userService.getById(2))


let customer = {id:1, firstName:"Furkan"}
//prototyping
customer.lastName = "Keskinkilic"

console.log(customer.lastName)