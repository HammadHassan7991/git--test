const fs = require('fs');

const deleteFile = (filePath,) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            return err;

        }
        else {
            return undefined;
        }
    });
}

exports.deleteFile = deleteFile;