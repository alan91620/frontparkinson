import React, { Component } from "react";
import UploadService from "../services/upload-files.service";
import reportWebVitals from "../reportWebVitals";

export default class UploadFiles extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);

        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",

            fileInfos: [],
        };
    }

    /**componentDidMount() {
        UploadService.getFiles().then((response) => {
            this.setState({
                fileInfos: response.data,
            });
        });
    }**/

    selectFile(event) {
        this.setState({
            selectedFiles: event.target.files,
        });
    }

    upload() {
        let currentFile = this.state.selectedFiles[0];

        UploadService.upload(currentFile)
            .then((response) => {
                console.log(response)
                console.log(response.data)
                this.setState({
                    progress: 0,
                    message: response.data.message,
                    currentFile: undefined,
                });
            });
            /*.catch(() => {
                this.setState({
                    progress: 0,
                    message: "response.data.message",
                    currentFile: undefined,
                });
            });*/
    }

    render() {
        const {
            selectedFiles,
            message,
        } = this.state;

        return (
            <div>


                <label className="btn btn-default">
                    <input type="file" onChange={this.selectFile} />
                </label>

                <button
                    className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={this.upload}
                >
                    Upload
                </button>

                <div className="alert alert-light" role="alert">
                    {message}
                </div>


            </div>
        );
    }
}