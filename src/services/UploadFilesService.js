import http from "../http-common";



class UploadFilesService {
  upload(file, onUploadProgress, auth) {
    let formData = new FormData();

    formData.append("file", file);
    console.log(auth);
    return http.post("/upload", formData, 
        {headers : auth, 
           "Content-Type": "multipart/form-data" ,  
        onUploadProgress});
  }

  getFiles(auth) {
    return http.get("/files", {headers :  auth });
  }
}

export default new UploadFilesService();
