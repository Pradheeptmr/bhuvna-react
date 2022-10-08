import logo from './logo.svg';
import './App.css';
function App() {
  //js Starts
  const name = "BHUVANA";
  const name1 = "PRADHEEP";
  const name2 = "PRASANTH";
const users= [
 {   name:"PRASANTH",
     Pic:"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compresscs=tinysrgbdpr=1w=500",
     },
  {  name:"PRADHEEP",
     Pic:"https://i.pinimg.com/736x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",

    },
  {  name:"BHUVANA",
     Pic:"https://static-cse.canva.com/blob/944258/1600w-EW4cggXkgbc.jpg",

   },
  {  name:"NITHISH",
     Pic:"https://static-cse.canva.com/blob/944258/1600w-EW4cggXkgbc.jpg",
  }
  ]
  //JS ends
  //JSX starts
  //Dry repert your self

  const people=['BHUVANA','PRADHEEP','PRASANTH','NITHISH','KANISHKA']
  return (
    <div className="App">
    <h1>Hello {name} </h1>
    <h1>Hello {name1} </h1>
    <h1>Hello {name2} </h1>
 {/*  people.map( personName => <Welcome name={personName} />) */}
   {/* <Welcome name={people[0]} />
       <Welcome name={people[1]} />
       <Welcome name={people[2]} />*/}

    {
      users.map((user) => (
        <Msg name={user.name} Pic={user.Pic} />

      ))}
{/*  <Msg
      name="PRASANTH"
      Pic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compresscs=tinysrgbdpr=1w=500"
    />
    <Msg
      name="PRADHEEP"
      Pic="https://i.pinimg.com/736x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
    />
    <Msg
      name="BHUVANA"
      Pic="https://static-cse.canva.com/blob/944258/1600w-EW4cggXkgbc.jpg"
      /> */}
  {/*<fun  /> */}
  </div>
   
      );
     }

//JSX ends  );
//name-props
//component
//1.first letter must be capital
//2.it reeturns jsx element
//3.component noyhing but declaration

function Welcome({Name}) {
  const name = "NITHISH";
  console.log(name);
  return <div>Welcome component {name}</div>
}

function Msg({name,Pic}) {
  return (
    <div>
      <img className="profile-pic" src={Pic} />
      <h1>Hi,{name}</h1>
    </div>
  );
}


export default App;
