const db = require('../models/model');
const User = db.users;


const addUser = async (req, res) => {
    try {
        const data = await User.create({ name: "ayush", email: "ayush@gmail.com" });
        // await data.save();
        data.name = "Ada";
        // the name is still "Jane" in the database
        data.reload();
        await data.save();
        console.log(data.name);
        res.status(200).send(data);
    } catch (error) {
        res.send(error.message);
    }
}

const crud =async (req,res) => {
    try {
        //create
        // const data = await User.create({name:"ayush",email:"ayush@gmail.com",gender:"male"});

        //update
        // const data = await User.update({name:"hemil",email:"hemil@gmail.com"},{
        //     where:{
        //         id:55
        //     }
        // })

        //delete
        // const data = await User.destroy({
        //     where:{
        //         id:57
        //     }
        // })

        //truncate
        // const data = await User.destroy({
        //     truncate:true
        // })

        //bulck
        // const data = await User.bulkCreate([
        //         {name:"fully",email:"fully@gmail.com",gender:"male"},
        //         {name:"fully2",email:"fully2@gmail.com",gender:"female"},
        //         {name:"fully3",email:"fully3@gmail.com",gender:"male"},
        //         {name:"fully4",email:"fully4@gmail.com",gender:"female"},
        //         {name:"fully5",email:"fully5@gmail.com",gender:"male"},
        //         {name:"fully6",email:"fully6@gmail.com",gender:"female"},
        //         {name:"fully7",email:"fully7@gmail.com",gender:"male"},
        //         {name:"fully8",email:"fully8@gmail.com",gender:"fdmale"},
        //         {name:"fully9",email:"fully9@gmail.com",gender:"male"},
        //     ]);

        //find 
        const data = await User.findAll();
        let response = {
            data:data
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
}
module.exports = {addUser,crud};
