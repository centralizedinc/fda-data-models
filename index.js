
var account = {
    auto_id: {
        type: Number
    },
    account_id: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    name: {
        first: {
            type: String,
            required: [true, 'First Name is a required field']
        },
        middle: {
            type: String
        },
        last: {
            type: String,
            required: [true, 'Last Name is a required field']
        },
        display: {
            type: String
        }
    },
    company:{
        name: String,
        owner: String,
        tin: String,
        address:{
            address:String,
            region: String,
            province: String,
            city: String,
            zipCode: String
        }
    },
    identity:{
        id:String,
        id_number: String,
        expiry_date: Date,
        attachment:String,
    },
    tin:String,
    position: {
        type: String
    },
    groups: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is a required field']
    },
    contact: {
       mobile:String,
       phone:String,
    },
    username: {
        type: String,
        required: [true, 'Username is a required field'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is a required field']
    },
    date_created: {
        type: Date,
        default: new Date()
    },
    date_modified: {
        type: Date,
        default: new Date()
    },
    session_token: {
        type: String
    },
    status:{
        type:Number,
        default:'0'
        /**
         *  0 - Registered (Awaiting Confirmation)
         *  1 - Confirmed (Active but no active FDA License)
         *  2 - Active
         *  3 - Suspended
         *  4 - Inactive (For Deletion)
         */
    }
}

module.exports = {account}