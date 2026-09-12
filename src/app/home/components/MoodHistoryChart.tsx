'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const MoodHistoryChartInner = dynamic(() => import('./MoodHistoryChartInner'), { ssr: false });

export default function MoodHistoryChart() {
    return <MoodHistoryChartInner />;
}