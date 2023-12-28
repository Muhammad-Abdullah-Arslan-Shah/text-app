import React ,{useState}from 'react'

export default function TextForm(props) {
  const[Text,setText] = useState('');
  const[myStyle,setMyStyle] = useState(
  {
    fontWeight :"normal"
    
  }
  );

  const handleUpClick =()=>{
let newText = Text.toUpperCase();
setText(newText);
props.showAlert("Text is Upper Cased" ,"Success");
  }

  const handleLoClick =()=>{
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Text is Lower Cased" ,"Success");
      }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
      }
      const boldToogle = () => {
        if( myStyle.fontWeight === "normal")
        {
          setMyStyle(
            {
              fontWeight :"bold"
            }
            
            ); 
            props.showAlert("Text is Bold" ,"Success");  
        }
        else {
          setMyStyle(
            {
              fontWeight :"normal"
            }
            );  
            props.showAlert("Text is UnBold" ,"Success");
        }
      }
      const Captilize = () => {
        const arr = Text.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
setText(str2);
props.showAlert("Text is Captilize" ,"Success");  
      }

      

  const handleOnChange =(event)=>{
setText(event.target.value);
  }
  


  return (
    <>
      <div className="container"  style={{color:props.mode==='light'?'black':'white'}}> 
    <h1 className='mt-5'>Enter Text Below</h1>
    <textarea  id = 'mybox' style={myStyle}  className='form-control' value={Text} rows="10" onChange={handleOnChange}></textarea>
    <button type="button" className="btn btn-success mt-4 mx-1" onClick={handleUpClick}>UpperCase</button>
    <button type="button" className="btn btn-success mt-4 mx-1" onClick={handleLoClick}>LowerCase</button>
    <button type="button" className="btn btn-success mt-4 mx-1" onClick={Captilize}>Captilize</button>
    <button type="button" className="btn btn-success mt-4 mx-1" onClick={boldToogle}>Bold</button>
    <button type="button" className="btn btn-success mt-4 mx-1" onClick={speak}>Speak</button>
    
    
    </div>
    <div className='container' style={{color:props.mode ==='light'?'black':'white'}}>
<h2 className='mt-3'>Text Summary</h2>
<p><b>No. of Characters:</b> {Text.length} </p>
<p><b>No. of Words:</b> {Text.split(" ").length}</p>
<p><b>Reading Time: </b>{Text.split(" ").length *0.008} seconds.</p>
<h3>Preview</h3>
<p>{Text}</p>

    </div>
    </>
    
  )

}
