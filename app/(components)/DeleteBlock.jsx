import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";


const DeleteBlock = ({id}) => {
    const router = useRouter();
    const deleteTicket = async () => {
        const res =await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            method:"DELETE"
        });
        if (!res.ok) {
            throw new Error("Error deleting ticket")
            
        }
        router.refresh();
    }
  return (
    <FontAwesomeIcon
      icon={faX}
      onClick={deleteTicket}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
