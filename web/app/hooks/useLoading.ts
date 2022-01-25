import { useTransition } from 'remix';

export function useLoading() {
  const transition = useTransition();

  return !!transition.submission;
}
