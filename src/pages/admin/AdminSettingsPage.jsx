import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useAuth } from '../../context/AuthContext';
import { FaSave, FaUser, FaLock, FaCog, FaBuilding } from 'react-icons/fa';

export default function AdminSettingsPage() {
  const { user, login, logout } = useAuth();
  const [profile, setProfile] = useState({ name: user?.name || 'Admin', email: user?.email || 'admin@ibs.in', phone: '+91 81389 62298' });
  const [site, setSite] = useState({ siteName: 'IBS Bank Career', email: 'info@ibsbankcareer.in', phone: '+91 81389 62298', whatsapp: '918138962298', maintenanceMode: false });
  const [passwords, setPasswords] = useState({ newPw: '', confirm: '' });
  const [saved, setSaved] = useState('');
  const [pwError, setPwError] = useState('');

  const saveProfile = (e) => { e.preventDefault(); login({ ...user, name: profile.name }); setSaved('profile'); setTimeout(() => setSaved(''), 2500); };
  const saveSite = (e) => { e.preventDefault(); setSaved('site'); setTimeout(() => setSaved(''), 2500); };

  const savePassword = (e) => {
    e.preventDefault(); setPwError('');
    if (passwords.newPw !== passwords.confirm) { setPwError('Passwords do not match.'); return; }
    if (passwords.newPw.length < 6) { setPwError('Min 6 characters.'); return; }
    setSaved('password'); setPasswords({ newPw: '', confirm: '' }); setTimeout(() => setSaved(''), 2500);
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="font-heading font-bold text-2xl text-gray-900">Admin Settings</h1>
        <p className="text-gray-500 text-sm">Manage your account and platform configuration</p>
      </div>

      {saved && (
        <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-5 text-sm font-medium border border-success/20">
          ✅ {saved === 'profile' ? 'Profile updated!' : saved === 'site' ? 'Site settings saved!' : 'Password updated!'}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Admin profile */}
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
            <FaUser className="text-primary" /> Admin Profile
          </h2>
          <form onSubmit={saveProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
              <input type="text" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" value={profile.email} disabled
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-400 cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
              <input type="tel" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
            </div>
            <button type="submit" className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl"><FaSave size={13} /> Save Profile</button>
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
              <label className="block text-xs font-semibold text-gray-700 mb-1">New Password</label>
              <input type="password" required value={passwords.newPw} onChange={e => setPasswords(p => ({ ...p, newPw: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input type="password" required value={passwords.confirm} onChange={e => setPasswords(p => ({ ...p, confirm: e.target.value }))}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
            </div>
            <button type="submit" className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl"><FaLock size={13} /> Update Password</button>
          </form>
        </div>

        {/* Site settings */}
        <div className="glass-card p-6 lg:col-span-2">
          <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
            <FaBuilding className="text-primary" /> Site Configuration
          </h2>
          <form onSubmit={saveSite} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Site Name</label>
                <input type="text" value={site.siteName} onChange={e => setSite(p => ({ ...p, siteName: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Email</label>
                <input type="email" value={site.email} onChange={e => setSite(p => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Phone</label>
                <input type="text" value={site.phone} onChange={e => setSite(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                <input type="text" value={site.whatsapp} onChange={e => setSite(p => ({ ...p, whatsapp: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-all" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <div className="font-medium text-gray-900 text-sm">Maintenance Mode</div>
                <div className="text-gray-400 text-xs">Temporarily disable public access to the site</div>
              </div>
              <button type="button" onClick={() => setSite(p => ({ ...p, maintenanceMode: !p.maintenanceMode }))}
                className={`relative w-12 h-6 rounded-full transition-all ${site.maintenanceMode ? 'bg-red-500' : 'bg-gray-300'}`}>
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${site.maintenanceMode ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl"><FaSave size={13} /> Save Configuration</button>
              <button type="button" onClick={logout} className="px-5 py-2.5 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all text-sm">Sign Out</button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
