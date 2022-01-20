import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Icon, Icons } from '~/components';
import { route } from 'routes-gen';

export interface AuthenticationProps {
  open: boolean;
  onClose: () => void;
}

export function Authentication({ open, onClose }: AuthenticationProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-slate-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="text-light-snow-storm3">
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-dark-polar-night1">
                  <Icon icon={Icons.github} className="w-20 h-20" />
                </div>
              </div>
              <form action={route('/auth/github')} method="post" className="mt-5 sm:mt-6">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-500 sm:text-sm"
                >
                  Sign in with Github
                </button>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
