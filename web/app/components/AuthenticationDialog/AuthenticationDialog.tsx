import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Icon, Icons } from '~/components';
import { route } from 'routes-gen';
import { BlogTypes } from '~/features/Blog';

export interface AuthenticationProps {
  open: boolean;
  onClose: () => void;
  post: BlogTypes.Post;
}

export function AuthenticationDialog({ open, onClose, post }: AuthenticationProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        data-testid="authentication-dialog"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
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
            <div className="inline-block transform overflow-hidden rounded-lg bg-slate-900 px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
              <div className="text-light-snow-storm3">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dark-polar-night1">
                  <Icon icon={Icons.github} className="h-20 w-20" />
                </div>
              </div>
              <form action={route('/auth/github')} method="post" className="mt-5 sm:mt-6">
                <input type="hidden" name="slug" value={post.slug.current} />
                <button
                  type="submit"
                  data-testid="github-signin-button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 sm:text-sm"
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
