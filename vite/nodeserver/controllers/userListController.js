'use strict'

var mongoose = require('mongoose')
User = mongoose.model('Users')

exports.listAllUsers = function(req,res){
    var query = {sort: {firstName: 1}}
    User.find({}, null, query, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}
exports.createAuser = function(req,res){
    var newUser = new User(req.body)
    console.log(req.body)
    newUser.save(function(err, user){
        if(err) throw err
        res.json(user)
    })
}
exports.readAUser = function(req,res){
    console.log(req.params.userId)
    User.findById(req.params.userId, function(err,user){
        if(err) throw err
        res.json(user)
    })
}

exports.deleteAuser = function(req,res){
    console.log(req.params.userId)
    User.findByIdAndRemove(req.params.userId, function(err, user){
        if(err) throw err
        const response = {
            message: "Delete user id : " + req.params.userId,
            id: user._id

        }
        res.json(response)
    })
}

exports.updateAUser = function(req,res){
    console.log(req.params.userId)
    var newUser = {}
    newUser = req.body
    User.findByIdAndUpdate(req.params.userId, newUser, {new: true}, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    }) 
}

