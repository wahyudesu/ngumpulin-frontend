'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Data untuk daftar tugas dan waktu
const tasks = [
  { time: '8 hrs', description: 'conducting research' },
  { time: '+4 hrs', description: 'writing research papers' },
  { time: '+3 hrs', description: 'supervising graduate students' },
  { time: '+2 hrs', description: 'attending faculty meetings' },
  { time: '+1 hr', description: 'grading assignments' },
  { time: '+2 hrs', description: 'preparing lectures' },
  { time: '+1 hr', description: 'advising students' },
  { time: '+3 hrs', description: 'managing administrative tasks' },
  { time: '+2 hrs', description: 'designing final projects' },
  { time: '+4 hrs', description: 'spending time with family' },
  { time: '+ ∞ hrs', description: 'overthinking work-life balance' }
];

// Komponen kecil untuk menampilkan ikon panah
const ArrowIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export default function Problem() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 space-y-8 bg-slate-700">
      <h1 className="text-4xl font-bold text-white text-center">
        The Problem is
      </h1>
    <br>
    </br>
      {/* Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-6 text-zinc-400 text-lg bg-red-900 p-8 rounded-lg shadow-xl"
      >
        <h1 className="sr-only">Daftar Tugas dan Waktu</h1>
        
        {/* Daftar tugas */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="grid grid-cols-[auto_1fr] gap-x-3 items-center"
            >
              <span className="text-rose-500 text-right whitespace-nowrap">{task.time}</span>
              <span className="text-white">{task.description}</span>
            </motion.li>
          ))}
        </ul>

        {/* Total waktu */}
        <div className="pt-4 border-t border-zinc-800">
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
            <span className="text-rose-500 text-right font-bold">= 22+ hours</span>
            <span className="text-white">of headaches 🌧️</span>
          </div>
        </div>

        {/* Pesan penutup */}
        <motion.div 
          className="pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-zinc-300 flex items-center justify-center gap-2">
            <ArrowIcon />
            <span>There&apos;s an easier way</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}