'use client'
import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      // Convert the file to base64
      const base64File = await toBase64(file);

      // Create the body with base64 image
      const data = {
        mediaContent: base64File, // base64 encoded image
      };

      // Send the request
      const response = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      alert('Upload successful!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload an image:
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} required />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
