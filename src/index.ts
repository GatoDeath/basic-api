import express from "express";
import "./db";
import Note, { NoteDocument } from "./models/note";
import { title } from "process";

// create a server
const app = express();

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  // here we need data so that we can create new note/todo
  console.log(req.body);
  res.json({ message: "I am listening!" });
});

interface IncomingBody {
  title: string,
  description?: string; 
}

app.post("/create", async (req, res) => {
  // const newNote = new Note<NoteDocument>({
  //   title: (req.body as IncomingBody).title ,
  //   description: (req.body as IncomingBody).description,
  // });

  // await newNote.save();

  await Note.create<NoteDocument>({
        title: (req.body).title ,
    description: (req.body).description,
  })
  
  res.json({ message: "I am listening to create!" });
});

//listen to some port
app.listen(8000, () => {
  console.log("listening");
});
