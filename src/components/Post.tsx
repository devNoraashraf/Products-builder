

const Post = ({ title, content="no" , children }: { title: string; content?: string; children?: React.ReactNode }) => {
  return (
    <div className="p-4 m-5 bg-gray-100 rounded shadow border-3  border-amber-300">
      <h2 className="text-xl font-semibold text-center mb-2">
        {title}
      </h2>
      <hr className="my-2 border-gray-500" />
      <p className="text-gray-700 mt-2 text-center">
        {content}
      </p>
     {children} 
    </div>
  );
};

export default Post;
