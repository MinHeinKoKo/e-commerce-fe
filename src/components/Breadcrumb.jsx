import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="flex items-center h-10 gap-x-2">
      <Link to="/">
        <span className="sr-only"> Home </span>
           <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-4 h-4"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
           >
               <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
               />
           </svg>
      </Link>
      {pathnames?.map((name, index) => (
        <span key={name}>
          <span> / </span>
          <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{name}</Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
