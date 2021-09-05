import { Link, useHistory } from "react-router-dom";

const Page1 = () => {
  const arr = [...Array(10).keys()];
  const history = useHistory();
  const onClickDetailA = () => {
    history.push("Page1/DetailA");
  };

  return (
    <div>
      <h1>It's Page1</h1>
      <Link to={{ pathname: "Page1/DetailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="Page1/DetailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};

export default Page1;
