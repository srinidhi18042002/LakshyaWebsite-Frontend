import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import google from '../../../static/logo/google.svg';
import insta from '../../../static/logo/instagram.svg';
import linkedin from '../../../static/logo/linkedin.svg';
import fb from '../../../static/logo/facebook.svg';
import student from '../../../static/design/studentlogin.png';
import company from '../../../static/design/companylogin.png';
import mentor from '../../../static/design/mentorlogin.png';

const CommonSignUp = () => {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  let imageSrc = '';
  let fullNameLabel = '';
  let options = '';

  // Determine the image source and fullNameLabel based on the type prop
  switch (type) {
    case 'candidate':
      imageSrc = student;
      fullNameLabel = 'Candidate Full Name';
      options = 'company/mentor';
      break;
    case 'company':
      imageSrc = company;
      fullNameLabel = 'Company Name';
      options = 'mentor/candidate';
      break;
    case 'mentor':
      imageSrc = mentor;
      fullNameLabel = 'Mentor Full Name';
      options = 'candidate/company';
      break;
    default:
      // Provide default values if the type is not recognized
      imageSrc = student;
      fullNameLabel = 'Candidate Full Name';
      options = 'company/mentor';
      break;
  }

  // Handle form submission
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation checks here
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter'+
         '\n one lowercase letter, one digit, and one special character.'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!fullName.trim()) {
      setFullNameError('Full Name is required.');
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (isValid) {
      // If all validation passes, you can submit the form or perform further actions here
      // For demonstration purposes, we'll log the form data to the console
      console.log('Form data:', { email, password, fullName });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 font-oxygen">Sign Up</h1>
        <div className="flex space-x-4">
          <button className="bg-cornflowerblue hover:bg-cornflowerblue text-white px-10 py-1.4 rounded-lg">
            <img src={linkedin} alt="LinkedIn" className="w-10 h-9" />
          </button>
          <button className="bg-royalblue hover:bg-cornflowerblue-dark text-white px-10 py-1.4 rounded-lg">
            <img src={fb} alt="Facebook" className="w-10 h-9" />
          </button>
          <button className="bg-deeppink hover:bg-pink-dark text-white px-10 py-1.4 rounded-lg">
            <img src={insta} alt="Instagram" className="w-10 h-9" />
          </button>
        </div>
        <button className="bg-white text-gray-900 border border-gray-300 px-5 py-2 rounded-lg mt-4 flex items-center justify-center">
          <img src={google} alt="Google" className="w-56 h-6 " />
          <span className="items-center">Sign Up with Google</span>
        </button>

        <p className="mt-4 mb-2">------- OR -------</p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`border border-gray-300 px-4 py-3 w-96 ${emailError ? 'border-red-500' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`border border-gray-300 px-4 py-3 w-96 ${passwordError ? 'border-red-500' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
            {fullNameLabel}
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            className={`border border-gray-300 px-4 py-3 w-96 ${fullNameError ? 'border-red-500' : ''}`}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {fullNameError && <p className="text-red-500 text-sm mt-1">{fullNameError}</p>}
        </div>
        <p className="text-sm text-gray-600 mb-4">
          By signing up, you agree to our terms and conditions.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-12 py-3 w-96 rounded-lg mb-2" onClick={handleSubmit}>
          Sign Up
        </button>
        <p className="text-sm text-gray-600">
          Register as {options}
        </p>
        <p className="text-sm text-gray-600">
          Already registered? Login
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-gray-100 flex justify-center items-center rounded-b-full overflow-hidden rotate-90">
        <img
          className="w-[70%] top-[22.5%] right-[5.51%] bottom-[18.7%] left-[62.6%] transform -rotate-90"
          alt=""
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default CommonSignUp;
