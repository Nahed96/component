import React from 'react';
import logo from './logo.svg';
import './App.css';
import FullName from './Components/Profil/FullName'
import ProfilPhoto from './Components/Profil/ProfilPhoto';
import Adress from './Components/Profil/Adress';

function App() {
  return (
    <div className="App" >
      <div class=' border-radius 8px solid'>
      <FullName name='Nahed Neji'/>
      <ProfilPhoto name='https://static.euronews.com/articles/stories/04/14/80/62/602x338_cmsv2_0ca86657-3d82-5bf6-b956-103896db97fc-4148062.jpg'/>
      <Adress name="Tunisie tunis "/>
      </div>
    </div>
  );
}

export default App;
