import { useTransition } from 'remix';

export function useDisabled(verificationKey: string, verificationData: string) {
  const transition = useTransition();

  return (
    !!transition.submission &&
    transition.submission.formData.get(verificationKey) === verificationData
  );
}
