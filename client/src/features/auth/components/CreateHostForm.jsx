import { useState } from 'react';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import Input from '../../../components/ui/Input';
import useCreateHost from '../hooks/useCreateHost';
import parsePhoneNumberFromString from 'libphonenumber-js';

export default function CreateHostForm() {
  const { createHost, isLoading } = useCreateHost();

  const [createHostForm, setCreateHostForm] = useState({
    mobileNumber: '',
    country: '',
    address: '',
    overview: '',
  });

  const [isValidMobile, setIsValidMobile] = useState(false);

  const handleChangeInput = (value, key) => {
    setCreateHostForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleOnChangeMobileNumber = (value, country) => {
    const phoneNumberObj = parsePhoneNumberFromString(
      value,
      country.countryCode.toUpperCase()
    );
    const isValid = phoneNumberObj && phoneNumberObj.isValid();

    setIsValidMobile(isValid);

    handleChangeInput(value, 'mobileNumber');
  };

  const isDisabled =
    !isValidMobile ||
    !createHostForm.country ||
    !createHostForm.address ||
    !createHostForm.overview;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isDisabled) return;
    await createHost(createHostForm);
  };

  return (
    <form className="w-[80%]" onSubmit={handleSubmit}>
      <PhoneNumberInput
        value={createHostForm.mobileNumber}
        isValid={isValidMobile}
        onChange={handleOnChangeMobileNumber}
      />
      <Input
        label={'country'}
        id={'country'}
        name={'country'}
        onChange={(e) => handleChangeInput(e.target.value, 'country')}
        required
      />
      <Input
        label={'address'}
        id={'address'}
        name={'address'}
        onChange={(e) => handleChangeInput(e.target.value, 'address')}
        required
      />

      <label className="mb-3 block font-medium text-lg" htmlFor="overview">
        Tell us about your self
      </label>
      <textarea
        className="w-full h-28 mb-2 p-3 rounded-md border border-gray-500 focus:ring focus:outline-none  bg-transparent"
        name="overview"
        id="overview"
        onChange={(e) => handleChangeInput(e.target.value, 'overview')}
        required
      ></textarea>
      <button
        disabled={isLoading || isDisabled}
        className="w-full px-4 py-6 rounded-md bg-black text-white"
      >
        Get started
      </button>
    </form>
  );
}
