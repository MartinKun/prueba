type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  label?: string;
  options: Option[];
};

export const Select = ({
  name,
  handleChange,
  value,
  label,
  options,
}: Props) => {
  return (
    <div>
      <select
        required
        className="m-auto
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
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
