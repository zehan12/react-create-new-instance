type DisplayTextProps = {
    text: string;
};
export const DisplayText = ({ text }: DisplayTextProps) => {
    return <h3 className="text-2xl underline uppercase">{text}</h3>;
};
