import Welcome from './Welcome'
import Button from './Button'
import { Card , Cardwithoutjsx }  from './Card'
import { Numb, Numbwithoutjsx,Single, Singlewithoutjsx } from './numb'
import { UserProfile } from './rule1'
import { ContactForm } from './rule2'
import { StyleEg} from './rule3'
import { Name } from './rule4.jsx'
import { Things } from './Product'


import './App.css'


function App() {
  return (
    <div>
      {/* <Name />
      <StyleEg />
      <ContactForm /> */}
      <h1>Hello, React!</h1>
      <Welcome name="Bruce" alias="Batman" />
        <Things name="Laptop" price="$500" added={true} Categories={
          ["car, samosa"]
        } />

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
