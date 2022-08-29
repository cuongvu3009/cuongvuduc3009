import React from 'react';

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CuongVuResume2022.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Cuong-Vu-Resume-2022.pdf';
        alink.click();
      });
    });
  };
  return (
    <div style={{ paddingTop: '100px' }}>
      <center>
        <h1 style={{ padding: '20px' }}>Welcome to my page</h1>
        <h3 style={{ padding: '10px' }}>
          Click on below button to download my resume PDF file
        </h3>
        <button onClick={onButtonClick}>Download PDF</button>
      </center>
    </div>
  );
};

export default Resume;
