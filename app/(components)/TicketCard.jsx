"use client"
import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <PriorityDisplay priority={ticket.priority} />
        {/* slide delete block to the left */}
        <div className="ml-auto">
            {/* mongodb saves _id so we will use this to delete tickets */}
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{display:"contents"}}>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>

      {/* flex-grow to make sure the tcikets are same size no matter how much content they have */}
      <div className="flex-grow "></div>
      <div className="flex mt-2 ">
        <div className="flex flex-col">
          {/* data time p tag */}
          <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
      </div>
      <div className="ml-auto flex items-end ">
        <StatusDisplay status={ticket.status} />
      </div>
      </Link>
    </div>
  );
};

export default TicketCard;
