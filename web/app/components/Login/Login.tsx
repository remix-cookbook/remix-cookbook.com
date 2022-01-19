import { User } from '~/models';

export interface Auth {
  message: string;
  user: User;
}

export interface LoginProps {
  auth: Auth;
}

export function Login(props: LoginProps) {
  console.log(props);
  if (props.auth.user) {
    return (
      <div className="p-6 text-white">
        <p>{props.auth.user.email}</p>
      </div>
    );
  }
  return (
    <form action="/auth/github" method="post" className="p-6 text-white">
      <button>Login with GitHub</button>
    </form>
  );
}
