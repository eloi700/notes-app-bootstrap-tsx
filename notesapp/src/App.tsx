import React, { useState } from 'react';
import './App.scss';
import './index.scss';
import { Note } from './models/noteModel';
import { Noteslist } from './components/Noteslist'
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from './components/Header';
import { CreateNotes } from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: 'Meetings',
      text: 'Schedule meeting with UI/UX Team',
      bcolor: 'rgba(0,0,0,.5)',
      color: '#000',
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <Noteslist notes = { notes } setNotes = { setNotes } />
          </Col>
        </Row>
        <Row>
          <Col>
          <CreateNotes notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
