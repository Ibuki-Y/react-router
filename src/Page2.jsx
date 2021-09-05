import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>It's Page2</h1>
      <Link to="/Page2/id">URL Parameter</Link>
      <br />
      <Link to="/Page2/id?name=hogehoge">Query Parameter</Link>
    </div>
  );
};

export default Page2;
