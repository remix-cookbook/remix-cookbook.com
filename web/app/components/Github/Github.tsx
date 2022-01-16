import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Icon, Icons } from '~/components';
import { domain, siteName } from '~/config';

export function Github() {
  return (
    <Menu as="div" className="relative ml-1">
      <div>
        <Menu.Button
          title="RSS"
          data-testid="github-icon"
          className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Open user menu</span>
          <Icon icon={Icons.github} className="w-6 h-6 text-light-snow-storm4" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          data-testid="github-overlay"
          className="absolute right-0 z-20 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-60 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href={`https://github.com/${siteName}/${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'px-4 py-2 text-sm text-gray-700 flex gap-2'
                )}
              >
                <Icon icon={Icons.github} className="w-5 h-5 text-gray-700" />
                This blog's source code
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={`https://github.com/${siteName}`}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'px-4 py-2 text-sm text-gray-700 flex gap-2'
                )}
              >
                <Icon icon={Icons.github} className="w-5 h-5 text-gray-700" />
                Our organization
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
