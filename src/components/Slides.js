import React from 'react';

function Slides(props) {

  const [index, setActiveStep] = React.useState(0);
  const stopping=props.length;
//   alert(stopping);
  function restart()
  {
setActiveStep(0);
  }
  function next()
  {
setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  function prev()
  {
setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={index==0}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={prev} disabled={index==0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={index+1==stopping}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{props.slides[index].title}</h1>
                <p data-testid="text">{props.slides[index].text}</p>
            </div>
        </div>
    );

}

export default Slides;
