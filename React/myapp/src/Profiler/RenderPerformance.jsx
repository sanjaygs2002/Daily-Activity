import React, { Profiler } from 'react'
import Counting from './Counting'
import Task2 from './Task2';


function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log("Profiler Info:", {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}


function RenderPerformance() {
  return (
    <>
    <Profiler id='render' onRender={onRender}>
        <Counting/>
        
    </Profiler>
    </>
  )
}

export default RenderPerformance