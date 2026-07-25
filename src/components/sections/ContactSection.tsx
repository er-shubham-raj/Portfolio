import React from 'react';
import { motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import { profileData } from '../../data/profileData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Loader2, Sparkles, ShieldAlert } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export const ContactSection: React.FC = () => {
  const { register, handleSubmit, errors, isSubmitting, isSuccess } = useContactForm();

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#050816] bg-noise border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF6B57]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827] border border-[#FF6B57]/30 text-[#FFE5D9] text-xs font-mono tracking-widest uppercase shadow-glow-coral">
            <Mail size={13} className="text-[#FF6B57]" /> Direct Communication
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-100 tracking-tight">
            Let&apos;s Build <span className="text-gradient-coral">Together</span>
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            Reach out for full-time Software Engineering roles, AI microservice architecture, or open-source collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 space-y-6 shadow-glass-luxury">
              <div>
                <h3 className="text-2xl font-display font-bold text-slate-100 mb-1">Contact Details</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Messages are sent directly to <span className="text-[#FF6B57] font-mono font-semibold">er.rajshubham@gmail.com</span> with auto-captured visitor environment metadata.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-4 rounded-2xl bg-[#050816]/80 hover:bg-white/5 border border-white/10 flex items-center gap-4 text-slate-300 hover:text-white transition-all group shadow-inner"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B57]/10 text-[#FF6B57] flex items-center justify-center shrink-0 border border-[#FF6B57]/30 shadow-glow-coral">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs sm:text-sm font-display font-bold text-slate-100 group-hover:text-[#FF6B57] transition-colors">{profileData.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="p-4 rounded-2xl bg-[#050816]/80 hover:bg-white/5 border border-white/10 flex items-center gap-4 text-slate-300 hover:text-white transition-all group shadow-inner"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F6C453]/10 text-[#F6C453] flex items-center justify-center shrink-0 border border-[#F6C453]/30 shadow-glow-amber">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Phone & WhatsApp</div>
                    <div className="text-xs sm:text-sm font-display font-bold text-slate-100 group-hover:text-[#F6C453] transition-colors">{profileData.phone}</div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-[#050816]/80 border border-white/10 flex items-center gap-4 text-slate-300 shadow-inner">
                  <div className="w-10 h-10 rounded-xl bg-[#39D98A]/10 text-[#39D98A] flex items-center justify-center shrink-0 border border-[#39D98A]/30">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-display font-bold text-slate-100">{profileData.location}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-slate-400 mb-3">SOCIAL PROFILES</div>
                <div className="flex gap-3">
                  <a
                    href={profileData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#050816] hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 text-slate-300 transition-colors shadow-md"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={profileData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#050816] hover:bg-[#FF6B57]/20 hover:text-[#FFE5D9] border border-white/10 text-slate-300 transition-colors shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={profileData.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-[#050816] hover:bg-[#F6C453]/20 hover:text-[#F6C453] border border-white/10 text-slate-300 transition-colors shadow-md"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl glass-panel border-white/15 bg-[#111827]/85 shadow-glass-luxury">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-100">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Instant Response Engine</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#39D98A]/10 text-[#39D98A] border border-[#39D98A]/30 text-[10px] font-mono">
                  ● Ready
                </span>
              </div>

              {isSuccess ? (
                <div className="p-8 text-center rounded-3xl bg-[#39D98A]/10 border border-[#39D98A]/30 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#39D98A]/20 text-[#39D98A] flex items-center justify-center mx-auto shadow-glow-emerald">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-100">Message Dispatched Successfully!</h4>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-md mx-auto">
                    Your inquiry has been sent to er.rajshubham@gmail.com with captured environment metadata. Shubham will reply directly to your email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">VISITOR NAME *</label>
                      <input
                        type="text"
                        {...register('user_name', { required: 'Name is required' })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-[#050816] border border-white/12 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#FF6B57] transition-all shadow-inner"
                      />
                      {errors.user_name && (
                        <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.user_name.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">VISITOR EMAIL *</label>
                      <input
                        type="email"
                        {...register('user_email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                        })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#050816] border border-white/12 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#FF6B57] transition-all shadow-inner"
                      />
                      {errors.user_email && (
                        <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.user_email.message}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">SUBJECT *</label>
                    <input
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      placeholder="Software Engineer Role / AI Microservice Opportunity"
                      className="w-full px-4 py-3 rounded-2xl bg-[#050816] border border-white/12 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#FF6B57] transition-all shadow-inner"
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.subject.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 mb-1.5 uppercase">MESSAGE *</label>
                    <textarea
                      rows={5}
                      {...register('message', { required: 'Message cannot be empty' })}
                      placeholder="Write your project details or job role specs here..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#050816] border border-white/12 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-[#FF6B57] transition-all resize-none shadow-inner"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block font-mono">{errors.message.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF6B57] to-[#F6C453] text-[#050816] font-display font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow-coral transition-all disabled:opacity-50 hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

