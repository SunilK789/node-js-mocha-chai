const User = require("../model/User");

exports.postuserinfo = async (req, res) => {
    try {
        const {name, email, age} = req.body;
        if(!name){
            return res.status(422).json({error:"Please add your name"});
        }
        if(!email){
            return res.status(422).json({error:"Please add your email"});
        }
        if(!age){
            return res.status(422).json({error:"Please add your age"});
        }
        const userInfo = new User({
            name, 
            email, 
            age
        });

        const userPostResult = await User.create(userInfo);
        res.status(201).json(userPostResult);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: "Something went wrong"});
    }
};

exports.getUserinfo = async (req, res) => {
    try {
        const userList = await User.find({}).sort({date: "DESC"});
        res.status(200).json(userList);
    } catch (error) {
        res.status(400).json({error: "User not found!"});
    }
}

exports.getsingleuser = async (req, res) => {
    try {
        var userQuery = {_id: req.params.id};
        const user = await User.findOne(userQuery);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: "User not found!"});
    }
}

exports.deleteuser = async (req, res) => {
    try {
        var deleteQuery = {_id: req.params.id};
        const deletedUser = await User.findByIdAndDelete(deleteQuery);

        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(404).json({error: "User not found!"});
    }
}

exports.updateuser = async (req, res) => {
    try {
        const {name, email, age} = req.body;
        var updateQuery = {_id: req.params.id};
        const user = await User.findByIdAndUpdate(updateQuery, {
            $set: {name, email, age}
        });

        const updatedUser = await User.findOne(updateQuery);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({error: "User not found to update!"});
    }
}