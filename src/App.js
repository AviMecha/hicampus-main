import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Board from './board/Board';
import Bottom from './bottom/Bottom';
import Login from './login/LogIn';
import Main from './main/Main';
import Menu from './menu/Menu';
import MyPage from './myPage/MyPage';
import './App.css';
import Lecture1 from './lecture/Lecture1';
import Lecture2 from './lecture/Lecture2';
import Lecture3 from './lecture/Lecture3';
import Apply from './lecture/Apply';
import AdminPage from './myPage/AdminPage';


function App() {

  return (
   <>
    <header>
      <Menu />
    </header>
    
    <section>
      <Route path="/lecture/Lecture1" component={Lecture1} />
      <Route path="/lecture/Lecture2" component={Lecture2} />
      <Route path="/lecture/Lecture3" component={Lecture3} />
      <Route path="/lecture/Apply" component={Apply} />
      <Route path="/login" component={Login} />
      <Route path="/board" component={Board} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/doit" component={Main} />
      <Route path="/adminpage" component={AdminPage} />
    </section>
    
    <footer>
      <Bottom />
    </footer>
   </>
  );
}

export default App;
