import BalancedBox from '@/components/BalancedBox'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Ayush" , lastName: "Bhatt", email: "ayush@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account and transactions efficiently"
            />
          <BalancedBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.80}
            />
            
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user = {loggedIn}
      transactions= {[]}
      banks = {[{},{}]}/>
    </section>
  )
}

export default Home