import React, { useState, useEffect } from 'react';
import { getUserById } from '../api/api';

/**
 * @typedef {Object} UserDetailsResponse
 * @property {number} userId
 * @property {string} userName
 * @property {number} points
 */

const UserDetails = () => {
    const [userId, setUserId] = useState(0);
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userId > 0) {
            getUserById(userId)
                .then(details => {
                    setUserDetails(details);
                    setError(null);
                })
                .catch(err => {
                    setError('Failed to fetch user details');
                    console.error('Error fetching user details:', err);
                });
        }
    }, [userId]);

    const handleInputChange = (event) => {
        setUserId(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <input
                type="number"
                value={userId}
                onChange={handleInputChange}
                placeholder="Enter User ID"
            />
            {userDetails && (
                <div>
                    <p>User ID: {userDetails.userId}</p>
                    <p>User Name: {userDetails.userName}</p>
                    <p>Points: {userDetails.points}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default UserDetails;
