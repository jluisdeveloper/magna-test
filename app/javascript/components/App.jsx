import React from 'react';
import Navbar from './Layouts/Navbar';
import useProfile from '../hooks/useProfile';

const App = ({ typeUser }) => {
  const { profile } = useProfile(typeUser)

  console.log(profile)

  

  return (
   <>
      <Navbar />
   </>
  )
};

export default App;