import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { Icon, Icons } from '~/components';
import { domain } from '~/config';

export function Feed() {
  return (
    <Menu as="div" className="relative ml-1">
      <div>
        <Menu.Button
          title="RSS"
          data-testid="feed-icon"
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">Open user menu</span>
          <Icon icon={Icons.feed} className="text-light-snow-storm4 h-6 w-6" />
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
          data-testid="feed-overlay"
          className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href={`https://${domain}/rss.xml`}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                RSS
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={`https://${domain}/atom.xml`}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Atom
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={`https://${domain}/feed.json`}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                JSON
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
