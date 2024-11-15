
import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login({ username, password });
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
      <button onClick={handleLogin} className="btn-primary">Login</button>
    </div>
  );
};

export default LoginForm;
