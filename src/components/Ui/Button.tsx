
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";

}
const Button = ({ children, className, width = "w-full", ...rest }: ButtonProps) => {
    return (
        <button
            className={` ${className} flex-1 rounded-md p-2 ${width}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button