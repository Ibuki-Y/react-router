import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>It's Page404</h1>
      <h2>Page is not defined...</h2>
      <Link to="/">Top</Link>
    </div>
  );
};

export default Page404;
