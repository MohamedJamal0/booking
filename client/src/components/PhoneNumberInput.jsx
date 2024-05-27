import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MobileNumberInput = ({ value, onChange, isValid }) => {
  return (
    <PhoneInput
      country={'jo'} // Default country
      value={value}
      onChange={onChange}
      containerStyle={{ marginBottom: '1rem', width: '100%' }}
      inputStyle={{ width: '100%' }}
      isValid={!value || isValid}
    />
  );
};

export default MobileNumberInput;
