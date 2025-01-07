import React, { useState } from 'react';
import axios from 'axios';
import blackLogo from '../assets/img/blackLogo.png';
import Logo from '../components/Logo';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState(''); // User input state
  const [response, setResponse] = useState(''); // ChatGPT response state
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch API Key from environment variables
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const Client = axios.create({
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });

  function fetchDishIdeas() {
    const Params = {
      prompt: `With ${ingredients}, list out the Nigerian dishes I can make and include the recipe for each.`,
      model: 'gpt-3.5-turbo',
      max_tokens: 500,
      temperature: 0.7,
    };

    setLoading(true); // Set loading to true

    Client.post('https://api.openai.com/v1/chat/completions', Params)
      .then(res => {
        setResponse(res.data.choices[0].message.content); // Update response state
      })
      .catch(err => {
        if (err.response && err.response.status === 429 && retryCount < 5) {
          // If we get a 429 error, wait and retry
          const waitTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
          setTimeout(() => fetchDishIdeas(retryCount + 1), waitTime);
        } else {
          console.error(err);
          setResponse('Error fetching data.'); // Update response state with error message
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  }

  // Normal function to handle input change
  function handleInputChange(event) {
    setIngredients(event.target.value);
  }


  return (
    <>
     {/* Logo Component */}

      <Logo logo={blackLogo} className="size-32 -mt-10 items-left flex justify-left sm:-ml-3" />
    <div className="p-6 font-worksans max-w-xl mx-auto">
     

      {/* Input for Ingredients */}
      <input
        type="text"
        value={ingredients}
        onChange={handleInputChange}
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
