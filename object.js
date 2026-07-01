const jsUser = {
    name : "alamgeer",
    age : 19,
    location : "Hyd",
    email : "alam@gmail.com",
    isLoggedIn : false,
}

console.log(jsUser.email)
console.log(jsUser["email "])

jsUser.email = "exampl@gmail.com"
console.log(jsUser["email"])

jsUser.greeting = function(){
    console.log("hello my friends")
}
console.log(jsUser.greeting())


console.log(jsUser)

console.log(Object.keys(jsUser))
console.log(Object.values(jsUser))