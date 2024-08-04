import { Editor } from "@monaco-editor/react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { post } from "../lib/api";
import { ThreeDots } from "react-loader-spinner";

//Create Routing File
interface ErrorObject {
  fileName: string;
  line: number;
  column: number;
  errorMessage: string;
}

export default function CFGGen() {
  const [code, setCode] = useState("int main(){}");
  const [loading, setLoading] = useState(false);

  const handleGen = () => {
    setLoading(true);
    post("http://localhost:3000/fetchImage/CFG.jpeg", code);
    setLoading(false);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      //console.log(value);
      setCode(value);
      //console.log(code);
    }
  };
  //<img src="http://localhost:3000/fetchImage/CFG.jpeg" alt="CFG image here"></img>
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="screen"
        style={{ paddingTop: "50px", width: "100%", overflow: "hidden" }}
      >
        <div style={{ width: "50%", justifyContent: "left" }}>

          <Editor height="92vh" width="50vw" onChange={handleEditorChange} defaultLanguage="c"
            defaultValue='int main(){return 1;}// Use C/C++ code'/>
        </div>
        <div className="flex flex-col justify-center relative pl-8">
          <div className=" flex-grow">
            {loading ? (
              <ThreeDots color="gray" height={100} width={100} />
            ) : (
              <img src="http://localhost:3000/fetchImage/CFG.jpeg" alt="CFG image here"></img>
            )}
          </div>
          <div className="flex flex-row justify-evenly max-h-11 mb-4">
            <button onClick={handleGen}>Generate CFG</button>
          </div>
        </div>
      </div>
    </div>
  );
}