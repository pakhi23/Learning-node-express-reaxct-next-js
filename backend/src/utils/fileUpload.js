const multer = require('multer'); // Multer ko import kar rahe hain, jo file upload handle karega.
const path = require('path'); // Path module ko import kar rahe hain, jo file paths ko handle karega.
const fs = require('fs'); // fs module ko import kar rahe hain, jo folder creation aur file handling karega.

// Allowed file types specify kar rahe hain (Sirf image ke liye).
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/jpg']; // Yeh types allow kiye jaenge.

const configureMulter = (moduleName) => { // configureMulter function bana rahe hain jo dynamic folder create karega.
    // Multer storage configuration
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // Request body se module ka naam (dish, recipe, etc.) le rahe hain.
            // Agar contentType request body me pass nahi hota, toh 'others' default rahega.
            const uploadFolder = `public/images/${moduleName}`; // Module ke naam ke basis pe folder set karenge.

            // Folder check kar rahe hain, agar folder exist nahi karta toh naya folder create karenge.
            fs.exists(uploadFolder, (exists) => {
                if (!exists) {
                    // Agar folder nahi hai, toh create kar rahe hain.
                    fs.mkdirSync(uploadFolder, { recursive: true }); // Recursive flag ensure karta hai ki nested folders bhi ban jayein.
                }
                cb(null, uploadFolder); // Final folder path specify kar rahe hain jahan file save hogi.
            });
        },
        filename: (req, file, cb) => {
            // File name ko unique banane ke liye timestamp aur original file name ka combination use karenge.
            const timestamp = Date.now(); // Current timestamp lekar file ko unique banayenge.
            const extension = path.extname(file.originalname).toLowerCase(); // File extension nikaal rahe hain (e.g., .jpg, .png).
            const filename = `${timestamp}-${file.originalname.replace(extension, '')}${extension}`; // Unique file name generate kar rahe hain.

            cb(null, filename); // Final file name set kar rahe hain jisme timestamp ke saath extension bhi include hoga.
        }
    });

    // File type filter define kar rahe hain, sirf allowed types ko hi accept karenge.
    const fileFilter = (req, file, cb) => {
        // Agar file ka mime type allowed file types mein hai toh file ko accept karenge.
        if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
            cb(null, true); // File ko accept kar rahe hain.
        } else {
            // Agar file ka mime type allowed nahi hai, toh error return karenge.
            cb(new Error('Only JPEG, PNG, and JPG files are allowed'), false); // Error message return karte hain.
        }
    };

    // File size limit set kar rahe hain (5MB).
    const fileSizeLimit = 5 * 1024 * 1024; // 5MB ko bytes mein convert kar rahe hain.

    // Multer middleware configuration kar rahe hain.
    return multer({
        storage, // Storage configuration set kar rahe hain jisme folder aur file name defined hain.
        fileFilter, // File filter apply kar rahe hain jo file types ko validate karega.
        limits: { fileSize: fileSizeLimit } // File size limit set kar rahe hain.
    });
};

module.exports = configureMulter; // configureMulter function ko export kar rahe hain taaki use kiya ja sake.
