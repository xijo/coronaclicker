import React, {useEffect, useRef} from 'react'

export const Modal = ({children, onClose}) => {
  // Handle escape
  useEffect(() => {
    document.onkeydown = event => {if (event.key === 'Escape') onClose()}
    return () => {document.onkeydown = null}
  }, [onClose])

  useEffect(() => {
    const initialBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = initialBodyOverflow
  })

  // Handle backdrop click
  const backdrop = useRef()
  const closeOnBackdrop = event => {if (backdrop.current === event.target) onClose()}

  return <div ref={backdrop} className='fixedlayer bg-white-transparent md:flex items-center justify-center p-3 animation-fadein animation-speed-400 z-40' onClick={closeOnBackdrop}>
    <div className='max-h-full w-full max-w-lg md:w-modal bg-white rounded shadow animation-scaleup animation-speed-600 z-50 text-black text-left'>
      {children}
    </div>
  </div>
}
