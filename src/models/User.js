const { Schema, model} = require('mongoose');
const bcryptjs = require('bcryptjs')

const UserSchema = new Schema({
    usuario: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
}, {
        timestamps: true
    });

UserSchema.method.encrypPassword = async (password) =>{
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
};

UserSchema.method.matchPassword = async (password) => {
    return await bcrypt.compare(password, this.password );
}

module.exports = model('User', UserSchema);