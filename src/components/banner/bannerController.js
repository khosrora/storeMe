const Banner = require("./model/Banner");
const Category = require("../categories/model/Categories")
const MultiMedia = require("../multimedia/model/multimedia")


// ? desc ==> create banner
// ? path ==> banner/create
exports.create = async (req, res) => {
    try {
        // ! get items 
        const { categoryId, imageId, checked } = req.body;
        // !validate
        if (!categoryId || !imageId) return res.status(400).json({ message: "لطفا تمام مقادیر را کامل کنید" })
        // ! find category
        const category = await Category.find({ _id: categoryId });
        if (category.parent) return res.status(400).json({ message  : "دسته بندی مورد نظر درست انتخاب نشده است"})
        if (!category) return res.status(400).json({ message: "دسته بندی مورد نظر ثبت نشده است" });
        // ! find image
        const image = await MultiMedia.find({ _id: imageId })
        if (!image) return res.status(400).json({ message: "عکس مورد نظر ثبت نشده است" });
        // !create banner
        await Banner.create({
            image: imageId,
            category: categoryId,
            isShow: checked
        })
        // ! send message to client
        return res.status(200).json({ message: "بنر مورد نظر ساخته شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> get all banner
// ? path ==> banner/getAllBanner
exports.getAllBanner = async (req, res) => {
    try {
        // ! get all banners 
        const banners = await Banner.find().populate("category").populate("image");

        // ! send message to client
        return res.status(200).json(banners)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}