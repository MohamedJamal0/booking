import Input from '../../../components/ui/Input';
import useLogin from '../hooks/useLogin';
import GoogleButton from './GoogleButton';

export default function LoginForm() {
  const { login, isLoading, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    login({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className=" flex flex-col gap-2 mb-4">
        <Input
          id={'email'}
          type="email"
          name="email"
          label="Email"
          defaultValue="guest@gmail.com"
          disabled={isLoading}
          required
          autoFocus
        />
        <Input
          id={'password'}
          type="password"
          name="password"
          label="Password"
          defaultValue="123456"
          disabled={isLoading}
          required
        />

        {error && <p className="mb-1 text-red-500">{error.message}</p>}

        <button
          disabled={isLoading}
          className=" py-3 rounded-md font-medium bg-blue-800 hover:bg-blue-700 text-white "
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>
      {/* <div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 h-[0.1px] bg-gray-300"></div>
          <span className="text-sm">or</span>
          <div className="flex-1 h-[0.1px] bg-gray-300"></div>
        </div>
        <div className="flex justify-center mt-2">
          <GoogleButton />
        </div>
      </div> */}
    </div>
  );
}
