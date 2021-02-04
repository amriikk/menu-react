import React from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const AllCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  return (
    <h2>Menu Project Setup</h2>
  );
};

export default App;
