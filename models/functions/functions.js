const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId

const userchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  fuction_parent_id:{
    type: ObjectId,
    default: null
  }
});

const Functions = mongoose.model("Functions", userchema);
module.exports = Functions;

const init = async () => {
  const count = await Functions.estimatedDocumentCount()
  if (count == 0) {
    const array = [
      // tài khoản
      {
        _id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Tài khoản",
      },
      {
        _id: new ObjectId("66746193cb45907845239f36"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Tạo tài khoản mới",
      },
      {
        _id: new ObjectId("66746193cb45907845239f37"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Reset mật khẩu",
      },
      {
        _id: new ObjectId("66746193cb45907845239f38"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Sửa tài khoản",
      },
      {
        _id: new ObjectId("66746193cb45907845239f50"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Xóa tài khoản",
      },
      {
        _id: new ObjectId("66746193cb45907845239f39"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Tạo nhóm người dùng",
      },
      {
        _id: new ObjectId("66746193cb45907845239f3a"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Sửa nhóm người dùng",
      },
      {
        _id: new ObjectId("66746193cb45907845239f4a"),
        fuction_parent_id: new ObjectId("667460e3d19aa9fcecc69fa6"),
        name: "Xóa nhóm người dùng",
      },

      // quản lý dịch vụ
      {
        _id: new ObjectId("667463d04bede188dfb46d75"),
        name: "Quản lý dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d76"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d75"),
        name: "Tạo dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d77"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d75"),
        name: "Sửa dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d78"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d75"),
        name: "Xóa dịch vụ",
      },

      // công trình
      {
        _id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Công trình",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d7b"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Tạo công trình",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d7c"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Sửa công trình",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46c7c"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Xóa công trình",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d7d"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Thêm lịch sử dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d7e"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Cập nhật trạng thái",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d7f"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb46d7a"),
        name: "Báo cáo công trình",
      },

      // loại dịch vụ
      {
        _id: new ObjectId("667463d04bede188dfb4610a"),
        name: "Loại dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d79"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb4610a"),
        name: "Tạo loại dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d80"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb4610a"),
        name: "Sửa loại dịch vụ",
      },
      {
        _id: new ObjectId("667463d04bede188dfb46d81"),
        fuction_parent_id: new ObjectId("667463d04bede188dfb4610a"),
        name: "Xóa loại dịch vụ",
      },

      // dịch vụ
      {
        _id: new ObjectId("667464b5500bf3ad04c24f47"),
        name: "Dịch vụ",
      },
      {
        _id: new ObjectId("66746678f7f723b779b1b05f"),
        fuction_parent_id: new ObjectId("667464b5500bf3ad04c24f47"),
        name: "Tạo dịch vụ",
      },
      {
        _id: new ObjectId("66746678f7f723b779b1b060"),
        fuction_parent_id: new ObjectId("667464b5500bf3ad04c24f47"),
        name: "Sửa dịch vụ",
      },
      {
        _id: new ObjectId("66746678f7f723b779b1b061"),
        fuction_parent_id: new ObjectId("667464b5500bf3ad04c24f47"),
        name: "Xóa dịch vụ",
      },

      // trạng thái
      {
        _id: new ObjectId("667467eb263fb998b9925d36"),
        name: "Trạng thái",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d3a"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d36"),
        name: "Tạo trạng thái",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d3b"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d36"),
        name: "Sửa trạng thái",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d3c"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d36"),
        name: "Xóa trạng thái",
      },

      // báo cáo
      {
        _id: new ObjectId("667467eb263fb998b9925d46"),
        name: "Báo cáo",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d47"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d46"),
        name: "Tạo báo cáo",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925e43"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d46"),
        name: "Xóa báo cáo",
      },
      {
        _id: new ObjectId("667467eb263fb998b9925d48"),
        fuction_parent_id: new ObjectId("667467eb263fb998b9925d46"),
        name: "Xuất báo cáo",
      },
    ]
    await Functions.insertMany(array)
  }
}
init()