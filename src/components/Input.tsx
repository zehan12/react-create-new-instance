type InputProps = {
    placeholder: string;
};

export const Input = ({ placeholder }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            className=" bg-gray-900 p-2 my-2"
            type="text"
        />
    );
};
