const validate=require("mongoose-validator")

exports.nameValidator=[
    validate({
        validator:"isLength",
        arguments:[3,50],
        message:"Name should be between 3 and 50 characters"
    }),
    validate({
        validator:"isAlpha",
        message:"Name should contain only alphabets"
    })
]

exports.emailValidator=[
    validate({
        validator:"isEmail",
        message:"Email is not valid"
    })
    
]

exports.passwordValidator=[
    validate({
        validator:"isLength",
        arguments:[8,50],
        message:"Password should be between 8 and 50 characters"
    }),
    validate({
        validator:"matches",
        arguments:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message:"Password should contain atleast one alphabet and one number"
    })
]

exports.phoneValidator=[
    validate({
        validator:"isLength",
        arguments:[10,10],
        message:"Phone number should be 10 digits"
    }),
    validate({
        validator:"isNumeric",
        message:"Phone number should contain only numbers"
    })
]

exports.addressValidator=[
    validate({
        validator:"isLength",
        arguments:[3,50],
        message:"Address should be between 3 and 50 characters"
    })
]

exports.postValidator=[
    validate({
        validator:"isLength",
        arguments:[3,50],
        message:"Post should be between 3 and 50 characters"
    })
]

