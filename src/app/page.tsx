'use client';

import React, { useEffect, useRef, useState } from 'react';

const bearSVG = (
    <svg
        className="w-16 h-16 sm:w-10 sm:h-10 mb-3 animate-bounce"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <ellipse cx="32" cy="36" rx="22" ry="20" fill="#e0e7ef" />
        <ellipse cx="18" cy="18" rx="7" ry="8" fill="#e0e7ef" />
        <ellipse cx="46" cy="18" rx="7" ry="8" fill="#e0e7ef" />
        <ellipse cx="32" cy="38" rx="15" ry="13" fill="#fff" />
        <ellipse cx="25" cy="38" rx="2.5" ry="2.5" fill="#7c3aed" />
        <ellipse cx="39" cy="38" rx="2.5" ry="2.5" fill="#7c3aed" />
        <ellipse cx="32" cy="45" rx="5" ry="2.2" fill="#b39ddb" />
        <path d="M29 42 Q32 44 35 42" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
    </svg>
);

const instaSVG = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 448 448"
        aria-hidden="true"
        focusable="false"
        className=""
    >
        <defs>
            <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
        </defs>
        <rect x="24" y="24" width="400" height="400" rx="90" fill="url(#ig-gradient)" />
        <path
            d="M224 144c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 132c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52zm85-136c0 9.4-7.6 17-17 17s-17-7.6-17-17 7.6-17 17-17 17 7.6 17 17zm48 17.1c-1.1-23.6-6.4-44.5-23.4-61.5S327.6 49.1 304 48c-23.6-1.1-94.4-1.1-118 0-23.6 1.1-44.5 6.4-61.5 23.4S49.1 120.4 48 144c-1.1 23.6-1.1 94.4 0 118 1.1 23.6 6.4 44.5 23.4 61.5s37.9 22.3 61.5 23.4c23.6 1.1 94.4 1.1 118 0 23.6-1.1 44.5-6.4 61.5-23.4s22.3-37.9 23.4-61.5c1.1-23.6 1.1-94.4 0-118zm-48.5 143.5c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.1 0-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2 0-132.1 7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.1 0 19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 0 132.1z"
            fill="#fff"
        />
        <circle cx="224" cy="224" r="52" fill="none" stroke="#fff" strokeWidth="16" />
        <circle cx="309" cy="139" r="17" fill="#fff" />
    </svg>
);

function showToast(msg: string) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '32px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#7c3aed';
    toast.style.color = '#fff';
    toast.style.padding = '0.6em 1.2em';
    toast.style.borderRadius = '1em';
    toast.style.fontWeight = 'bold';
    toast.style.fontSize = '1em';
    toast.style.boxShadow = '0 2px 8px 0 #b39ddb55';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 1200);
}

