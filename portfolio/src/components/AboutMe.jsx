import React from 'react'

function AboutMe({text, src}) {
  return (
    <div className='sm:container mt-5 flex justify-center content-center'>
        <p className='text-slate-50'> {text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas dolor soluta explicabo similique, reiciendis, cum nobis labore, ratione quasi ipsum tempora dolorem praesentium saepe. Fuga dolore ullam quasi. Asperiores!</p>
        <img className='w-32' src="https://www.latercera.com/resizer/cBLKPH-vN0jSRyO2xi67TeB2LdE=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/GONGDWKXLVAUPK5Y3CBE3MEBSQ.png" alt="" />
    </div>
  )
}

export default AboutMe