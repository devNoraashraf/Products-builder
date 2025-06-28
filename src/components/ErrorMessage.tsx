 
interface ErrorMessageProps {
    msg?: string;
}  
const ErrorMessage = ({ msg }: ErrorMessageProps) => {
  return (
    <span>{msg}</span>
  )
}

export default ErrorMessage