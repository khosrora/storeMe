const yup = require('yup');


exports.categoriesValidation = yup.object().shape({
    name: yup.string().required("وارد کردن عنوان الزامی است"),
    image: yup.string().required("وارد کردن عکس الزامی است"),
});