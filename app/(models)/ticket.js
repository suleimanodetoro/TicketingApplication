import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;
const ticketSchema = new Schema(
    {
      title: String,
      description: String,
      category: String,
      priority: Number,
      progress: Number,
      status: String,
      active: Boolean,
    },
    {
        // for created and updated at
      timestamps: true,
    }
  );

  // find or create ticket
  const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
