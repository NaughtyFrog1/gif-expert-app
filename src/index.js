import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';

import './index.scss';

ReactDOM.render(
  <GifExpertApp defaultCategories={['The Office']} />,
  document.getElementById('root')
);
