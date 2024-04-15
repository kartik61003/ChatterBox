import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Validate environment variables
if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD) {
  console.error("Missing environment variables: DB_USERNAME and/or DB_PASSWORD");
  process.exit(1);
}

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${USERNAME}:${PASSWORD}@ac-zm0id5h-shard-00-00.4dys5o3.mongodb.net:27017,ac-zm0id5h-shard-00-01.4dys5o3.mongodb.net:27017,ac-zm0id5h-shard-00-02.4dys5o3.mongodb.net:27017/?ssl=true&replicaSet=atlas-yefycc-shard-0&authSource=admin&retryWrites=true&w=majority`,
  file: (req, file) => {
    if (!file) {
      console.error("Missing file object");
      return null;
    }

    const match = ["image/png", "image/jpg", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      return `${file.originalname}`+`file_${Date.now()}`;
    }

    return {
      bucketName: "fs",
      filename: `file_${Date.now()}`,
    };
  },
});

const upload = multer({ storage });

export default upload;