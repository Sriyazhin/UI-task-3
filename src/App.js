import './App.css';
import Cards from './commoncard';
import Notes from './assets/images/notes.jpg';
import Books from './assets/images/books.jpg';
import Laptop from './assets/images/laptop.jpg';
function App() {
  const data=[
    {imageName:Notes,
      titleName:'General English'
    },
    {imageName:Books,
      titleName:'Classic English'},
    {imageName:Laptop,
      titleName:'Business English'}];
  return (
    <div className='full'>

      <div className='fortitle'>
      <div className='lineone'>Find a Course</div>
      <div className='linetwo'>Featured Courses</div>
      <div><hr className='linethree'></hr></div>
      </div>

      <div className='forcards'>
      {data.map((details, index) => {
        return (
          <Cards key={index} imagename={details.imageName} titlename={details.titleName} nameinbutton='MORE' />
        );
      })}
        
      </div>

      <div>
<div className='linefour'>Images from <b>Freepik</b></div>
<div><hr className='lastline'></hr></div>
      </div>

    </div>
  );
}

export default App;
