import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/reducers/authSlice';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const res = dispatch(register({ name, email, password }));
    if (res.payload.success) {
      navigate('/products');
    }
  };

  return (
    <div className='h-screen w-screen flex  items-center justify-center bg-zinc-900'>
      <form className='flex flex-col items-center justify-center' onSubmit={handleRegister}>
        <input className="bg-gray-200 w-80 h-10 rounded-md p-2 mb-2" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input className="bg-gray-200 w-80 h-10 rounded-md p-2 mb-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className="bg-gray-200 w-80 h-10 rounded-md p-2 mb-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button className="bg-teal-800 mb-3 text-white py-2 mt-2 px-14 rounded-xl text-xl" type="submit">Register</button>
        <p className="text-white text-sm">Already Have an Account ? <NavLink className="text-teal-700" to={'/'}>Login</NavLink> </p>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default RegisterComponent;
