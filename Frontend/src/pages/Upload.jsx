import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('audio', selectedFile);
        const result = await axios.post("http://localhost:3000/songs",formData)
        console.log(result.data);
        

        try {
            setUploadStatus('Uploading...');
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setUploadStatus('Upload successful!');
            } else {
                setUploadStatus('Upload failed.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            setUploadStatus('Upload failed.');
        }
    };

    return (
        <div className="upload-container">
            <h1>Upload Audio</h1>
            <input type="file" accept="audio/*" onChange={handleFileChange} className="file-input" />
            <button onClick={handleUpload} className="upload-button">Upload</button>
            {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
        </div>
    );
};

export default Upload;