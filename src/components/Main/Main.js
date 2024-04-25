import './Main.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { DataProvider } from '../context';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Nav from '../../components/Nav/Nav';
import AddEvent from '../../pages/AddEvent';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Main() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <DataProvider>
        <Routes>
          <Route path="/" element={
            <><Hero /><Content /><Footer /></>
          }></Route>
          <Route path="/add-event" element={<AddEvent />}></Route>
        </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default Main;
