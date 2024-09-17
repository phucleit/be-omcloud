const mongoose = require("mongoose");
const sha512  = require("js-sha512");

const userchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  group_user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "GroupUsers",
  },
  check_send_pass: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

const Users = mongoose.model("Users", userchema);
module.exports = Users;

const init = async () =>{
  const count = await Users.estimatedDocumentCount()
  if(count == 0){
    await new Users({
      display_name: "Omcloud Admin",
      username: "admin",
      password: sha512('adminom@'),
      phone: "0123456789",
      email: "omcloud@gmail.com",
      group_user_id: "6684196550a34692df218d8d",
      check_send_pass: false
    }).save()
  }
}
init()