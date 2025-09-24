import CompanionCard from '@/components/CompanionCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1>Popular Compagnions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy of Explorer"
          topic="Neural Network of The Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizzard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="123"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject='English Literature'
          duration={45}
          color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title='Recent completed sessions'
          companions = {recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
    
  )
}

export default Page