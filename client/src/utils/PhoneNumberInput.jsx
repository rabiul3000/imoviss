import React, { useState } from 'react';

const PhoneNumberInput = ({ onPhoneNumberChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (event) => {
        const newPhoneNumber = event.target.value;
        setPhoneNumber(newPhoneNumber);
        onPhoneNumberChange(`+88${newPhoneNumber}`); // Pass the value to the parent component
    };

    return (
        <div>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
                pattern="[+]{0,1}[0-9]{10,15}" // Optional: regex pattern to validate phone number format
            />
        </div>
    );
};

export default PhoneNumberInput;
