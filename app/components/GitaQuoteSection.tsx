"use client"

import MotionReveal from './MotionReveal'

const sanskrit = `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`

const english =
  'You have the right to perform your duty, but you are not entitled to the fruits of your action.'

export default function GitaQuoteSection() {
  return (
    <section className="bg-white">
      <div className="section-shell-last">
        <MotionReveal className="w-full">
          <figure className="w-full rounded-2xl border border-gray-200 bg-[#f6fbf6] px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="section-eyebrow mb-6">Bhagavad Gita · 2.47</p>

            <blockquote
              className="font-[family-name:var(--font-devanagari)] text-xl leading-[1.9] font-medium text-black sm:text-2xl"
              lang="sa"
            >
              {sanskrit.split('\n').map((line, index) => (
                <span key={line} className={index > 0 ? 'mt-1 block' : 'block'}>
                  {line}
                </span>
              ))}
            </blockquote>

            <div className="mx-auto my-6 h-px w-12 bg-gray-300" />

            <p className="text-lg leading-relaxed font-medium tracking-tight text-black sm:text-xl">
              <span
                className="px-1.5 py-0.5"
                style={{
                  backgroundColor: '#D4F7D4',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                }}
              >
                {english}
              </span>
            </p>

            <figcaption className="mt-6 text-sm text-gray-400">— Bhagavad Gita</figcaption>
          </figure>
        </MotionReveal>
      </div>
    </section>
  )
}
