import React from 'react';

// Create a React component for VirtualTourPage
const VirtualTourPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header style={styles.header}>
        <h1>Virtual Tour</h1>
        <p>Explore the Heritage like never before!</p>
      </header>

      {/* Content Section */}
      <div style={styles.content}>
        <h2>Experience the Virtual Tour</h2>
        <p>Immerse yourself in the vibrant culture of Nashik through this interactive virtual tour.</p>
        {/* Theasys Virtual Tour Embed Code */}
        <script async src="https://static.theasys.io/embed.js" data-theasys="CWPyShI7IhCgs3oNHzFc2uHD5Jq1Ml" data-height="450"></script>
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 HeritEdge. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Inline styles for the React component
const styles = {
  header: {
    backgroundColor: '#2C3E50',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#2C3E50',
    color: 'white',
    marginTop: '20px',
  },
};

export default VirtualTourPage;
