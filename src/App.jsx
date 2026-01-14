import Welcome from './Welcome'
import Button from './Button'
import { Card , Cardwithoutjsx }  from './Card'
import { Numb, Numbwithoutjsx,Single, Singlewithoutjsx } from './numb'
import { UserProfile } from './rule1'
import { ContactForm } from './rule2'
import { StyleEg} from './rule3'
import { Name } from './rule4.jsx'
import { Things } from './Product'
export {Greetings} from './Greetings.jsx'
import { Usercard } from './UserCard.jsx'
import { Cardwrapper } from './CardWrapper.jsx'
import './App.css'
import { Greetings } from './Greetings.jsx'
import { Userdetails } from './userDetails.jsx'
import { CarsList } from './toysList.jsx'


function App() {
  return (
    <div>
     <CarsList />

    <Userdetails name={"Anthony"} isOnline={false} hideOffline={true}/>
    <Userdetails name={"Dripter"} isOnline={true} isNewuser={false} isPremium={true}/>
    <Userdetails name={"sulfer"} isOnline={true} isNewuser={false} isPremium={true} role="admin"/>
 

      {/* <Name />
      <StyleEg />
      
      <ContactForm /> */}
      {/* < Cardwrapper name="User Card" child="child" >
      <p>This is the nested content we write here</p>
        
      </Cardwrapper>
      <Usercard />
      <Greetings name="raju" message="Good Morning"/>
      <Greetings />
      <h1>Hello, React!</h1>
      <Welcome name="Bruce" alias="Batman" />
        <Things name="Laptop" price="$500" added={true} Categories={
          ["car, samosa"]
        } /> */}


      {/* <Welcome name="rathod" />
      <Welcome name="Rana" /> */}
      {/* <Single/>
      <Singlewithoutjsx/>
      <UserProfile/>
      <Card />
      <Cardwithoutjsx />
      
      <Button /> */}
    </div>

  )
}

export default App
