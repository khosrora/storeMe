const Specs = require('./model/Specs');
const Category = require('../categories/model/Categories');
const DetailSpecs = require('./model/DetailSpecs');


// ? desc ==> create specs product
// ? path ==> product/create specs
exports.createSpecs = async (req, res) => {
    try {
        // ! get items && category
        const { specs, categoryId, label } = req.body;
        const category = await Category.findOne({ _id: categoryId })
        // ! checked categories 
        if (!category) {
            return res.status(400).json({ message: "دسته بندی مورد نظر ثبت نشده است" })
        }
        if (category.parent == null) {
            return res.status(400).json({ message: "دسته بندی را از رده دوم انتخاب کنید" })
        }
        // ! validate
        if (!specs || !categoryId) {
            return res.status(400).json({ message: "لطفا تمام اطلاعات را چک کنید" })
        }
        // ! create specs product
        await Specs.create({
            specs, category: categoryId, label
        })
        // ! send to message client
        res.status(200).json({ message: "مشخصات فنی محصول با موفقیت ثبت شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> get all specs product
// ? path ==> product/getSpecs  
exports.getSpecs = async (req, res) => {
    try {
        // !find specs
        const specs = await Specs.find().populate("category");
        // ! send to client
        res.status(200).json(specs)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> create specs product
// ? path ==> product/create specs
exports.createSpecsDetails = async (req, res) => {
    try {
        // ! get items 
        const { specsId, name, label } = req.body;
        const spec = await Specs.findOne({ _id: specsId });
        // ! checked categories 
        if (!spec) {
            return res.status(400).json({ message: "توضیحات فنی مورد نظر ثبت نشده است" })
        }
        // ! validate
        if (!name || !label) {
            return res.status(400).json({ message: "لطفا تمام اطلاعات را چک کنید" })
        }
        // ! create specs product
        await DetailSpecs.create({
            name, specs: specsId, label
        })
        // ! send to message client
        res.status(200).json({ message: "ریز مشخصات با موفقیت ثبت شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> get all specs details product
// ? path ==> product/get all specsDetails   
exports.getAllSpecsDetails = async (req, res) => {
    try {
        // !find detail specs
        const specsDetails = await DetailSpecs.find().populate("specs");
        // ! send to client
        res.status(200).json(specsDetails)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}