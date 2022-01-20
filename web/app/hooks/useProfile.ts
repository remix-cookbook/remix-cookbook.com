import { useContext } from 'react';
import { AuthenticationContext } from '~/root';

export const useProfile = () => {
  const { profile } = useContext(AuthenticationContext);
  return { profile };
};
