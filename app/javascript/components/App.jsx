import React from 'react';
import Navbar from './Layouts/Navbar';
import useProfile from '../hooks/useProfile';

const App = ({ typeUser }) => {
  const { profile } = useProfile(typeUser)

  return (
   <>
      <Navbar 
        user = { profile }
        typeUser = { typeUser }
      />
   </>
  )
};

export default App;