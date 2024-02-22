import React, { useState } from 'react'


function Calculator() {
    const [display, setDisplay] = useState("")

  const displayContent = (value) => {
    setDisplay(display + value);
  }
  const clearContent = () => {
    setDisplay('')
  }
  const equalContent = () => {
    try {
      setDisplay(eval(display))
    }
    catch (error) {
      setDisplay("Error")

    }
  }
  const deleteContent = () => {
    setDisplay(display.slice(0, -1))
  }
    return (
        <>
            <div className=" d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100vh',backgroundColor:' rgba(141, 158, 146, 0.885)' }} >
                <div className="content  d-flex align-items-center justify-content-center " style={{ width: '400px', height: '600px' }}>
                    <div id='main-box' style={{ width: '380px', height: '540px', paddingLeft: '20px', backgroundColor: ' rgb(60, 58, 58)', borderRadius: '12px' }}
                        className=' border border-dark d-flex flex-column  '>
                        <div className="input">
                            <input className='input-box' type="text"  value={display}  readOnly />
                        </div>
                        <div className='small-box' style={{ marginTop: '30px' }}>
                            <input id='input1'onClick={clearContent} type="button" value="AC" />
                            <input onClick={deleteContent} type="button" value="DEL" />
                            <input onClick={() => displayContent('/')}  type="button" value="&divide;" />
                        </div>
                        <div className='small-box' style={{ marginTop: '8px' }}>
                          <input onClick={() => displayContent('7')} type="button" value="7" />
                          <input onClick={() => displayContent('8')} type="button" value="8" />
                          <input onClick={() => displayContent('9')} type="button" value="9" />
                          <input onClick={() => displayContent('*')} type="button" value="*" />
                       </div>
                       <div className='small-box' style={{ marginTop: '8px' }}>
                          <input onClick={() => displayContent('4')}  type="button" value="4" />
                          <input onClick={() => displayContent('5')}  type="button" value="5" />
                          <input onClick={() => displayContent('6')}  type="button" value="6" />
                          <input onClick={() => displayContent('+')}  type="button" value="+" />
                       </div>
                       <div className='small-box' style={{ marginTop: '8px' }}>
                          <input onClick={() => displayContent('1')}  type="button" value="1" />
                          <input onClick={() => displayContent('2')}  type="button" value="2" />
                          <input onClick={() => displayContent('3')}  type="button" value="3" />
                          <input onClick={() => displayContent('-')}  type="button" value="-" />
                       </div>
                          <div className='small-box' style={{ marginTop: '8px' }}>
                          <input onClick={() => displayContent('0')}  type="button" value="0" />
                          <input onClick={() => displayContent('.')}  type="button" value="." />
                          <input onClick={equalContent}   id='input2'  type="button" value="=" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator