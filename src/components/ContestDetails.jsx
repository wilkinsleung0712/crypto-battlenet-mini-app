import React, { useState, useEffect } from 'react';
import { getContestById } from '../api/api';

/**
 * @typedef {Object} ContestDetails
 * @property {number} contestId
 * @property {string} content
 * @property {number} minBetAmount
 * @property {number} maxBetAmount
 * @property {string[]} options
 */

const ContestDetailsComponent = () => {
    const [contestId, setContestId] = useState(0);
    const [contestDetails, setContestDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (contestId > 0) {
            getContestById(contestId)
                .then(details => {
                    setContestDetails(details);
                    setError(null);
                })
                .catch(err => {
                    setError('Failed to fetch contest details');
                    console.error('Error fetching contest details:', err);
                });
        }
    }, [contestId]);

    const handleInputChange = (event) => {
        setContestId(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <input
                type="number"
                value={contestId}
                onChange={handleInputChange}
                placeholder="Enter Contest ID"
            />
            {contestDetails && (
                <div>
                    <p>Contest ID: {contestDetails.contestId}</p>
                    <p>Content: {contestDetails.content}</p>
                    <p>Min Bet Amount: {contestDetails.minBetAmount}</p>
                    <p>Max Bet Amount: {contestDetails.maxBetAmount}</p>
                    <p>Options: {contestDetails.options.join(', ')}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default ContestDetailsComponent;
