import Navbar from "../components/Navbar";
//import { useState } from "react";
//import { post } from "../lib/api";
//import { ThreeDots } from "react-loader-spinner";
import DafnyEditor from "../components/DafnyEditor";

export default function CFGgen() {
    /*
    const [code, setCode] = useState("// Please enter Java code below and delete this comment!");
    const handleEditorChange = (value: string | undefined) => {
        if (value) {
          //console.log(value);
          setCode(value);
          //console.log(code);
        }
      };
    const handleCFGGen=()=>{
        //setLoading(true);
        //post("http://localhost:3000/createCFG", code).then((response) => {
            
        }
        //setLoading(false);
        //setData(response);
      })
    }
      */
    return(
        <>
    
            <div>
            
    
                <div>
                    <Navbar/>
                </div>
                <div style={{ width: "50%", justifyContent: "left" }}>

                    <DafnyEditor
                    EditorProps={{
                        height: "92vh",
                        width: "50vw",
                        //onChange: handleEditorChange,
                        defaultLanguage: "dafny",
                        }}
                    />
                </div>
            </div>
        </>

    )
}
