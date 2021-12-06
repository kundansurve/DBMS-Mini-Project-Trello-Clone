import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'TrelloClone';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h2>Trello Clone</h2>

      </nav>
      <div className='landing-inner'>
        <h1>Trello Clone</h1>
        <h2>Team Members:</h2>
        <div style={{margin:"1em"}}>
        <h3 style={{margin:"0.5em"}}>Priyanka Salunke ( F19111151 )</h3>
        <h3 style={{margin:"0.5em"}}>Atharv Karanjkar ( F19111029 )</h3>
        <h3 style={{margin:"0.5em"}}>Shreyash Yewale ( F20121002 )</h3>
        <h3 style={{margin:"0.5em"}}>Kundan Surve ( F19111005 )</h3>
        </div>
        <div className='buttons'>
        <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='outlined' color='inherit' href='/register'>
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
