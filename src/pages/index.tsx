import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import IconBlock from '@/components/IconBlock';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Mindful Athlete | Science-Based Performance & Wellness</title>
        <meta
          name="description"
          content="Empower youth athletes with science-based insights on stress, recovery, and mindset. Learn biochemistry and psychology to enhance your performance and wellbeing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Project Mindful Athlete" />
        <meta property="og:description" content="Mindful performance through biochemistry and psychology" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-blue to-light-gray py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Mindful Performance Through Biochem + Psych
                </h1>
                <p className="text-lg text-text-light mb-8">
                  Understand your stress, master your recovery, and build unshakeable confidence. Project Mindful Athlete translates cutting-edge science into tools that work for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton href="/science" size="lg">
                    Learn the Science →
                  </CTAButton>
                  <CTAButton href="/tools" variant="outline" size="lg">
                    Explore Tools
                  </CTAButton>
                </div>
              </div>
              <div className="animate-slide-in-right hidden md:block">
                <img src="/images/hero-bg.svg" alt="Hero illustration" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">What Makes Us Different</h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                We bridge the gap between advanced science and real-world athlete needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <IconBlock
                icon="/icons/brain.svg"
                title="Science-Based"
                description="Every tool is grounded in biochemistry and psychology research—not guesswork."
              />
              <IconBlock
                icon="/icons/heart.svg"
                title="Athlete-Friendly"
                description="We speak your language. Clear, practical strategies you can use before, during, and after competition."
              />
              <IconBlock
                icon="/icons/athlete.svg"
                title="Holistic Wellness"
                description="Performance and wellbeing go hand-in-hand. We help you build both."
              />
            </div>
          </div>
        </section>

        {/* Key Concepts Preview */}
        <section className="py-16 md:py-24 bg-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Key Concepts You'll Master</h2>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Understanding these four pillars transforms how you approach your sport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-dark mb-3">🧠 Cortisol & Stress</h3>
                <p className="text-text-light mb-4">The hormone that prepares you for performance—or overwhelms you. Learn to use it.</p>
                <a href="/science" className="text-dark-blue font-semibold hover:text-primary-blue">
                  Explore →
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-dark mb-3">🏅 Dopamine & Motivation</h3>
                <p className="text-text-light mb-4">Your inner drive. Discover how to maintain it through wins and challenges.</p>
                <a href="/science" className="text-dark-blue font-semibold hover:text-primary-blue">
                  Explore →
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-dark mb-3">😴 Sleep Hormones & Recovery</h3>
                <p className="text-text-light mb-4">Your superpowers are built during sleep. Master your recovery game.</p>
                <a href="/science" className="text-dark-blue font-semibold hover:text-primary-blue">
                  Explore →
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-text-dark mb-3">🫁 Nervous System & Breathwork</h3>
                <p className="text-text-light mb-4">You control your breath. Your breath controls your performance.</p>
                <a href="/science" className="text-dark-blue font-semibold hover:text-primary-blue">
                  Explore →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-dark-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Perform Like a Scientist?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Get practical tools grounded in science. Start small, build strong habits, perform consistently.
            </p>
            <CTAButton href="/tools" variant="secondary" size="lg">
              Explore Our Tools
            </CTAButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
