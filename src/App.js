import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Index';
import Note from './components/note/Index';
import Notes from './components/notes/Index';


function App() {
  return (
    <div className="row ">
      <Header />
      <Notes />
      <Note />
    </div>
  );
}

export default App;
