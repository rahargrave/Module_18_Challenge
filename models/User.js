const { Schema, model } = require('mongoose');

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
       toJSON: {
         virtuals: true,
       },
       id: false
    }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;

