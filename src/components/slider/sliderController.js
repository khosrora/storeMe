const Slider = require("./model/Slider")


// ? desc ==> create slider
// ? path ==> slider/create
exports.create = async (req, res) => {
    try {
        // ! get items 
        const { name, image, checked } = req.body;
        // !validate
        if (!name || !image) return res.status(400).json({ message: "لطفا تمام مقادیر را کامل کنید" })
        // !create Slider
        await Slider.create({
            name, image, isShow: checked
        })
        // ! send message to client
        return res.status(200).json({ message: "اسلایدر مورد نظر ساخته شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> get all sliders
// ? path ==> slider/getAllSliders
exports.getAllSliders = async (req, res) => {
    try {
        // ! find sliders 
        const sliders = await Slider.find().populate("image")
        // ! send items to client
        return res.status(200).json(sliders)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}