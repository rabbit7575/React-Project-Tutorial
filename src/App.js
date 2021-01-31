import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';
import { Component } from 'react';


/*
function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo"/>
      <h2>Let's develop management system!</h2>
    </div>
  );
}
*/
const customers =[
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '나동빈',
    'birthday' : '961222',
    'gender' : '남자2',
    'job' : '대학생1'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : '881222',
    'gender' : '남자2',
    'job' : '대학생2'
  }
  ,
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '이순신',
    'birthday' : '771222',
    'gender' : '남자3',
    'job' : '대학생3'
  }

]

class App extends Component {
  render(){
    return (
      <div>
       {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })

       }
      </div>
    );
  }
}
export default App;
