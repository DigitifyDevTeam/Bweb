import { useMemo, useState } from 'react'
import { TrendingUp, Calculator } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'

function formatEuro(value: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function SavingsCalculator() {
  const [hours, setHours] = useState(20)
  const [rate, setRate] = useState(35)
  const [team, setTeam] = useState(5)

  const monthly = useMemo(() => hours * rate * team * 4, [hours, rate, team])
  const yearly = monthly * 12
  const automated = Math.round(yearly * 0.55)

  return (
    <section className="relative py-16">
      <div className="container-page">
        <ScrollReveal>
          <div className="glass ring-gradient relative overflow-hidden rounded-[32px] p-8 md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="flex flex-col gap-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  <Calculator className="size-3.5" />
                  Calculatrice d'économies
                </span>
                <h2 className="text-3xl md:text-4xl font-bold leading-[1.05]">
                  Nos chiffres en <GradientText>impact business</GradientText>
                </h2>
                <p className="text-[color:var(--color-muted)] leading-relaxed">
                  Estimez l'impact d'une automatisation BWEB sur les tâches répétitives.
                  Les chiffres sont indicatifs, basés sur 55 % de gains constatés en moyenne.
                </p>

                <div className="flex flex-col gap-5">
                  <Slider
                    label="Heures par semaine sur des tâches répétitives"
                    value={hours}
                    onChange={setHours}
                    min={1}
                    max={40}
                    suffix="h"
                  />
                  <Slider
                    label="Coût horaire moyen"
                    value={rate}
                    onChange={setRate}
                    min={15}
                    max={150}
                    suffix=" €"
                  />
                  <Slider
                    label="Personnes concernées"
                    value={team}
                    onChange={setTeam}
                    min={1}
                    max={50}
                    suffix=""
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <ResultCard
                  label="Coût annuel actuel des tâches répétitives"
                  value={formatEuro(yearly)}
                />
                <ResultCard
                  label="Économies estimées avec BWEB (55 %)"
                  value={formatEuro(automated)}
                  highlight
                  trend
                />
                <ResultCard
                  label="Heures libérées par an"
                  value={`${(hours * team * 52 * 0.55).toFixed(0)} h`}
                />
                <p className="mt-2 text-xs text-[color:var(--color-subtle)]">
                  Estimation indicative basée sur la moyenne des projets BWEB livrés en 2025-2026.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

interface SliderProps {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  suffix: string
}

function Slider({ label, value, onChange, min, max, suffix }: Readonly<SliderProps>) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[color:var(--color-muted)]">{label}</span>
        <span className="text-sm font-semibold tabular-nums">
          {value}
          {suffix}
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-white/5">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-brand"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 size-full cursor-pointer appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:size-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(91,141,239,0.35)]
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:size-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>
    </div>
  )
}

interface ResultCardProps {
  label: string
  value: string
  highlight?: boolean
  trend?: boolean
}

function ResultCard({ label, value, highlight, trend }: Readonly<ResultCardProps>) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 ${
        highlight
          ? 'border-transparent ring-gradient bg-white/[0.04]'
          : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-[color:var(--color-muted)]">{label}</span>
        {trend ? <TrendingUp className="size-4 text-emerald-400" /> : null}
      </div>
      <div
        className={`mt-2 font-display text-3xl font-extrabold tracking-tight ${
          highlight ? 'text-gradient' : 'text-[color:var(--color-text)]'
        }`}
      >
        {value}
      </div>
    </div>
  )
}
