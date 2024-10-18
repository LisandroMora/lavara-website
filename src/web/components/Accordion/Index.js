/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { AccordionStyled } from './style'

function Accordion({ title, children }) {
  const [active, setActive] = useState(false)
  const panelRef = useRef(null)

  const handleAccordion = () => {
    setActive(!active)

    if (panelRef.current.style.maxHeight) {
      panelRef.current.style.maxHeight = null
    } else {
      panelRef.current.style.maxHeight = (panelRef.current.scrollHeight + 50) + "px" 
    }
  }

  return (
    <AccordionStyled active={active}>
        <button className="accordion" onClick={handleAccordion}>
          <span>{title}</span>
          <svg width="68" height="58" viewBox="0 0 68 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_49_227)">
              <path d="M42.0653 0H53.9371L41.6687 26.2404L30.7184 26.1203L35.165 39.8082L27.9945 58H16.1226L42.0653 0Z" fill="#4FC5D3" className='top'/>
              <path d="M4.91293 34.8536L0 24.0054L63.0871 23.146L68 33.9942L4.91293 34.8536Z" fill="#F47D20"/>
            </g>
            <defs>
              <clipPath id="clip0_49_227">
                <rect width="68" height="58" fill="white"/>
              </clipPath>
            </defs>
          </svg>

        </button>
        <div className="panel" ref={panelRef}>
          {children}
        </div>
    </AccordionStyled>
  )
}

export default Accordion