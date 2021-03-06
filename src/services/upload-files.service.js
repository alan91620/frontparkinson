import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return http.post("/process", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

}

export default new UploadFilesService();