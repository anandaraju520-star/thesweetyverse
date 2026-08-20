import React from 'react';
import { useNavigate } from 'react-router';

export function Validator() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState('');
  const checkValidation = async() => {
    // Validation logic here
    let pswd = inputValue.trim();
    let isValid = false;
    if (!!!pswd) {
      alert('Please enter valid password.');
    } else {
      const response = await fetch("https://api.thesweetyverse.com/api/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            password: pswd,
          }),
        }
      );

      const data = await response.json();

      if(response.ok && data.success) {
        isValid = true;
        alert('Password is valid.');
      } else {
        alert('Password you entered is invalid.');
      }
    }
    if(isValid) {
      // Redirect to another page or perform any action on successful validation
      navigate('/main'); // Example: redirect to welcome page
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center align-middle gap-4">
        <input type="password" placeholder="Enter password" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border p-2 rounded" />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={checkValidation}>
          Validate
        </button>
    </div>
  );
}


// lunar.dns-parking.com

// solar.dns-parking.com