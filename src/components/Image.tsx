interface ImageProps {
    imgSrc: string;
    altText?: string;
    className?: string;
}

 const Image = ({ imgSrc, altText, className }: ImageProps) => {
  return (
    <div>
      <img src={imgSrc} alt={altText} className={className} />
    </div>
  )
}

export default Image