const fs = require('fs');
exports.unLink = async (path) => {
    await fs.unlinkSync(path);
}