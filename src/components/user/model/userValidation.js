const yup = require('yup');


exports.userValidation = yup.object().shape({
    phone: yup.string().required("وارد کردن شماره همراه الزامی است")
        .matches("09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}", "شماره همراه خود را چک کنید"),
    password: yup.string().required("وارد کردن کلمه عبور الزامی است")
        .min(6, "کلمه عبور شما نمیتواند کمتر از 6 کاراکتر باشد")
        .max(50),
});