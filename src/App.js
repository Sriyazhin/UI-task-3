import './App.css';
import Cards from './commonCard';
function App() {
  
  return (
    <div className='full'>

      <div className='first'>
      <div className='lineone'>Find a Course</div>
      <div className='linetwo'>Featured Courses</div>
      <div><hr className='linethree'></hr></div>
      </div>

      <div className='second'>
        <Cards imagename={require('./assets/images/notes.jpg') } titlename='General English' NameinButton='MORE' />
        <Cards imagename={require('./assets/images/books.jpg') } titlename='Classic English' NameinButton='MORE' />
        <Cards imagename={require('./assets/images/laptop.jpg') } titlename='Business English' NameinButton='MORE' />
      </div>

      <div className='third'>
<div className='linefour'>Images from <b>Freepik</b></div>
<div><hr className='lastline'></hr></div>
      </div>
    </div>
  );
}

export default App;
