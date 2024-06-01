import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './ImageGallery.css'; // Import CSS file for styling
import Header from './Header';
import Footer from './Footer';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/ynotes/images');
        if (response.status === 200) {
          // Prepend base URL to each image URL
          const baseImageUrl = 'http://localhost:4000/api/ynotes';
          const fullImageUrls = response.data.map(url => baseImageUrl + url);
          console.log(fullImageUrls);
          setImages(fullImageUrls);
        } else {
          console.error('Error fetching images:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const generatePDF = async (index) => {
    if (index < 0 || index >= images.length) {
      console.error('Invalid image index');
      return;
    }

    const doc = new jsPDF();
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // To allow cross-origin images
    img.src = images[index];
    img.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imgData = canvas.toDataURL('image/png');
      doc.addImage(imgData, 'PNG', 10, 10, 180, 160); // Add image to PDF
      doc.save('image.pdf'); // Save PDF
    };
  };

  const deleteImage = async (filename) => {
    try {
      const response = await axios.delete(`${filename}`);
      if (response.status === 200) {
        // Update images state after deletion
        const updatedImages = images.filter(imageUrl => imageUrl !== `${filename}`);
        setImages(updatedImages);
      } else {
        console.error('Error deleting image:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  


  return (
    <div>
    <Header/>
      <h2>Image Gallery</h2>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <div key={index} className="image-card"> {/* Wrap each image and buttons in a div with class "image-card" */}
            <img src={imageUrl} alt={`Image ${index}`} />
            <div className="button-container">
              <button onClick={() => generatePDF(index)}>Convert to PDF</button> {/* Button to convert image to PDF */}
              {/* <button onClick={() => deleteImage(index)}>Delete</button> Button to delete image */}
              <button onClick={() => deleteImage(imageUrl)}>Delete</button>

            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ImageGallery;
