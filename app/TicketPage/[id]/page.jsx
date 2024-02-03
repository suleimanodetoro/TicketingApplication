import TicketForm from '@/app/(components)/TicketForm'
import { mongo } from 'mongoose'
import React from 'react'
const getTicketById = async (id)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      cache:"no-store"
    })

    return res.json();
    
  } catch (error) {
    throw new Error("Problem getting ticket by ID")
    console.log(error);
    
  }

}
const TicketPage =async ({params}) => {
  // id param from the url. if link is from ticket icon click, link is new and not in edit mode
  const editMode = params.id == "new" ? false : true;

  let updatedTicket = {}
  
  if (editMode) {
    updatedTicket = await getTicketById(params.id)
    updatedTicket = updatedTicket.foundTicket;    
  } else{
    updatedTicket = {
      _id: "new"
    }
  }

  return (
    <TicketForm ticket={updatedTicket}/>
  )
}

export default TicketPage;