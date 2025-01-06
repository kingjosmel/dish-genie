import React, { useState } from 'react';
import axios from 'axios';
import blackLogo from '../assets/img/blackLogo.png';
import Logo from '../components/Logo';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDishIdeas = async () => {
    if (!ingredients.trim()) {
      alert('Please enter some ingredients!');
      return;
    }

    setLoading(true);

    try {
      const messages = [
        { role: 'system', content: 'You are a helpful assistant for generating Nigerian recipes.' },
        { role: 'user', content: `With ${ingredients}, list out the Nigerian dishes I can make and include the recipe for each.` },
      ];

      const { data } = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer `, // Use environment variable for API key
          }
        }
      );

      setResponse(data.choices[0].message.content.trim());
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {/* Logo Component */}
        <Logo logo={blackLogo} className="size-32 -mt-10 sm:-ml-3" />
      </div>
      <div className="p-6 font-worksans max-w-xl mx-auto">
        {/* Input for Ingredients */}
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, e.g., rice, tomatoes, onions"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        {/* Button to Generate Recipes */}
        <button
          onClick={fetchDishIdeas}
          className={`w-full py-2 px-4 text-white font-bold rounded-md ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
          }`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Generate Recipes'}
        </button>
        {/* Display Recipes */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Recipes:</h2>
          <pre className="bg-gray-100 p-4 rounded-md text-sm whitespace-pre-wrap">
            {response || 'Your recipes will appear here...'}
          </pre>
        </div>
      </div>
    </>
  );
}
