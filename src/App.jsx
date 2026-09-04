import './App.css'
import Calendar from 'react-calendar'
import './Calendar.css'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, usePlotArea, } from 'recharts';
import { IconCalendarWeek } from '@tabler/icons-react'

const moodData = [
  { date: 'Aug 19', mood: 8 },
  { date: 'Aug 20', mood: 2 },
  { date: 'Aug 21', mood: 4 },
  { date: 'Aug 22', mood: 6 },
  { date: 'Aug 23', mood: 7 },
  { date: 'Aug 24', mood: 5 },
  { date: 'Aug 25', mood: 10 },
]

function MoodGradient() {
  const plotArea = usePlotArea()

  if (!plotArea) return null

  const plotTop = plotArea.y
  const plotBottom = plotArea.y + plotArea.height

  return (
    <defs>
      <linearGradient
        id="moodGradient"
        x1="0"
        y1={plotBottom}
        x2="0"
        y2={plotTop}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="10%" stopColor="#f52626" /> //10% doesn't equal 1
        <stop offset="20%" stopColor="#f57c26" />

        <stop offset="30%" stopColor="#e89d25" />
        <stop offset="40%" stopColor="#f9db16" />

        <stop offset="50%" stopColor="#d3f223" />
        <stop offset="60%" stopColor="#84f01f" />

        <stop offset="70%" stopColor="#84cc19" />
        <stop offset="80%" stopColor="#5fcc16" />

        <stop offset="90%" stopColor="#22c54b" />
        <stop offset="100%" stopColor="#1ba24a" />
      </linearGradient>
    </defs>
  )
}

function App() {
  return (
    <div className="app">
      <aside className="sidebar">

        <div className="block" id='calendar'>

          <Calendar 
          value={new Date()}
           showFixedNumberOfWeeks
            />
        </div>

        <div className="block" id='moodChart'>
          <div className="blockHeader">
            <p className='blockTitle'>Mood Chart</p>
          </div>
          <LineChart
            width={360}
            height={140}
            data={moodData}
            margin={{ left: -38, right: 0 }}
          >
            <MoodGradient></MoodGradient>

            <XAxis
              dataKey="date"
              interval={0}
              padding={{ left: 20, right: 20 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              domain={[0, 10.5]}
              ticks={[1, 5, 10]}
              tick={{ fontSize: 12 }}
            />
            <Line
              type="monotone"
              dataKey="mood"
                stroke="url(#moodGradient)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </div>

        <div className="block" id='sphereStats'>
          <p className='blockTitle'>Spere Stats</p>
        </div>

        <div className="block" id='topEmotions'>Top Emotions</div>
      </aside>

      <div className="content">

        <main className="main">
          <div className="block" id='selectedDate'>Selected Date</div>
          <div className="block" id='dailyMood'>Daily Mood</div>
          <div className="block"
          id='moodEntry'>Mood Entry</div>
        </main>
      </div>
    </div>
  )
}

export default App