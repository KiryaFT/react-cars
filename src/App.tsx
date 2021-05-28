import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme'
import { CarsList } from './components/CarsList';

const App: React.FC = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <h1>React Cars</h1>
      <CarsList />
    </Theme>
  );
}

export default App;