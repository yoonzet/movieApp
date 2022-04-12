
import{
  BrowserRouter as Router,
  Routes, //Route를 찾는 역할. Route를 찾으면 컴포넌트를 렌더링한다.
  Route,
}from "react-router-dom";
import Detail from "./routes/Detail";
import Home from './routes/Home';

function App() {
  return (
  <Router>
    <Routes> 
      <Route path='/movie/:id' element={<Detail />}>        
      </Route>
      <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home />}>
      </Route>
    </Routes>
  </Router>);
}

export default App;

// path=“/” -> 홈화면으로 간다는 의미

// BrowserRouter - > 일반적인 홈페이지 경로
// HashRouter -> 앞에 /#/가 붙음

// Switch를 넣어준 이유는 한 번에 하나의 라우트만 렌더링 하기 위해서임
// 왜냐하면 리액트 라우트는 두 개의 라우트를 한번에 렌더링 하는것도 가능하기 때문





