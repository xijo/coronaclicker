import React, {useEffect, useRef} from 'react'

export const Modal = ({children, onClose, headline}) => {
  // Handle escape
  useEffect(() => {
    document.onkeydown = event => {if (event.key === 'Escape') onClose()}
    return () => {document.onkeydown = null}
  }, [onClose])

  // Handle backdrop click
  const backdrop = useRef()
  const closeOnBackdrop = event => {if (backdrop.current === event.target) onClose()}

  return <div ref={backdrop} className='fixedlayer bg-white-transparent md:flex items-center justify-center p-3 animation-fadein animation-speed-400 z-40' onClick={closeOnBackdrop}>
    <div className='max-h-full w-full max-w-lg md:w-modal bg-white rounded shadow animation-scaleup animation-speed-600 z-50 text-black text-left'>
      {/* <div className='text-2xl py-4 relative border-b border-grey-650'>
        <span className='pl-2'>{headline}</span>
        <button className='absolute right-1' onClick={onClose}>
          <span className='icon icon-icons_cross' />
        </button>
      </div>

      <div className="wrap modal-max-height">
    </div> */}
    {children}
    </div>
  </div>
}
