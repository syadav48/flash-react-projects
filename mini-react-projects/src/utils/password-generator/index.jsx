import React, { useState, useCallback } from 'react';
import { FaCopy, FaRedo, FaCheck } from 'react-icons/fa';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = '';
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (!allowedChars) {
      alert('Please select at least one character type');
      return;
    }
    console.log(allowedChars, "allowedChars.length");
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      console.log("randomIndex", randomIndex);
      generatedPassword += allowedChars[randomIndex];
    }
    console.log("generatedPassword", generatedPassword);
    setPassword(generatedPassword);
    setCopied(false);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const regeneratePassword = () => {
    if (!password) {
      generatePassword();
      return;
    }
    generatePassword();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>
        
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Generate a password"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition"
            title="Copy to clipboard"
          >
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
          <button
            onClick={regeneratePassword}
            className="ml-2 bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition"
            title="Generate new password"
          >
            <FaRedo />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Password Length: {length}</label>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-32"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Uppercase Letters</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="h-5 w-5 text-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Lowercase Letters</label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="h-5 w-5 text-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="h-5 w-5 text-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700">Include Symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="h-5 w-5 text-blue-500"
            />
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition font-medium"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;