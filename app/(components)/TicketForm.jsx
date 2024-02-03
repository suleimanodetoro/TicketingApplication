// why are we using next/naviagtion and not next router in this code?
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ticket}) => {
  const editMode = ticket._id === "new" ? false : true; 

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      //@ts-ignore
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Wahala! Failed to create ticket!");
    }
    router.refresh();
    router.push("/");

  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };
  const startingTicketData = {
    title: "",
    description: "",
    priority: 5,
    progress: 0,
    status: "Not Started",
    category: "Hardware Problem",
  };
  // if we are in edit mode, update the starting ticket data
  if (editMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;

    
  }
  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{editMode? "Update Your Ticket":"Create Your Ticket"}</h3>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          rows={5}
          id="description"
          onChange={handleChange}
          required
          value={formData.description}
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          id="category"
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            id="priority-1"
            type="radio"
            name="priority"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>

          <input
            id="priority-2"
            type="radio"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>

          <input
            id="priority-3"
            type="radio"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>

          <input
            id="priority-4"
            type="radio"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>

          <input
            id="priority-5"
            type="radio"
            name="priority5"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>

        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          min={0}
          max={100}
          value={formData.progress}
          onChange={handleChange}
        />

        <label htmlFor="">Status</label>
        <select
          name="status"
          value={formData.status}
          id="status"
          onChange={handleChange}
        >
          <option value="not-started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn text-cyan-50"
          value={editMode ? "Update Ticket": "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
