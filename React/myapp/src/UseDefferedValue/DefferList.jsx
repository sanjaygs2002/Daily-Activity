import React, { useState, useDeferredValue, useMemo } from 'react';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tomato',
  'Ugli Fruit',
  'Watermelon'
];

function DefferList() {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);

  const filteredItems = useMemo(() => {
    console.log('Filtering with:', deferredInput);
    return items.filter(item =>
      item.toLowerCase().includes(deferredInput.toLowerCase())
    );
  }, [deferredInput]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2> Fruit Search</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a fruit..."
        style={{ padding: '0.5rem', width: '100%' }}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DefferList;
