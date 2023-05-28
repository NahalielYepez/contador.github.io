import React from 'react';
import ReactDOM from 'react-dom/client';

import { Counter } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<Counter />)