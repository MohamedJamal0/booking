import Input from '../../../components/ui/Input';
import useSignup from '../hooks/useSignup';

export default function SignupForm() {
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');

    await signup({ firstName, lastName, email, password });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          id={'firstName'}
          type={'text'}
          label={'firstName'}
          name={'firstName'}
          required
          autoFocus
        />
        <Input
          id={'lastName'}
          type={'text'}
          label={'lastName'}
          name={'lastName'}
          required
        />
        <Input
          id={'email'}
          type={'email'}
          label={'Email'}
          name={'email'}
          required
        />
        <Input
          id={'password'}
          type={'password'}
          label={'Password'}
          name={'password'}
          required
        />
        <p className="mb-2 text-red-500">{error?.message}</p>
        <button
          disabled={isLoading}
          className="w-full py-4 rounded-md bg-blue-800 hover:bg-blue-700 text-white"
        >
          {isLoading ? 'Loading...' : 'Sign up'}
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
    </>
  );
}
