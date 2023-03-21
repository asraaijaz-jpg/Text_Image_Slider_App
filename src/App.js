import React from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";


function App({slides}) {
  var allslides=[
    {
     title:'Todays workout plan',
     text:'create a baisc slideshow app'
    },
   {
     title:'10 push-up',
     text:'make your life more energetic'
    },
    {
     title:'Joggings',
     text:'think before you leave'
    },
    {
     title:'gyming',
     text:'once passed never come again'
    }
  ]

  // alert(allslides.length);
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <div className="App">
                <Slides slides={allslides} length={allslides.length} />
            </div>
        </div>
    );
}

export default App;
