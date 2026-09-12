import AppLayout from '@/components/AppLayout';
import VerseOfDayCard from './components/VerseOfDayCard';
import MoodSelector from './components/MoodSelector';
import HomeActionBanner from './components/HomeActionBanner';
import MoodHistoryChart from './components/MoodHistoryChart';
import DailyStreakCard from './components/DailyStreakCard';

export default function HomePage() {
    return (
        <AppLayout>
            <div className="pb-20 md:pb-8 flex flex-col gap-6">
                {/* Greeting */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground font-medium">Selasa, 11 Agustus 2026</p>
                        <h1 className="text-2xl font-bold text-foreground mt-0.5">
                            Selamat pagi, Samuel 🙏
                        </h1>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-light border border-green-soft/30">
                        <span className="w-2 h-2 rounded-full bg-green-soft animate-pulse" />
                        <span className="text-xs font-semibold text-green-soft">HeartTalk aktif</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
                    {/* Verse of Day — hero card, spans 2 cols */}
                    <div className="md:col-span-2">
                        <VerseOfDayCard />
                    </div>

                    {/* Daily Streak */}
                    <div className="md:col-span-1">
                        <DailyStreakCard />
                    </div>

                    {/* Mood Selector — full width */}
                    <div className="md:col-span-3">
                        <MoodSelector />
                    </div>

                    {/* HeartTalk CTA Banner */}
                    <div className="md:col-span-3">
                        <HomeActionBanner />
                    </div>

                    {/* Mood History Chart — full width */}
                    <div className="md:col-span-3">
                        <MoodHistoryChart />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}