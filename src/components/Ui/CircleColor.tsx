interface ICircleColorProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
  
}

const CircleColor = ({ color, ...rest }: ICircleColorProps) => {

  return (
    <span className={`w-5 h-5 rounded-full`} style={{ backgroundColor: color }} {...rest} />
  );
};

export default CircleColor;
