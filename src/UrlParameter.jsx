import { useParams, useLocation } from "react-router-dom";

const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>It's UrlParameter</h1>
      <p>Parameter: {id}</p>
      <p>Query Parameter: {query.get("name")}</p>
    </div>
  );
};

export default UrlParameter;
