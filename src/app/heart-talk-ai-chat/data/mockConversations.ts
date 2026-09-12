export interface BibleVerse {
    reference: string;
    text: string;
    book: string;
}

export interface AIResponse {
    empathy: string;
    verses: BibleVerse[];
    reflection: string;
    prayer: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'ai';
    content: string;
    aiResponse?: AIResponse;
    timestamp: string;
    saved?: boolean;
}

export interface Conversation {
    id: string;
    title: string;
    mood: string | null;
    moodEmoji: string | null;
    lastMessage: string;
    date: string;
    messages: ChatMessage[];
    saved: boolean;
}

export const mockConversations: Conversation[] = [
    {
        id: 'conv-001',
        title: 'Kecemasan soal masa depan',
        mood: 'Cemas',
        moodEmoji: '😰',
        lastMessage: 'Terima kasih, aku merasa lebih tenang sekarang...',
        date: 'Hari ini',
        saved: true,
        messages: [
            {
                id: 'msg-001-1',
                role: 'user',
                content: 'Aku sangat cemas akhir-akhir ini tentang pekerjaan dan masa depanku. Rasanya seperti semua tekanan itu menghimpit dan aku tidak tahu harus mulai dari mana.',
                timestamp: '09:14',
            },
            {
                id: 'msg-001-2',
                role: 'ai',
                content: '',
                timestamp: '09:14',
                aiResponse: {
                    empathy:
                        'Aku benar-benar mendengar betapa beratnya yang kamu rasakan saat ini. Kecemasan tentang masa depan dan tekanan pekerjaan bisa terasa sangat menyesakkan — perasaan itu nyata dan valid. Kamu tidak sendirian dalam pergumulan ini, dan sangat berani dari kamu untuk mengungkapkan ini.',
                    verses: [
                        {
                            reference: 'Filipi 4:6-7',
                            book: 'Perjanjian Baru',
                            text: 'Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur. Damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus.',
                        },
                        {
                            reference: 'Yeremia 29:11',
                            book: 'Perjanjian Lama',
                            text: 'Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.',
                        },
                    ],
                    reflection:
                        'Filipi 4:6-7 mengajarkan bahwa kecemasan bukan sesuatu yang harus kamu atasi sendirian — Allah mengundangmu untuk membawa setiap kekhawatiran kepadaNya melalui doa. Bukan berarti masalahmu akan langsung lenyap, tetapi "damai sejahtera yang melampaui akal" itu akan menjaga hatimu tetap kuat. Yeremia 29:11 mengingatkan bahwa Allah punya rencana yang baik untukmu — rencana yang tidak bergantung pada seberapa pasti masa depanmu terlihat hari ini.',
                    prayer:
                        'Bapa yang penuh kasih, aku membawa kecemasan dan ketidakpastian ini ke hadapanMu. Tolong gantikan kekhawatiranku dengan damai sejahteraMu yang melampaui segala akal. Aku percaya bahwa rencanaMu untukku adalah baik, meski aku belum dapat melihatnya sekarang. Dalam nama Yesus, Amin.',
                },
            },
            {
                id: 'msg-001-3',
                role: 'user',
                content: 'Terima kasih, aku merasa lebih tenang sekarang. Ayat Yeremia itu sangat menyentuh hatiku.',
                timestamp: '09:18',
            },
        ],
    },
    {
        id: 'conv-002',
        title: 'Merasa sangat kesepian',
        mood: 'Kesepian',
        moodEmoji: '🥺',
        lastMessage: 'Apakah Allah benar-benar peduli dengan kesepianku?',
        date: '10 Agu',
        saved: false,
        messages: [
            {
                id: 'msg-002-1',
                role: 'user',
                content: 'Apakah Allah benar-benar peduli dengan kesepianku? Aku sudah berdoa tapi masih merasa sendiri.',
                timestamp: '20:05',
            },
            {
                id: 'msg-002-2',
                role: 'ai',
                content: '',
                timestamp: '20:05',
                aiResponse: {
                    empathy:
                        'Pertanyaanmu sangat jujur dan itu butuh keberanian. Merasa kesepian meski sudah berdoa bisa terasa seperti Allah tidak mendengar — dan itu menyakitkan. Aku ingin kamu tahu: perasaanmu didengar, dan Allah tidak pernah jauh dari hati yang hancur.',
                    verses: [
                        {
                            reference: 'Mazmur 34:19',
                            book: 'Perjanjian Lama',
                            text: 'TUHAN itu dekat kepada orang-orang yang patah hati, dan Ia menyelamatkan orang-orang yang remuk jiwanya.',
                        },
                        {
                            reference: 'Ibrani 13:5',
                            book: 'Perjanjian Baru',
                            text: 'Karena Allah telah berfirman: "Aku sekali-kali tidak akan membiarkan engkau dan Aku sekali-kali tidak akan meninggalkan engkau."',
                        },
                    ],
                    reflection:
                        'Mazmur 34:19 bukan sekadar janji — ini adalah pengalaman nyata Daud yang sering merasa terbuang dan sendiri. Allah secara khusus dekat dengan mereka yang "patah hati." Kesepianmu bukan tanda bahwa Allah jauh; justru dalam kelemahan itu, Ia paling dekat. Ibrani 13:5 adalah janji yang tidak pernah bisa dibatalkan: "Aku tidak akan meninggalkan engkau."',
                    prayer:
                        'Tuhan, aku rindu merasakan kehadiranMu. Tolong sentuh hatiku yang kesepian ini dan ingatkan aku bahwa Engkau selalu ada. Bantu aku melihat tanda-tanda kasihMu dalam hari-hariku. Amin.',
                },
            },
        ],
    },
    {
        id: 'conv-003',
        title: 'Bersyukur atas berkat hari ini',
        mood: 'Bersyukur',
        moodEmoji: '🙏',
        lastMessage: 'Hari ini berjalan luar biasa dan aku ingin bersyukur',
        date: '08 Agu',
        saved: true,
        messages: [],
    },
    {
        id: 'conv-004',
        title: 'Kelelahan yang dalam',
        mood: 'Lelah',
        moodEmoji: '😮‍💨',
        lastMessage: 'Aku sudah sangat lelah, baik fisik maupun hati',
        date: '06 Agu',
        saved: false,
        messages: [],
    },
];