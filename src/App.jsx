import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
// import ContactRow from './components/ContactRow'
import SelectedContactId from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
  <div> {selectedContactId ? (
      <div><SelectedContactId selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/></div> 
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
        )}
      
      </div>
  )
}

export default App
