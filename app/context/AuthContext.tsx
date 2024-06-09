"use client";

import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('token'));
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 60 }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        sessionStorage.setItem('token', data.token);
        setError(null);
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  return (
    <AuthContext.Provider value={{ token, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};




// import React, { createContext, useState, ReactNode, useEffect } from 'react';

// interface AuthContextType {
//   token: string | null;
//   error: string | null;
//   login: (username: string, password: string) => Promise<void>;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [token, setToken] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const storedToken = sessionStorage.getItem('token');
//     setToken(storedToken);
//   }, []);

//   const login = async (username: string, password: string) => {
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//           expiresInMins: 60,
//         }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setToken(data.token);
//         sessionStorage.setItem('token', data.token);
//         setError(null);
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       setError('An error occurred during login');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ token, error, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
