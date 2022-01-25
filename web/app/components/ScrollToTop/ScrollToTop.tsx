import { Icon, Icons } from '~/components';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

export function ScrollToTop() {
  const [displayScrollToTop, setdisplayScrollToTop] = useState<boolean>(false);
  const threshold = 800;

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > threshold) {
        setdisplayScrollToTop(true);
      } else {
        setdisplayScrollToTop(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <Transition
      show={displayScrollToTop}
      enter="transition-opacity durantion-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="visible fixed -bottom-3 -right-3 h-16 w-16 rounded-tl-full bg-white bg-opacity-40 shadow-md lg:invisible"
    >
      <a
        href="#"
        className="flex h-full w-full items-center justify-center"
        data-testid="scroll-to-top"
      >
        <Icon icon={Icons.caretUp} />
      </a>
    </Transition>
  );
}
