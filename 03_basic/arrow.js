const user = {
    username : "Aayush",
    price : 999,

    welcomeMsg : function(){
        // console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMsg();
user.username = "Perfect";
user.welcomeMsg();

console.log(this);