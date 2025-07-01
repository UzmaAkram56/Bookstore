import Contact from "../model/contact.model.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message received successfully!" });
  } 
  catch (error) {
    res.status(500).json({ message: "Failed to submit message.", error });
  }
};
