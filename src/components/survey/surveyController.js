const Category = require('../categories/model/Categories');
const Survey = require('./model/Survey');


// ? desc ==> create survey
// ? path ==> survey/create
exports.create = async (req, res) => {
    try {
        // ! get items ==> array
        for (const i of req.body) {
            // ! check for category
            const categories = await Category.findOne({ _id: i.category });
            if (!categories) {
                return res.status(400).json({ message: "دسته بندی مورد نظر وجود ندارد" })
            }
            if (categories.parent == null) {
                return res.status(400).json({ message: "دسته بندی مورد نظر درست انتخاب نشده است باید از دسته دوم انتخاب شود" })
            }
            if (!await Survey.findOne({ category: i.category, name: i.name })) {
                await Survey.create({
                    category: i.category,
                    name: i.name,
                    label: i.label
                })
            }
        }
        return res.status(200).json({ message: "موارد امتیاز دهی دسته بندی ثبت شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> get all survey
// ? path ==> survey/getAllSurvey
exports.getAllSurvey = async (req, res) => {
    try {
        // ! find all survey && categories
        const surveys = await Survey.find().populate("category");
        // ! send to client
        res.status(200).json(surveys)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

