import React, { useState } from 'react';
import { registerContest } from '../api/api';

/**
 * @typedef {Object} ContestRegisterRequest
 * @property {string} content
 * @property {number} minBetAmount
 * @property {number} maxBetAmount
 * @property {number} userId
 * @property {string} contestStartDateTime
 * @property {string} contestEndDateTime
 * @property {string[]} [options]
 */

const ContestRegistration = () => {
    const [contestData, setContestData] = useState({
        content: '',
        minBetAmount: 0,
        maxBetAmount: 0,
        userId: 0,
        contestStartDateTime: '',
        contestEndDateTime: '',
        options: [] // Initialize as an empty array
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'options') {
            setContestData({ ...contestData, options: value.split(',').map(option => option.trim()) });
        } else {
            setContestData({ ...contestData, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await registerContest(contestData);
            console.log('Contest Registered:', response);
            alert('Contest registered successfully!');
        } catch (error) {
            console.error('Error registering contest:', error);
            alert('Failed to register contest.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="content" value={contestData.content} onChange={handleInputChange} placeholder="Content" />
            <input type="number" name="minBetAmount" value={contestData.minBetAmount} onChange={handleInputChange} placeholder="Min Bet Amount" />
            <input type="number" name="maxBetAmount" value={contestData.maxBetAmount} onChange={handleInputChange} placeholder="Max Bet Amount" />
            <input type="number" name="userId" value={contestData.userId} onChange={handleInputChange} placeholder="User ID" />
            <input type="datetime-local" name="contestStartDateTime" value={contestData.contestStartDateTime} onChange={handleInputChange} placeholder="Start Date Time" />
            <input type="datetime-local" name="contestEndDateTime" value={contestData.contestEndDateTime} onChange={handleInputChange} placeholder="End Date Time" />
            <input type="text" name="options" value={contestData.options?.join(',')} onChange={handleInputChange} placeholder="Options (comma separated)" />
            <button type="submit">Register Contest</button>
        </form>
    );
};

export default ContestRegistration;
