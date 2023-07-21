import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TextView from './module/TextView';
import TableView from './module/TableView';
import ChartView from './module/ChartView';
import Header from './component/Header';
import SideMenu from './component/Sidemenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SideMenu />
        <Routes>
          <Route path="/" element={<TextView />} />
          <Route path='table' element={<TableView />} />
          <Route path="chart" element={<ChartView />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
