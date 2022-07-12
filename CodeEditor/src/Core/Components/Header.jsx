import React, {useRef} from "react";
import "../styles/header.style.scss";
// const fs = require('fs')
const logo = require("../assets/img/logo.png");

const Header = ({setCode, useCode}) => {
  // Open File Function
  const OpenFileRef = useRef();
  const OpenFileCall = () => {
    OpenFileRef.current.click();
  }
  const OpenFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        setCode(reader.result);
    }
    reader.onerror = () => {
      console.log('File Error', reader.error);
    };
  }
  // End of OpenFile Function

  // Save as Function
  const SaveAsFile = () => {
    const element = document.createElement('a');
    const file = new Blob([useCode], {
      type: 'application/javascript;charset-utf-8',
    });
    element.href = URL.createObjectURL(file);
    element.download = `${useCode.split(" ").splice(-1)[0]}`;
    document.body.appendChild(element);
    element.click();
  }
  // End of Save as Function
  




  return (
    <div className="__header_tab">
      <img src={logo} width={"28px"} alt={"logo"} />
      {/* File */}
      <div className="dropdown">
        <button className="dropbtn">File</button>
        <div className="dropdown-content">
          <input type={'file'} name="Open File" onChange={(e) => OpenFile(e)} ref={OpenFileRef} className="disabledInputFile"/>
          <a href="#" onClick={OpenFileCall}>Open File...</a> 
          <a onClick={() => console.log("Saved!")}>Save</a>
          <a onClick={SaveAsFile}>Save as</a>
          <a href="#">New Text File</a>
        </div>
      </div>
      {/* End */}

      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">Edit</button>
        <div className="dropdown-content">
          <a href="#">Edit</a>
        </div>
      </div>
      {/* Edit */}
      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">Selection</button>
        <div className="dropdown-content">
          <a href="#">Selection</a>
        </div>
      </div>
      {/* Edit */}

      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">View</button>
        <div className="dropdown-content">
          <a href="#">View</a>
        </div>
      </div>
      {/* Edit */}
      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">Go</button>
        <div className="dropdown-content">
          <a href="#">Go</a>
        </div>
      </div>
      {/* Edit */}
      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">Run</button>
        <div className="dropdown-content">
          <a href="#">Run</a>
        </div>
      </div>
      {/* Edit */}
      {/* Edit */}
      <div className="dropdown">
        <button className="dropbtn">Terminal</button>
        <div className="dropdown-content">
          <a href="#">Terminal</a>
        </div>
      </div>
      {/* Edit */}
    </div>
  );
};

export default Header;
