import React from 'react';
import './DummyPost.css';
import img1 from '../../assets/Screenshot 2024-12-02 203312.png';
import img2 from '../../assets/Screenshot 2024-12-02 203335.png';
import img3 from '../../assets/Screenshot 2024-12-02 203413.png';
import img4 from '../../assets/Screenshot 2024-12-02 203427.png';
import img5 from '../../assets/Screenshot 2024-12-02 203440.png';
import img6 from '../../assets/Screenshot 2024-12-02 203456.png';
import img7 from '../../assets/Screenshot 2024-12-02 203546.png';
import img8 from '../../assets/Screenshot 2024-12-02 203558.png';

const DummyPost = () => {
  return (
    <div className='dummy-post'>
      <h3>Fresh recommendations</h3>
      <div className='image-grid'>
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img src={img4} alt="Image 4" />
        <img src={img5} alt="Image 5" />
        <img src={img6} alt="Image 6" />
        <img src={img7} alt="Image 7" />
        <img src={img8} alt="Image 8" />
      </div>
    </div>
  );
};

export default DummyPost;
