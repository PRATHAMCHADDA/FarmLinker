import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaUsers, FaChartBar, FaCogs } from 'react-icons/fa';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user details
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Assuming the token is saved in localStorage
          },
        });
        setUserData(res.data);
      } catch (err) {
        setError('Failed to fetch user data');
        console.error(err);
      }
    };

    // Fetch list of users (for admins)
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Assuming the token is saved in localStorage
          },
        });
        setUsers(res.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      }
    };

    fetchUserData();
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f1f] via-[#0f332f] to-[#003c3c] p-6">
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

          {/* Total Users Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Total Users</h3>
            <div className="text-4xl font-bold mb-4">{users.length}</div>
            <FaUsers className="text-green-500 text-6xl mx-auto" />
          </motion.div>

          {/* User Statistics Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">User Statistics</h3>
            <div className="text-4xl font-bold mb-4">4.5/5</div>
            <FaChartBar className="text-green-500 text-6xl mx-auto" />
          </motion.div>
        </div>

        {/* Recent Users Section */}
        <div className="bg-white/10 border border-green-300/20 rounded-xl p-6 text-white">
          <h3 className="text-2xl font-semibold mb-4">Recent Users</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 5).map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.isAdmin ? 'Admin' : 'User'}</td>
                    <td className="px-4 py-2">
                      <Link
                        to={`/user/${user._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
