import { useTransition } from 'remix';

export function useLoading() {
  const transition = useTransition();

  return transition.state === 'submitting' || transition.state === 'loading';
}
