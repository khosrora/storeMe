const Category = require("../categories/model/Categories")
const Seller = require("./model/Seller")


// ? desc ==> create seller
// ? path ==> seller/create

exports.create = async (req, res) => {
    try {
        // ! get items 
        const { name, label, categoryId } = req.body;
        // ! categories find
        const category = await Category.findOne({ _id: categoryId });
        if (!category) return res.status(400).json({ message: "دسته بندی مورد نظر ثبت نشده است" });
        // ! validate
        if (!name || !categoryId) return res.status(400).json({ message: "لطفا تمام مقادیر را وارد کنید" })
        // ! create seller
        await Seller.create({
            name, label, category: categoryId
        })
        // ! send message to client
        return res.status(200).json({ message: "فروشنده با موفقیت ثبت شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


// ? desc ==> getAllseller 
// ? path ==> seller/getAllseller
exports.getAllseller = async (req, res) => {
    try {
        // ! find items
        const sellers = await Seller.find().populate("category");
        // ! send items to client
        return res.status(200).json(sellers)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}