type Props = {
  label: string;
  name: string;
  value: string;
  type: "text" | "email" | "password";
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, name, value, type, handleChange }: Props) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="appearance-none
                   m-auto
                   w-full
                   font-[400]
                   px-[10px]
                   py-[12px]
                   md:px-[13px]
                   md:py-[15px]
                   text-[14px]
                   md:text-[16px]
                   placeholder-[#515866]
                   text-[#515866]
                   border
                   border-[#696A6CB8]
                   rounded-[5px]
                   focus:outline-[#696A6CB8]
                   focus:ring-[#696A6CB8]
                   focus:border-[#696A6CB8]
                   focus:z-10"
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
