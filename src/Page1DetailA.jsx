import { useLocation, useHistory } from "react-router-dom";

const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickPage1 = () => {
    // history.push('/Page1')
    history.goBack();
  };

  return (
    <div>
      <h1>It's Page1DetailA</h1>
      <button onClick={onClickPage1}>Page1</button>
    </div>
  );
};

export default Page1DetailA;
