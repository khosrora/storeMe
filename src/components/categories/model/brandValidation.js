const yup = require('yup');


exports.brandValidation = yup.object().shape({
    name: yup.string().required("وارد کردن عنوان الزامی است"),
    category: yup.array().required("وارد کردن دسته بندی الزامی است"),
});