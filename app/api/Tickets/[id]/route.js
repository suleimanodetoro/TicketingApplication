import Ticket from "@/app/(models)/ticket"
import { NextResponse } from "next/server"

export async function DELETE(req, {params}) {
    try {
        const {id} = params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({message:"Deleted Ticket Successfully"}, {status: 200})

    } catch (error) {
        console.log("error deleting ticket");
        return NextResponse.json({message: "Wahala! Delete operation failed", error}, {status: 500})
    }
    
}
export async function PUT(req,{params}){
    try {
        const body = await req.json();
        console.log(body);
    } catch (error) {
        
    }



}

export async function GET(req, {params}){
    try {
        const {id} = params;
        const foundTicket = await Ticket.findById({_id: id})


        return NextResponse.json({foundTicket}, {status: 201})

        
    } catch (error) {
        return NextResponse.json({message:"Wahala with your ID, problem finding ticket by ID"})
        
    }

}