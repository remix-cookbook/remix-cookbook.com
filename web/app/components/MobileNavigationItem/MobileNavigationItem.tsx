import { Icon, Icons, Link } from '~/components';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import { useLocation } from 'remix';

enum Variant {
  ScrollToTop,
  Home,
}

export interface MobileNavigationItemProps {
  variant: Variant;
}

export function MobileNavigationItem({ variant }: MobileNavigationItemProps) {
  const [visible, setvisible] = useState(false);
  const threshold = 800;
  const location = useLocation();
  const hideHomeButton = variant === Variant.Home && location.pathname === '/';

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset;
      if (currentPosition > threshold) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return (
    <Transition
      show={visible}
      enter="transition-opacity durantion-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={classNames(
        'visible fixed h-16 w-16 bg-white  bg-opacity-40  shadow-md lg:invisible',
        {
          '-bottom-3 -right-3 rounded-tl-full': variant === Variant.ScrollToTop,
          '-bottom-3 -left-3 rounded-tr-full': variant === Variant.Home,
          'invisible': hideHomeButton,
        }
      )}
    >
      {variant === Variant.ScrollToTop ? (
        <a
          href="#"
          className="flex items-center justify-center w-full h-full"
          data-testid="scroll-to-top"
        >
          <Icon icon={Icons.caretUp} />
        </a>
      ) : null}
      {variant === Variant.Home ? (
        <Link.Internal
          href="/"
          className="flex items-center justify-center w-full h-full"
          data-testid="navigate-home"
        >
          <Icon icon={Icons.home} className="w-6 h-6" />
        </Link.Internal>
      ) : null}
    </Transition>
  );
}

MobileNavigationItem.variant = Variant;
