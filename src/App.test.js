import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Item from 'antd/lib/list/Item';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

test('state contain right default data', () => {
  
});
