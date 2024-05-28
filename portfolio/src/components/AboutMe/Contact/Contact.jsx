import React from 'react'
import Stack from '@mui/material/Stack';
function Contact() {
  return (
    <Stack spacing={2} className="contact">
        <h1 className='font-bold text-center'>Contacto</h1>
        <span className='flex items-center gap-1'><i class="fa-solid fa-envelope"></i>duvaraclaudiojavier@gmail.com</span>
        <span className='flex items-center gap-1'><i class="fa-brands fa-linkedin"></i>Duvarax</span>
        <span className='flex items-center gap-1'><i class="fa-solid fa-phone"></i>2665024712</span>
        <span className='flex items-center gap-1'><i class="fa-solid fa-clock"></i>Disponibilidad Full Time</span>
        <span className='flex items-center gap-1'><i class="fa-solid fa-map-pin"></i>San Luis - Argentina</span>
    </Stack>
  )
}

export default Contact