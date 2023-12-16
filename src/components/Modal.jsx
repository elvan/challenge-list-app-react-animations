import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
  // const hiddenAnimationState = { opacity: 0, y: 30 };
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
        open
        className='modal'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal'),
  );
}
