import React from 'react';
import ImageGrid from './comps/ImageGrid';
//import Modal from './comps/Model';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
      
    </div>
  );
}

export default App;
