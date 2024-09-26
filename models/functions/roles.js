const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const userchema = new mongoose.Schema({
  function_id: {
    type: ObjectId,
    required: true,
    index: true
  },
  group_user_id:{
    type: ObjectId,
    required: true,
    index: true
  }
});

const Roles = mongoose.model("Roles", userchema);
module.exports = Roles;

const init = async () => {
  const count = await Roles.estimatedDocumentCount();
  if (count == 0) {
    const array = [
      // tài khoản
      {
        _id: new ObjectId("668653c9e55c5173ec41c919"),
        function_id: new ObjectId("66746193cb45907845239f36"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c91b"),
        function_id: new ObjectId("66746193cb45907845239f37"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c91d"),
        function_id: new ObjectId("66746193cb45907845239f38"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c91f"),
        function_id: new ObjectId("66746193cb45907845239f50"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c921"),
        function_id: new ObjectId("66746193cb45907845239f39"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c923"),
        function_id: new ObjectId("66746193cb45907845239f3a"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c925"),
        function_id: new ObjectId("66746193cb45907845239f4a"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },

      // quản lý dịch vụ
      {
        _id: new ObjectId("668653c9e55c5173ec41c927"),
        function_id: new ObjectId("667463d04bede188dfb46d76"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c929"),
        function_id: new ObjectId("667463d04bede188dfb46d77"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c92b"),
        function_id: new ObjectId("667463d04bede188dfb46d78"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },

      // công trình
      {
        _id: new ObjectId("668653c9e55c5173ec41c92d"),
        function_id: new ObjectId("667463d04bede188dfb46d7b"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c92f"),
        function_id: new ObjectId("667463d04bede188dfb46d7c"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c931"),
        function_id: new ObjectId("667463d04bede188dfb46c7c"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c933"),
        function_id: new ObjectId("667463d04bede188dfb46d7d"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c935"),
        function_id: new ObjectId("667463d04bede188dfb46d7e"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c937"),
        function_id: new ObjectId("667463d04bede188dfb46d7f"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },

      // loại dịch vụ
      {
        _id: new ObjectId("668653c9e55c5173ec41c82d"),
        function_id: new ObjectId("667463d04bede188dfb46d79"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c93f"),
        function_id: new ObjectId("667463d04bede188dfb46d80"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41d931"),
        function_id: new ObjectId("667463d04bede188dfb46d81"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },

      // dịch vụ
      {
        _id: new ObjectId("668653c9e55c5173ec41c957"),
        function_id: new ObjectId("66746678f7f723b779b1b05f"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c959"),
        function_id: new ObjectId("66746678f7f723b779b1b060"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c95b"),
        function_id: new ObjectId("66746678f7f723b779b1b061"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
  
      // trạng thái
      {
        _id: new ObjectId("668653c9e55c5173ec41c97d"),
        function_id: new ObjectId("667467eb263fb998b9925d3a"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c97f"),
        function_id: new ObjectId("667467eb263fb998b9925d3b"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("668653c9e55c5173ec41c981"),
        function_id: new ObjectId("667467eb263fb998b9925d3c"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },

      // báo cáo
      {
        _id: new ObjectId("667467eb263fb998b9925d42"),
        function_id: new ObjectId("667467eb263fb998b9925d47"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d44"),
        function_id: new ObjectId("667467eb263fb998b9925e43"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d43"),
        function_id: new ObjectId("667467eb263fb998b9925d48"),
        group_user_id: new ObjectId("6684196550a34692df218d8d"),
      },
    ];
    await Roles.insertMany(array);
  }
}

init()