import { UseFormRegister, FieldValues, RegisterOptions, FieldError, Path } from 'react-hook-form';

// Define a type for input properties, where T is the form data type
interface InputProps<T extends FieldValues> {
  id: Path<T>;
  type?: string;
  label: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>> | undefined;
  error?: FieldError; // Properly type the error prop
}

const Input = <T extends FieldValues>({ id, type, label, register, validation, error }: InputProps<T>) => {
  return (
    <div className="mb-4">
      <label htmlFor={id as string} className="block text-sm font-medium mb-1">{label}</label>
      <input
        id={id as string}
        type={type}
        {...register(id, validation)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
    </div>
  );
}

export default Input;
