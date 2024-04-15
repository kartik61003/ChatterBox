import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8080/";

let gfs, GridFSBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  GridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadFile = async (request, response) => {
  if (!request.file) {
    return response.status(400).json({ error: "File not found in request" });
  }
  try {
    const imageUrl = `${url}file/${request.file.filename}`;
    return response.status(201).json(imageUrl);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Error storing file" });
  }
};

export const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename});
    const readStream = GridFSBucket.openDownloadStream(file._id);
    readStream.pipe(response);
    //readStream is a stream that we can pipe to our response object which will then send the file back as the HTTP response.
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
