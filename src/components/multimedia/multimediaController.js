const MultiMedia = require('./model/multimedia');


// ? desc ==> multimedia
// ? path ==> multimedia/create
exports.create = async (req, res) => {
    try {
        // ! get user && image
        const image = req.file;
        //! create multi media
        await MultiMedia.create({
            name: image.filename,
            format: image.mimetype,
            dir: image.path
        });
        res.status(200).json({ message: "عکس شما ارسال شد" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

exports.getAllMultiMedia = async (req, res) => {
    try {

        // ! get media
        const media = await MultiMedia.find()
        // ! send media
        return res.status(200).json({
            media
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}