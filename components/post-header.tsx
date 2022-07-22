import CoverImage from "./cover-image";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-12 text-center text-slate-200 lg:pt-6">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostHeader;
