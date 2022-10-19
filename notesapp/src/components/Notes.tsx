import { Card, Button } from 'react-bootstrap';
import { Note } from '../models/noteModel';

type Props = {
  note: Note,
  handleDelete: (id: string) => void
};

export const Notes = ({ note, handleDelete }: Props) => {
  const style = {
    width: '32rem',
    height: '15rem',
    color: '#000',
    backgroundColor: note.bcolor,
  };

  return (
    <div className='mb-3'>
      <Card style={style}>
        <Card.Body >
          <Card.Title style={{color: "#000"}}>{note.title}</Card.Title>
          <Card.Text style={{color: "#000"}}>{note.text}</Card.Text>
          <Card.Subtitle className='mb-2 text-muted'>
            {note.date}
          </Card.Subtitle>
          <Button className='mt-3' variant='danger' onClick={()=>handleDelete(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
