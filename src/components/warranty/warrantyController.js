const Warranty = require("./model/Warranty")


// ? desc ==> create warranty
// ? path ==> warranty/create
exports.create = async (req, res) => {
    try {
        // ! get items
        const { name, label } = req.body;
        // ! validate
        if (!name || !label) return res.status(200).json({ message: "تمام مقادیر را وارد کنید" })
        // ! find warranty
        const warr = await Warranty.findOne({ name });
        if (warr) return res.status(200).json({ message: "این گارانتی ثبت شده است" })
        // ! create warranty
        await Warranty.create({
            name, label
        })
        // ! send message to client
        return res.status(200).json({ message: "گارانتی مورد نظر ثبت شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// ? desc ==> getAllWarranty
// ? path ==> warranty/getAllWarranty
exports.getAllWarranty = async (req, res) => {
    try {
        // ! find warranties
        const warranties = await Warranty.find()
        // ! send items to client
        return res.status(200).json(warranties)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}