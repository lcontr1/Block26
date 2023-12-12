import { useState, useEffect } from "react"


export default function selectedContactId ( {selectedContactId} ) {
    const [contact, setContact] = useState({})
    console.log("single Contact:", contact)
    useEffect (() => {
        
        async function selectedContact() {

        try {    
            const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const json = await response.json()
            setContact(json)
            console.log(json.data)   
        
    } catch (error) {
        console.error(error)    
    }
}
        selectedContact()
        
    }, [])
    console.log("singlecontact:", contact)
    

    
    return (<div>
       <h1>Individual Contact Information</h1>
         <p>Name: {contact.name}</p>
         <p>Username: {contact.username}</p>
         <p>Website: {contact.website}</p>
            
          </div>)
}