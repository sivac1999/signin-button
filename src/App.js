import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 

function BtnSing () {
    const [btncontent, setvalueBtn] = useState()
    const [paraconent, setvaluePara] = useState()

    function btnSignIn() {
        setvalueBtn(false)
        setvaluePara(false)
    }
    function btnSignOut (){
        setvalueBtn(true)
        setvaluePara(true)
    }
    return (
        <div className='div'>
                <div>
                {
                    paraconent ? (<p>please sign in</p>) : (<p>please sign out</p>)
                }
                </div>
                
                <div>

                {
                    btncontent ? (<button onClick={btnSignIn}>sign in</button>) : (<button onClick={btnSignOut}>sign out</button>)
                }
              </div>
        </div>
    )
}

export default BtnSing