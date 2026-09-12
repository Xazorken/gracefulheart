'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, Copy, Check, LogIn } from 'lucide-react';
import { toast } from 'sonner';

interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface DemoCredential {
    role: string;
    email: string;
    password: string;
}

const demoCredentials: DemoCredential[] = [
    { role: 'Pengguna', email: 'samuel.manurung@gracefulheart.id', password: 'BlessedHeart2024' },
    { role: 'Admin', email: 'admin@gracefulheart.id', password: 'GraceAdmin#2024' },
];

interface LoginFormProps {
    onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<LoginFormValues>({
        defaultValues: { email: '', password: '', rememberMe: false },
    });

    const handleCopy = (text: string, fieldId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const fillCredentials = (cred: DemoCredential) => {
        setValue('email', cred.email);
        setValue('password', cred.password);
        toast.success(`Kredensial ${cred.role} diisi otomatis`);
    };

    const onSubmit = async (data: LoginFormValues) => {
        setIsLoading(true);
        // BACKEND INTEGRATION: POST /api/auth/login with { email, password }
        await new Promise((res) => setTimeout(res, 1400));

        const validCreds = demoCredentials.find(
            (c) => c.email === data.email && c.password === data.password
        );

        if (!validCreds) {
            setIsLoading(false);
            toast.error('Kredensial tidak valid — gunakan akun demo di bawah untuk masuk');
            return;
        }

        toast.success('Selamat datang kembali! 🙏');
        setIsLoading(false);
        router.push('/home');
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-bold text-foreground">Selamat Datang</h2>
                <p className="text-sm text-muted-foreground mt-1">
                    Masuk untuk melanjutkan perjalanan imanmu
                </p>
            </div>

            {/* Google SSO */}
            <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-sm font-semibold transition-all duration-200 active:scale-95 shadow-card hover:shadow-card-hover"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                    <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                </svg>
                Masuk dengan Google
            </button>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">atau</span>
                <div className="flex-1 h-px bg-border" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="login-email" className="text-sm font-semibold text-foreground">
                        Alamat Email
                    </label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="login-email"
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
                    <div className="flex items-center justify-between">
                        <label htmlFor="login-password" className="text-sm font-semibold text-foreground">
                            Kata Sandi
                        </label>
                        <button
                            type="button"
                            className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                            Lupa kata sandi?
                        </button>
                    </div>
                    <div className="relative">
                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan kata sandi"
                            className={`w-full pl-10 pr-12 py-3 rounded-xl border text-sm bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${errors.password ? 'border-red-soft' : 'border-border focus:border-primary'
                                }`}
                            {...register('password', { required: 'Kata sandi wajib diisi' })}
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

                {/* Remember me */}
                <div className="flex items-center gap-2.5">
                    <input
                        id="remember-me"
                        type="checkbox"
                        className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                        {...register('rememberMe')}
                    />
                    <label htmlFor="remember-me" className="text-sm text-muted-foreground cursor-pointer">
                        Ingat saya di perangkat ini
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all duration-200 hover:bg-primary/90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-gold"
                    style={{ minHeight: '48px' }}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            <span>Memproses...</span>
                        </>
                    ) : (
                        <>
                            <LogIn size={16} />
                            <span>Masuk</span>
                        </>
                    )}
                </button>
            </form>

            {/* Demo Credentials */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">
                    Akun Demo
                </p>
                <div className="flex flex-col gap-2">
                    {demoCredentials.map((cred) => (
                        <div
                            key={`cred-${cred.role}`}
                            className="flex items-center justify-between gap-2 bg-card rounded-lg px-3 py-2.5 border border-border"
                        >
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-primary mb-0.5">{cred.role}</p>
                                <p className="text-xs text-muted-foreground truncate font-mono">{cred.email}</p>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => handleCopy(cred.email, `email-${cred.role}`)}
                                    className="w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
                                    title="Salin email"
                                >
                                    {copiedField === `email-${cred.role}` ? <Check size={13} className="text-green-soft" /> : <Copy size={13} />}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => fillCredentials(cred)}
                                    className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-all duration-150"
                                >
                                    Gunakan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Belum punya akun?{' '}
                <button
                    type="button"
                    onClick={onSwitchToRegister}
                    className="text-primary font-semibold hover:underline transition-all"
                >
                    Daftar sekarang
                </button>
            </p>
        </div>
    );
}