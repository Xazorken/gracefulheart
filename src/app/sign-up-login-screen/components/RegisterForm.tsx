'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeTerms: boolean;
}

interface RegisterFormProps {
    onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    const passwordValue = watch('password');

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        // BACKEND INTEGRATION: POST /api/auth/register with { fullName, email, password }
        await new Promise((res) => setTimeout(res, 1600));
        toast.success('Akun berhasil dibuat! Selamat datang di GracefulHeart 🙏');
        setIsLoading(false);
        router.push('/home');
    };

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-2xl font-bold text-foreground">Buat Akun</h2>
                <p className="text-sm text-muted-foreground mt-1">
                    Mulai perjalanan imanmu bersama GracefulHeart
                </p>
            </div>

            {/* Google SSO */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-semibold transition-all duration-200 active:scale-95 shadow-card"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                </svg>
                Daftar dengan Google
            </button>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">atau isi form</span>
                <div className="flex-1 h-px bg-border" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="reg-name" className="text-sm font-semibold text-foreground">
                        Nama Lengkap
                    </label>
                    <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="reg-name"
                            type="text"
                            placeholder="Nama kamu"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.fullName ? 'border-red-soft' : 'border-border focus:border-primary'
                                }`}
                            {...register('fullName', { required: 'Nama lengkap wajib diisi' })}
                        />
                    </div>
                    {errors.fullName && (
                        <p className="text-xs text-red-soft font-medium">{errors.fullName.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="reg-email" className="text-sm font-semibold text-foreground">
                        Alamat Email
                    </label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="reg-email"
                            type="email"
                            placeholder="nama@email.com"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.email ? 'border-red-soft' : 'border-border focus:border-primary'
                                }`}
                            {...register('email', {
                                required: 'Email wajib diisi',
                                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Format email tidak valid' },
                            })}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-xs text-red-soft font-medium">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="reg-password" className="text-sm font-semibold text-foreground">
                        Kata Sandi
                    </label>
                    <p className="text-xs text-muted-foreground">Minimal 8 karakter</p>
                    <div className="relative">
                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="reg-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Buat kata sandi"
                            className={`w-full pl-10 pr-12 py-3 rounded-xl border text-sm bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.password ? 'border-red-soft' : 'border-border focus:border-primary'
                                }`}
                            {...register('password', {
                                required: 'Kata sandi wajib diisi',
                                minLength: { value: 8, message: 'Minimal 8 karakter' },
                            })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-red-soft font-medium">{errors.password.message}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="reg-confirm" className="text-sm font-semibold text-foreground">
                        Konfirmasi Kata Sandi
                    </label>
                    <div className="relative">
                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="reg-confirm"
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="Ulangi kata sandi"
                            className={`w-full pl-10 pr-12 py-3 rounded-xl border text-sm bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.confirmPassword ? 'border-red-soft' : 'border-border focus:border-primary'
                                }`}
                            {...register('confirmPassword', {
                                required: 'Konfirmasi kata sandi wajib diisi',
                                validate: (val) => val === passwordValue || 'Kata sandi tidak cocok',
                            })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-soft font-medium">{errors.confirmPassword.message}</p>
                    )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2.5">
                    <input
                        id="agree-terms"
                        type="checkbox"
                        className="w-4 h-4 mt-0.5 rounded border-border accent-primary cursor-pointer"
                        {...register('agreeTerms', { required: 'Kamu harus menyetujui syarat dan ketentuan' })}
                    />
                    <label htmlFor="agree-terms" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                        Saya setuju dengan{' '}
                        <a href="#" className="text-primary hover:underline font-semibold">Syarat Layanan</a>{' '}
                        dan{' '}
                        <a href="#" className="text-primary hover:underline font-semibold">Kebijakan Privasi</a>{' '}
                        GracefulHeart
                    </label>
                </div>
                {errors.agreeTerms && (
                    <p className="text-xs text-red-soft font-medium -mt-2">{errors.agreeTerms.message}</p>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all duration-200 hover:bg-primary/90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-gold mt-1"
                    style={{ minHeight: '48px' }}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            <span>Membuat akun...</span>
                        </>
                    ) : (
                        <>
                            <UserPlus size={16} />
                            <span>Buat Akun</span>
                        </>
                    )}
                </button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
                Sudah punya akun?{' '}
                <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-primary font-semibold hover:underline transition-all"
                >
                    Masuk
                </button>
            </p>
        </div>
    );
}