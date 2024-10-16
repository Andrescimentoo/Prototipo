import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google';
import handleLogin from './button';



const ButtonProvider = () => {
    const clientId = '367692770833-6k9vracsbrmiptaj6alrjngaeaf0uqu8.apps.googleusercontent.com' 
  
  return (
    <div>
       <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={handleLogin} // Lida com o sucesso do login
                onError={() => {
                  console.log('Login falhou'); // Lida com o erro de login
                }}
            />
        </GoogleOAuthProvider>
    </div>
  )
}

export default ButtonProvider
