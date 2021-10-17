const Category = require("./model/Categories")
const Brand = require("./model/Brand")

// * helper
const { unLink } = require("../../helper/unLink");

// ? desc ==> create category
// ? path ==> category/create
exports.create = async (req, res) => {
    const errors = [];
    try {
        // ! validation
        await Category.categoriesValidate(req.body);
        // ! get items
        const { name, label, image, parent } = req.body;
        // ! find category
        const categories = await Category.findOne({ name });
        if (categories) return res.status(400).json({ message: "این دسته بندی قبلا ثبت شده است" })
        // ! create category
        await Category.create({
            name, label, image, parent
        });
        // ! send message to client
        return res.status(200).json({ message: "دسته بندی با موفقیت ثبت شد" });
    } catch (err) {
        errors.push({
            error: err.message
        })
        return res.status(500).json({ message: errors })
    }
}

// ? desc ==> get all categories
// ? path ==> category/getAllCategories
exports.getAllCategories = async (req, res) => {
    try {
        // !find categories
        const categories = await Category.find().populate("parent").populate("image");
        // ! send categories to client
        return res.status(200).json({ categories });
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


// ? desc ==> create category
// ? path ==> category/create
exports.createBrand = async (req, res) => {
    const errors = [];
    try {
        // ! validation
        await Brand.brandValidate(req.body);
        // ! get items
        const { name, label, category } = req.body;
        // ! find category
        const brands = await Brand.findOne({ name });
        if (brands) return res.status(400).json({ message: "این برند قبلا ثبت شده است" })
        // ! create category
        await Brand.create({
            name,
            label,
            image: req.file.path,
            categories: category
        });
        // ! send message to client
        return res.status(200).json({ message: " برند دسته بندی با موفقیت ثبت شد" });
    } catch (err) {
        await unLink(req.file.path)
        errors.push({
            error: err.message
        })
        return res.status(500).json({ message: errors })
    }
}

// ? desc ==> get all brand
// ? path ==> category/getAllBrands
exports.getAllBrands = async (req, res) => {
    try {
        // !find brands
        const brands = await Brand.find().populate("categories");
        // ! send categories to client
        return res.status(200).json({ brands });
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}