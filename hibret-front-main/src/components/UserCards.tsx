import React from 'react'
import GraphCards from './GraphCards'

const graphCards = () => {
  return (
    <div className="graphs flex gap-12 items-center mt-8 w-full ">
        <GraphCards/>
        <GraphCards/>
        <GraphCards/>
        <GraphCards/>
    </div>
  )
}

export default graphCards