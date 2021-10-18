require('dotenv').config({
    path: "./config/.env"
});
const express = require('express');
const connectDB = require('./config/DB');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// ! express config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// !data base config
connectDB();

// * routes
app.use("/user", require('./src/components/user/userRouter'));
app.use("/multimedia", require('./src/components/multimedia/multimediaRouter'));
app.use("/category", require('./src/components/categories/categoriesRouter'));
app.use("/survey", require('./src/components/survey/surveyRouter'));
app.use("/product", require('./src/components/products/producRouter'));
app.use("/seller", require('./src/components/seller/sellerRouter'));
app.use("/warranty", require('./src/components/warranty/warrantyRouter'));
app.use("/slider", require('./src/components/slider/sliderRouter'));
app.use("/banner", require('./src/components/banner/bannerRouter'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})