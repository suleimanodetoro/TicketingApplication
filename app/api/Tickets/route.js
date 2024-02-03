import { NextResponse } from "next/server";
import Ticket from "../../(models)/ticket";
// learn about next server 


// post dummy data to the Ticket DB
export async function POST (req){
    console.log("POST RAN !");
    try {
        const body = await req.json()
        // make sure your incoming request has formData attached
        const ticketData = body.formData
        // create the ticket with mongoose function
        await Ticket.create(ticketData);
        return NextResponse.json({message:"Successfully created a Ticket"}, {status: 201})
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({message:"Error", error}, {status: 500})
        
    }
}

// function to get tickets from mongo
export async function GET () {
    try {
        const tickets = await Ticket.find()
        return NextResponse.json({tickets}, {status: 200})

        
    } catch (error) {
        console.log(error);

        return NextResponse.json({message:"Error", error}, {status: 500})
        
    }

}