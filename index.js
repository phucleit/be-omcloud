const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require('body-parser');
var morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require('./connectDB');

// check token
const { check_token_api } = require('./middleware/middleware_role');

// login
const loginRoutes = require("./routes/login/login");

// logs action
const actionLogsRoutes = require("./routes/action-logs/action_logs");

// functions
const functionRoutes = require("./routes/roles/functions");

// user
const userRoutes = require("./routes/users/user");
const groupUserRoutes = require("./routes/group-user/group-user");

// loại dịch vụ
const planServicesRoutes = require("./routes/plan-services/plan-services");

// dịch vụ
const servicesRoutes = require("./routes/services/services");

// kỳ bảo trì
const maintenancePeriodRoutes = require("./routes/maintenance-period/maintenance-period");

// trạng thái
const statusRoutes = require("./routes/status/status");

// công trình
const projectsRoutes = require("./routes/projects/projects");

// báo cáo
const reportsRoutes = require("./routes/reports/reports");

dotenv.config();

app.use(bodyParser.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({extended:true, limit:'500mb'})); 

const corsOptions = {
	// origin: 'http://localhost:3056',
  // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // credentials: true,
	// optionsSuccessStatus: 200,
  origin: 'https://dms.om.himep.vn',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(morgan("common"));
app.use('/uploads', express.static('uploads'));

// login
app.use("/login", loginRoutes);

// action logs 
app.use("/action-logs", actionLogsRoutes);

// functions
app.use("/functions", check_token_api, functionRoutes);

// users
app.use("/users", check_token_api, userRoutes);
app.use("/group-user", check_token_api, groupUserRoutes);

// loại dịch vụ
app.use("/plan-services", check_token_api, planServicesRoutes);

// dịch vụ
app.use("/services", check_token_api, servicesRoutes);

// kỳ bảo trì
app.use("/maintenance-period", check_token_api, maintenancePeriodRoutes);

// trạng thái
app.use("/status", check_token_api, statusRoutes);

// công trình
app.use("/projects", check_token_api, projectsRoutes);

// báo cáo
app.use("/reports", check_token_api, reportsRoutes);

const PORT = process.env.PORT || 3123;
app.listen(PORT, () => {console.log(`Server đang chạy... ${PORT}`);});
