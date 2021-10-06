
import './App.scss';

import {Data1, Data2} from './data'

function App() {
  return (
    <div className="App">
       <div className='items'>
         {Data1.map((props) => {
           return(
             <div className='item'>
               <div className='icon'>{props.icon}</div>
               <div className='block'>
                  <h6>{props.title}</h6>
                  <p>{props.description}</p>
               </div>
              </div>
           )
         })}
       </div> 

       <div className='users'>
         {Data2.map((props) => {
           return(
              <div className='user-card'>
                <p className='date'>{props.date}</p>
                <div className='inline'>
                    <span style={{background: `${props.color}`}}>
                        {props.text}  
                    </span>
                    <div className='img' style={{content: `url(${props.img})`}}></div>
                    <p className='name'>{props.name}</p>
                </div>

                <p className='description'>{props.description}</p>

                <div className='button'>
                    <button type='button'>Download</button>
                </div>
            </div>
           )
         })}
       </div>
    </div>
  );
}

export default App;

