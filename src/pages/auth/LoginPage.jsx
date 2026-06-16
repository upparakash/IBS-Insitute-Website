import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaPhone, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaArrowRight } from 'react-icons/fa';

const DEMO_USERS = {
  'student@ibs.in': { name: 'Rahul Sharma', role: 'student', phone: '9876543210', enrolled: ['jaiib', 'caiib'] },
  'admin@ibs.in': { name: 'Admin User', role: 'admin', phone: '9000000000', enrolled: [] },
};

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';

  const [tab, setTab] = useState('email'); // 'email' | 'otp'
  const [showPwd, setShowPwd] = useState(false);
  const [step, setStep] = useState(1); // OTP: 1=phone, 2=enter otp
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const [emailForm, setEmailForm] = useState({ email: '', password: '' });
  const [otpForm, setOtpForm] = useState({ phone: '', otp: '' });

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    const user = DEMO_USERS[emailForm.email];
    if (user && emailForm.password === 'ibs@123') {
      login({ ...user, email: emailForm.email });
      navigate(user.role === 'admin' ? '/admin' : from);
    } else {
      setError('Invalid credentials. Try student@ibs.in / ibs@123');
    }
    setLoading(false);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setOtpSent(true);
    setStep(2);
    setLoading(false);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    if (otpForm.otp === '123456') {
      login({ name: 'IBS Student', role: 'student', phone: otpForm.phone, email: '', enrolled: ['jaiib'] });
      navigate(from);
    } else {
      setError('Invalid OTP. Use 123456 for demo.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo-blue.png" alt="IBS Bank Career" className="h-14 mx-auto object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
          </Link>
          <h1 className="font-heading font-bold text-2xl text-gray-900 mt-4">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your IBS Bank Career account</p>
        </div>

        <div className="glass-card p-8">
          {/* Tab switcher */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {[['email', <FaEnvelope size={13} />, 'Email Login'], ['otp', <FaPhone size={13} />, 'OTP Login']].map(([key, icon, label]) => (
              <button key={key} onClick={() => { setTab(key); setError(''); setStep(1); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === key ? 'bg-white text-primary shadow' : 'text-gray-500 hover:text-gray-700'}`}>
                {icon} {label}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5">
              ⚠️ {error}
            </div>
          )}

          {/* Email Login Form */}
          {tab === 'email' && (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input type="email" placeholder="Email address" required value={emailForm.email}
                  onChange={e => setEmailForm({ ...emailForm, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                <input type={showPwd ? 'text' : 'password'} placeholder="Password" required value={emailForm.password}
                  onChange={e => setEmailForm({ ...emailForm, password: e.target.value })}
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                <button type="button" onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPwd ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary" /> Remember me
                </label>
                <Link to="/forgot-password" className="text-accent hover:underline font-medium">Forgot password?</Link>
              </div>
              <button type="submit" disabled={loading}
                className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><FaArrowRight size={14} /> Sign In</>}
              </button>
            </form>
          )}

          {/* OTP Login Form */}
          {tab === 'otp' && step === 1 && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                <input type="tel" placeholder="Mobile number" required maxLength={10} value={otpForm.phone}
                  onChange={e => setOtpForm({ ...otpForm, phone: e.target.value.replace(/\D/, '') })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <button type="submit" disabled={loading || otpForm.phone.length !== 10}
                className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2 text-base disabled:opacity-60">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Send OTP'}
              </button>
            </form>
          )}

          {tab === 'otp' && step === 2 && (
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="text-center text-sm text-gray-600 mb-4">
                OTP sent to <strong>+91 {otpForm.phone}</strong>
                <button type="button" onClick={() => setStep(1)} className="text-accent ml-2 hover:underline text-xs">Change</button>
              </div>
              {/* OTP boxes */}
              <div className="flex gap-2 justify-center mb-2">
                {[...Array(6)].map((_, i) => (
                  <input key={i} type="text" maxLength={1}
                    value={otpForm.otp[i] || ''}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/, '');
                      const arr = otpForm.otp.split('');
                      arr[i] = val;
                      setOtpForm({ ...otpForm, otp: arr.join('') });
                      if (val && e.target.nextSibling) e.target.nextSibling.focus();
                    }}
                    className="w-11 h-12 text-center text-lg font-bold border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-all"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 text-center">Demo OTP: <strong>123456</strong></p>
              <button type="submit" disabled={loading || otpForm.otp.length !== 6}
                className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2 text-base disabled:opacity-60">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><FaArrowRight size={14} /> Verify & Login</>}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
            <FaGoogle className="text-red-500" size={16} /> Continue with Google
          </button>

          {/* Demo credentials */}
          <div className="mt-5 p-3 bg-blue-50 rounded-xl text-xs text-blue-700">
            <strong>Demo:</strong> student@ibs.in / ibs@123 &nbsp;|&nbsp; admin@ibs.in / ibs@123
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-semibold hover:underline">Register Free</Link>
        </p>
        <p className="text-center mt-3">
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-600 transition-colors">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
