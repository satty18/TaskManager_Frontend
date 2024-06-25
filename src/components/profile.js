import React, { useState, useEffect } from 'react';
import { updateProfile, fetchProfile } from '../api';

function Profile() {
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [profile, setProfile] = useState({});

    useEffect(() => {
        async function loadProfile() {
            const profile = await fetchProfile();
            setProfile(profile);
            setUsername(profile.username);
            setAvatar(profile.avatar);
        }
        loadProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = { username, avatar };
        const newProfile = await updateProfile(updatedProfile);
        setProfile(newProfile);
    };

    return (
        <div>
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <button type="submit">Update Profile</button>
            </form>
            <div>
                <h3>Current Profile</h3>
                <p>Username: {profile.username}</p>
                {profile.avatar && <img src={profile.avatar} alt="Avatar" />}
            </div>
        </div>
    );
}

export default Profile;