import React from 'react'
import './PlanScreen.css'

function PlanScreen() {
  return (
    <div className='planScreen'>
      <div className='planScreen__plan'>
        <div className='planscreen_info'>
            <h4>Netflix Basic</h4>
            <h5>720p</h5>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='planScreen__plan_1'>
        <div className='planscreen_info_1'>
            <h4>Netflix Standard</h4>
            <h5>1080p</h5>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='planScreen__plan_2'>
        <div className='planscreen_info_2'>
            <h4>Netflix Premium</h4>
            <h5>4K+HDR</h5>
        </div>
        <button>Current Package</button>
      </div>
    </div>
  )
}

export default PlanScreen