export default function Home() {
    const [birth, setBirth] = useState('');
    const [message, setMessage] = useState<React.ReactNode>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const saved = localStorage.getItem('savedBirth');
        if (saved) setBirth(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('savedBirth', birth);
    }, [birth]);

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setBirth(e.target.value);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let value = birth.trim();
        let formatted = '';
        if (/^\d{6}$/.test(value)) {
            const yy = parseInt(value.slice(0, 2), 10);
            const mm = value.slice(2, 4);
            const dd = value.slice(4, 6);
            const year = yy > 50 ? 1900 + yy : 2000 + yy;
            formatted = `${year}/${mm}/${dd}`;
            value = formatted;
        }
        const regex = /^\d{4}\/\d{2}\/\d{2}$/;
        if (!regex.test(value)) {
            setMessage(<div className="error-msg">YYYY/MM/DD 형식 또는 YYMMDD 6자리로 입력해주세요.</div>);
            return;
        }
        const [year, month, day] = value.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day);
        if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day) {
            setMessage(<div className="error-msg">존재하지 않는 날짜입니다.</div>);
            return;
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        birthDate.setHours(0, 0, 0, 0);
        const diffTime = today.getTime() - birthDate.getTime();
        if (diffTime < 0) {
            setMessage(<div className="error-msg">미래의 날짜는 입력할 수 없습니다.</div>);
            return;
        }
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setMessage(
            <div className="result-msg">
                📅 <span className="text-base">{value}</span>
                <br />
                태어난 날짜로부터{' '}
                <span className="font-extrabold text-xl text-violet-700" id="days">
                    {diffDays}
                </span>
                일이 지났어요!
            </div>
        );
        // Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(diffDays.toString()).then(() => showToast('복사됨!'));
        } else {
            // fallback
            const textarea = document.createElement('textarea');
            textarea.value = diffDays.toString();
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                showToast('복사됨!');
            } catch {}
            document.body.removeChild(textarea);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 py-8 px-4 relative font-sans">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">생일 일수 계산기</h1>
            <h2 className="sr-only">Birthday Days Counter - 우리 아이, 태어난 날로부터 며칠?</h2>
            <div className="container mx-auto max-w-xs w-full bg-white/95 rounded-3xl shadow-xl border border-slate-200 flex flex-col items-center p-8 sm:p-4">
                <div className="character flex justify-center mb-2">{bearSVG}</div>
                <h1 className="cute-title text-center text-xl font-bold text-slate-800 mb-6">
                    우리 아이, 태어난 날로부터 며칠?
                </h1>
                <form
                    className="w-full flex flex-col gap-3 items-center mb-2"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-lg text-center outline-none bg-slate-50/70 shadow-sm focus:border-violet-600 focus:bg-white focus:shadow-md transition text-red-900"
                        placeholder="YYYY/MM/DD 또는 YYMMDD"
                        maxLength={10}
                        required
                        value={birth}
                        onChange={handleInput}
                    />
                    <button
                        type="submit"
                        className="bg-violet-100 text-violet-700 font-semibold rounded-xl px-8 py-3 text-lg shadow hover:bg-violet-200 transition mt-1"
                    >
                        확인
                    </button>
                </form>
                <div className="w-full min-h-[2.5em]">{message}</div>
            </div>
            <footer className="footer w-full flex justify-center items-center fixed left-0 bottom-0 z-10 bg-none pointer-events-none">
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-link flex items-center gap-3 text-pink-600 font-bold text-lg bg-white/95 rounded-full shadow-lg px-6 py-3 mt-4 pointer-events-auto hover:bg-pink-50 hover:shadow-xl transition border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    aria-label="Instagram"
                >
                    {instaSVG}
                    <span className="insta-text font-bold text-pink-700 text-lg">Instagram</span>
                </a>
            </footer>
            <style jsx global>{`
                .cute-title {
                    font-family: 'Inter', 'Gowun Dodum', sans-serif;
                    letter-spacing: -0.01em;
                }
                .result-msg {
                    margin-top: 1.2em;
                    color: #7c3aed;
                    font-size: 1.22em;
                    font-weight: 600;
                    text-align: center;
                    background: #f5f7fa;
                    border-radius: 1.2em;
                    padding: 1.1em 1.4em;
                    box-shadow: 0 1px 8px 0 #b39ddb22;
                    letter-spacing: -0.01em;
                }
                .error-msg {
                    margin-top: 1em;
                    color: #d32f2f;
                    font-size: 1.12em;
                    font-weight: 600;
                    text-align: center;
                    background: #ffebee;
                    border-radius: 1.2em;
                    padding: 1em 1.2em;
                    box-shadow: 0 1px 8px 0 #d32f2f22;
                }
                @media (max-width: 500px) {
                    .container {
                        padding: 1.1rem 0.9rem 1.1rem 0.9rem !important;
                        max-width: 98vw !important;
                        border-radius: 1.3rem !important;
                        margin-top: 0.7rem !important;
                        margin-bottom: 0.7rem !important;
                    }
                    .cute-title {
                        font-size: 1.13rem !important;
                        margin-bottom: 1.1rem !important;
                    }
                }
            `}</style>
        </div>
    );
}
