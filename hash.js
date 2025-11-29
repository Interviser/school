const bcrypt = require('bcrypt');

const firstHash = async (password) => {
  const  hash="$2b$12$q9VyEkWp3fW8rHdbgdd8/OmQFnbFg5j5loOqdQ7Pdray0Ck0K3txS"
   const comparepassword = await bcrypt.compare(password,hash)
   if(comparepassword){
    return console.log("good job")
   }
   console.log(érrorn)
}
firstHash('myPlaintextPassword');