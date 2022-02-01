import { useState } from 'react';
import { AuthenticationDialog } from '~/components';
import { BlogTypes } from '~/features/Blog';

interface AuthenticationDialogProps {
  post: BlogTypes.Post;
}

export const useAuthenticationDialog = ({ post }: AuthenticationDialogProps) => {
  const [open, setOpen] = useState(false);

  return {
    dialog: () => <AuthenticationDialog open={open} onClose={() => setOpen(false)} post={post} />,
    setOpen,
  };
};
