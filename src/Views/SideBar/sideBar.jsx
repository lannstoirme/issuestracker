import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {signOut} from '../../Controllers/Redux/authSlice';
import './sideBar.css';

export default () => {
    const dispatch = useDispatch();

    const { auth } = useSelector(state => state)

    function SignOut() {
        dispatch(signOut());
    }

    return(
        <div className="sidebar">
            <Link className="nav-link" to="/"><h1 className="brand">Bug-Tracker</h1></Link>
                <ul>
                    <li><link to='/' className='nav-link'>Dashboard</link></li>
                    <li><link to='/viewbugs' className='nav-link'>View Bugs</link></li>
                    {auth.admin && <li><link to='/create' className='nav-link'>Create Bug</link></li>}
                </ul>
                <button className='nav-link logout'>Logout</button>
        </div>
    )
}