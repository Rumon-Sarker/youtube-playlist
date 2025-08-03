import { useEffect } from "react";
import getPlayList from "./api";

const App = () => {


  useEffect(() => {
    getPlayList("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl").then((res) =>
      console.log("All data is", res))
  }, [])
  return (
    <div>
      <h1>This is home componet </h1>
    </div>
  );
};

export default App;