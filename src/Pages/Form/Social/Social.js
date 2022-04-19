import React from 'react';
import auth from '../../firebase.init';
import './Social.css'
import './Social.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Social = () => {
    const navigate = useNavigate('')
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'> Error: {error?.message} {error1?.message}</p>

    }
    if (user || user1) {
        navigate('/home')
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    return (
        <div className='Social-container'>

            <div className='horizontal-style mt-5'>
                <div className='line'></div>
                <div><p className='or'>or</p></div>
                <div className='line'></div>
            </div>

            <div >
            {errorElement}
                <button onClick={() => signInWithGoogle()} className='third-party-google-btn' >Continue With Google</button><br />
                <button className='third-party-github-btn' onClick={() => signInWithGithub()}>Continue With Github</button>
            </div>
           
        </div>

        
    );
};

export default Social;