import React from "react";
import TicketCard from "./(components)/TicketCard";
const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Wahala! Failed to get tickets, ewo!", error);
  }
};
const Dashboard = async () => {
  const { tickets } = await getTickets();
  // map over all the tickets, grab the category in each i think... (e.g Hardware problem in our case)
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {/* if there are tickets, map over uniqueCategories. For each unique category, return it and the category index. Tickets under each category will only appear in respective categories */}
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4 ">
              <h2>
                {uniqueCategory}
                {/* ticket grid */}
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {tickets
                    .filter((ticket) => ticket.category == uniqueCategory)
                    .map((filteredTicket, _index) => (
                      <TicketCard
                        id={_index}
                        key={_index}
                        ticket={filteredTicket}
                      />
                    ))}
                </div>
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
