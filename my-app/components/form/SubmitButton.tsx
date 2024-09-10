type Props = {
  value: string;
};

export const SubmitButton = ({ value }: Props) => {
  return (
    <button
      type="submit"
      className="w-[178px]
                 py-2
                 px-4
                 border
                 border-[3px]
                 border-[#515866]
                 bg-[#515866]
                 text-[16px]
                 font-[500]
                 rounded-[10px]
                 text-white
                 hover:bg-[#A1A4AF]
                 hover:border-[#A1A4AF]
                 focus:outline-none
                 focus:ring-2
                 focus:ring-offset-2
                 focus:ring-indigo-500
                 ease-out
                 duration-300"
    >
      {value}
    </button>
  );
};
