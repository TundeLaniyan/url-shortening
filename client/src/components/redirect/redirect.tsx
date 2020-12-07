import React, { useEffect } from "react";
import { getUrl } from "../../services/urlServices";

const Redirect: React.FC<{ match: { params: { shortUrl: string } } }> = ({
  match,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      const url = await getUrl(shortUrl);
      window.location = url ? url : "/";
    };
    const { shortUrl } = match.params;
    fetchData();
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default Redirect;
