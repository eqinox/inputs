import './App.css';
import Navbar from './shared/Navbar';
import { Route, Routes } from "react-router-dom";
import AddForm from './form/AddForm';
import Result from './result/Result';
import Message from './shared/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { configActions } from './store/config-slice';

function App() {
  const message = useSelector((state) => state.config.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(configActions.hideMessage())
    }, 4000);

    return () => {
      clearTimeout(identifier);
    }
  }, [message]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      {message && <Message type={message.type} text={message.text} />}
      <Routes>
        <Route path='/' element={<AddForm />} />

        <Route path='/add' element={<AddForm />} />


        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
