import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState('');
  const [loginTime, setLoginTime] = useState('Not available'); // State for loginTime
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Fetch user details
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Using token from localStorage
          },
        });
        setUserData(res.data);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      }
    };

    // Fetch recent activities (or similar data)
    const fetchRecentActivities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/recent-activities', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Using token from localStorage
          },
        });
        setRecentActivities(res.data);
      } catch (err) {
        console.error('Failed to fetch recent activities');
      }
    };

    // Get login time from localStorage
    const savedLoginTime = localStorage.getItem('loginTime');
    if (savedLoginTime) {
      setLoginTime(new Date(savedLoginTime).toLocaleString()); // Format it nicely
    }

    fetchUserData();
    fetchRecentActivities();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove the token on logout
    localStorage.removeItem('loginTime');  // Optionally clear loginTime as well
    window.location.href = '/login';  // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f1f] via-[#0f332f] to-[#003c3c] p-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-8">🌿 Dashboard</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* User Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">
              Welcome, {userData.firstName} {userData.lastName}
            </h3>
            <p className="text-sm">Email: {userData.email}</p>
            <p className="text-sm">Role: {userData.isAdmin ? 'Admin' : 'User'}</p>
            <div className="mt-4">
              <Link to="/settings" className="text-green-500 hover:underline">
                Edit Profile
              </Link>
            </div>
          </motion.div>

          {/* Login Time Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Login Time</h3>
            <div className="text-xl font-bold mb-4">{loginTime}</div>
          </motion.div>

          {/* Recent Activities Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-2">
              {recentActivities.length === 0 ? (
                <li>No recent activities found.</li>
              ) : (
                recentActivities.map((activity, index) => (
                  <li key={index} className="text-sm">{activity.description}</li>
                ))
              )}
            </ul>
          </motion.div>
        </div>

        {/* User Stats */}
        <div className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white mb-10">
          <h3 className="text-2xl font-semibold mb-4">User Stats</h3>
          <div className="flex justify-between">
            <div className="flex-1 p-4 bg-green-600 rounded-xl text-center">
              <h4 className="text-xl font-bold">Orders Completed</h4>
              <p className="text-3xl">{userData.ordersCompleted || 0}</p>
            </div>
            <div className="flex-1 p-4 bg-blue-600 rounded-xl text-center">
              <h4 className="text-xl font-bold">Wishlist Items</h4>
              <p className="text-3xl">{userData.wishlistItems || 0}</p>
            </div>
          </div>
        </div>

        {/* User Preferences */}
        <div className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white mb-10">
          <h3 className="text-2xl font-semibold mb-4">User Preferences</h3>
          <div className="space-y-4">
            <p className="text-sm">Language: {userData.language || 'English'}</p>
            <p className="text-sm">Timezone: {userData.timezone || 'GMT'}</p>
            <Link to="/preferences" className="text-green-500 hover:underline">Edit Preferences</Link>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
