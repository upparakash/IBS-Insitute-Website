import { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { useAuth } from '../../context/AuthContext';
import { useDashboard } from '../../context/DashboardContext';
import { FaSave, FaUser, FaBell, FaLock, FaGlobe } from 'react-icons/fa';

export default function SettingsPage() {
  const { user, login, logout } = useAuth();
  const { settings, updateSettings } = useDashboard();
  const [profile, setProfile] = useState({ name: user?.name || '', email: user?.email || '', phone: user?.phone || '' });
  const [passwords, setPasswords] = useState({ current: '', newPw: '', confirm: '' });
  const [saved, setSaved] = useState('');
  const [pwError, setPwError] = useState('');

  const saveProfile = (e) => {
    e.preventDefault();
    login({ ...user, name: profile.name, phone: profile.phone });
    setSaved('profile');
    setTimeout(() => setSaved(''), 2500);
  };

  const savePassword = (e) => {
    e.preventDefault();
    setPwError('');
    if (passwords.newPw !== passwords.confirm) { setPwError('Passwords do not match.'); return; }
    if (passwords.newPw.length < 6) { setPwError('Password must be at least 6 characters.'); return; }
    setSaved('password');
    setPasswords({ current: '', newPw: '', confirm: '' });
    setTimeout(() => setSaved(''), 2500);
  };

  const toggle = (key) => updateSettings({ [key]: !settings[key] });

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900 mb-1">Account Settings</h1>
        <p className="text-gray-500 text-sm">Manage your profile and preferences</p>
      </div>

      {saved && (
        <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-5 text-sm font-medium border border-success/20">
          ✅ {saved === 'profile' ? 'Profile updated successfully!' : 'Password changed successfully!'}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile */}
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaUser className="text-primary" /> Profile Information
            </h2>
            <form onSubmit={saveProfile} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input type="email" value={profile.email} disabled
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-400 cursor-not-allowed" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <button type="submit" className="btn-primary flex items-center gap-2 text-sm px-6 py-2.5 rounded-xl">
                <FaSave size={13} /> Save Profile
              </button>
            </form>
          </div>

          {/* Password */}
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaLock className="text-primary" /> Change Password
            </h2>
            {pwError && <div className="bg-red-50 text-red-600 px-4 py-2.5 rounded-xl text-sm mb-4 border border-red-200">{pwError}</div>}
            <form onSubmit={savePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Current Password</label>
                <input type="password" required value={passwords.current} onChange={e => setPasswords(p => ({ ...p, current: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">New Password</label>
                  <input type="password" required value={passwords.newPw} onChange={e => setPasswords(p => ({ ...p, newPw: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Confirm New Password</label>
                  <input type="password" required value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <button type="submit" className="btn-primary flex items-center gap-2 text-sm px-6 py-2.5 rounded-xl">
                <FaLock size={13} /> Update Password
              </button>
            </form>
          </div>
        </div>

        {/* Right: preferences */}
        <div className="space-y-5">
          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
              <FaBell className="text-primary" /> Notifications
            </h2>
            <div className="space-y-4">
              {[
                { key: 'notifications', label: 'Push Notifications', desc: 'Exam updates and class reminders' },
                { key: 'emailAlerts', label: 'Email Alerts', desc: 'Weekly progress reports' },
              ].map(({ key, label, desc }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{label}</div>
                    <div className="text-gray-400 text-xs">{desc}</div>
                  </div>
                  <button onClick={() => toggle(key)}
                    className={`relative w-12 h-6 rounded-full transition-all duration-300 ${settings[key] ? 'bg-primary' : 'bg-gray-300'}`}>
                    <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${settings[key] ? 'left-6' : 'left-0.5'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaGlobe className="text-primary" /> Language
            </h2>
            <select value={settings.language} onChange={e => updateSettings({ language: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all">
              {['English', 'Malayalam', 'Hindi', 'Tamil', 'Telugu'].map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <p className="text-gray-400 text-xs mt-2">Interface language preference</p>
          </div>

          <button onClick={logout}
            className="w-full py-3 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all text-sm">
            Sign Out
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
