import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaCheckCircle, FaArrowRight, FaGoogle } from 'react-icons/fa';

const COURSES_LIST = ['JAIIB', 'CAIIB', 'Bank PO', 'RBI Grade B', 'SSC CGL', 'Internal Promotions', 'DRA', 'Mock Tests Only'];

const STEPS = ['Personal Info', 'Contact & Course', 'Set Password'];

export default function RegisterPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', qualification: '',
    interestedCourse: '', password: '', confirm: '', agree: false,
  });
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.name.trim()) e.name = 'Name is required';
      if (!form.city.trim()) e.city = 'City is required';
      if (!form.qualification) e.qualification = 'Please select qualification';
    }
    if (step === 1) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
      if (!/^\d{10}$/.test(form.phone)) e.phone = '10-digit phone required';
      if (!form.interestedCourse) e.interestedCourse = 'Please select a course';
    }
    if (step === 2) {
      if (form.password.length < 6) e.password = 'Min 6 characters';
      if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
      if (!form.agree) e.agree = 'Please accept terms';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => { if (validate()) setStep(s => s + 1); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setRegistered(true);
    setTimeout(() => {
      login({ name: form.name, email: form.email, phone: form.phone, role: 'student', enrolled: [] });
      navigate('/dashboard');
    }, 2000);
    setLoading(false);
  };

  const Field = ({ icon: Icon, name, type = 'text', placeholder, ...rest }) => (
    <div>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />}
        <input type={type} placeholder={placeholder} value={form[name]}
          onChange={e => set(name, e.target.value)}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
          {...rest} />
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  if (registered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center px-4">
        <div className="glass-card p-10 text-center max-w-sm">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheckCircle className="text-success text-4xl" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-gray-900 mb-2">Welcome to IBS!</h2>
          <p className="text-gray-600 text-sm mb-1">Account created successfully</p>
          <p className="text-gray-500 text-xs">Redirecting to your dashboard...</p>
          <div className="mt-4 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-success rounded-full animate-pulse w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <img src="/logo-blue.png" alt="IBS Bank Career" className="h-14 mx-auto object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
          </Link>
          <h1 className="font-heading font-bold text-2xl text-gray-900 mt-4">Create Your Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join 50,000+ banking aspirants — it's free</p>
        </div>

        <div className="glass-card p-8">
          {/* Step indicator */}
          <div className="flex items-center mb-8">
            {STEPS.map((s, i) => (
              <div key={i} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < step ? 'bg-success text-white' : i === step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1 font-medium transition-colors ${i === step ? 'text-primary' : 'text-gray-400'}`}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-1 transition-colors ${i < step ? 'bg-success' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 0 */}
            {step === 0 && (
              <div className="space-y-4">
                <Field icon={FaUser} name="name" placeholder="Full Name *" />
                <Field icon={null} name="city" placeholder="City / Location *" />
                <div>
                  <select value={form.qualification} onChange={e => set('qualification', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.qualification ? 'border-red-400' : 'border-gray-200'}`}>
                    <option value="">Select Qualification *</option>
                    <option>Graduate</option>
                    <option>Post Graduate</option>
                    <option>Banking Professional</option>
                    <option>CA / CS / CMA</option>
                    <option>Other</option>
                  </select>
                  {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification}</p>}
                </div>
                <button type="button" onClick={nextStep} className="w-full btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2">
                  Next Step <FaArrowRight size={13} />
                </button>
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4">
                <Field icon={FaEnvelope} name="email" type="email" placeholder="Email Address *" />
                <div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">+91</span>
                    <input type="tel" placeholder="Mobile Number *" maxLength={10} value={form.phone}
                      onChange={e => set('phone', e.target.value.replace(/\D/, ''))}
                      className={`w-full pl-12 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.phone ? 'border-red-400' : 'border-gray-200'}`} />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select value={form.interestedCourse} onChange={e => set('interestedCourse', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.interestedCourse ? 'border-red-400' : 'border-gray-200'}`}>
                    <option value="">Interested Course *</option>
                    {COURSES_LIST.map(c => <option key={c}>{c}</option>)}
                  </select>
                  {errors.interestedCourse && <p className="text-red-500 text-xs mt-1">{errors.interestedCourse}</p>}
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(0)} className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">Back</button>
                  <button type="button" onClick={nextStep} className="flex-1 btn-primary py-3 rounded-xl flex items-center justify-center gap-2">
                    Next <FaArrowRight size={13} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input type={showPwd ? 'text' : 'password'} placeholder="Create Password *" value={form.password}
                    onChange={e => set('password', e.target.value)}
                    className={`w-full pl-10 pr-10 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.password ? 'border-red-400' : 'border-gray-200'}`} />
                  <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPwd ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs -mt-2">{errors.password}</p>}

                <div className="relative">
                  <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                  <input type="password" placeholder="Confirm Password *" value={form.confirm}
                    onChange={e => set('confirm', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.confirm ? 'border-red-400' : 'border-gray-200'}`} />
                </div>
                {errors.confirm && <p className="text-red-500 text-xs -mt-2">{errors.confirm}</p>}

                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)} className="mt-0.5 rounded border-gray-300 text-primary" />
                  <span className="text-xs text-gray-600">I agree to the <Link to="/terms" className="text-primary underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link></span>
                </label>
                {errors.agree && <p className="text-red-500 text-xs">{errors.agree}</p>}

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all">Back</button>
                  <button type="submit" disabled={loading}
                    className="flex-1 btn-primary py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
                    {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><FaCheckCircle size={13} /> Register</>}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
            <FaGoogle className="text-red-500" size={16} /> Sign up with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account? <Link to="/login" className="text-primary font-semibold hover:underline">Sign In</Link>
        </p>
        <p className="text-center mt-2">
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-600">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
