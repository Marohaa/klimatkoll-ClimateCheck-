import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {  Button } from 'react-bootstrap';
import QuizInnehåll from './quizInnehåll';
import { Link } from 'react-router-dom';
function Innehåll() {
  return (
    <>
    <CardGroup className='mt-4' >
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none'}}>
        <Card.Img variant="top" src="/bilder/Globalbild.png" height="200" width="50" />
        <Card.Body>
          <Card.Title>Global temperatur</Card.Title>
          <Card.Text>
          Orsaker och effekter av klimatförändringar
          </Card.Text>
        </Card.Body>
        
        <Link to="/globalTemperatur">
        <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none'}}>
        <Card.Img variant="top" src="/bilder/havnivabild.png" className="rounded-circle"
              alt="Waves Background" height="200"  />
        <Card.Body>
          <Card.Title>Havsnivå</Card.Title>
          <Card.Text>
          Påverkan av jordens havsnivå till följd av klimatet{' '}
          </Card.Text>
        </Card.Body>
        <Link to="/havsnivå">
        <Button
  type="submit" 
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Card.Img variant="top" src="/bilder/sea-leaval.png" height="200" width="50" />
        <Card.Body>
          <Card.Title>Glaciärer</Card.Title>
          <Card.Text>
          Effekten av klimatförändringar på glaciärerna
          </Card.Text>
        </Card.Body>
        <Link to="/Glaciärer">
        <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
    </CardGroup>
    <QuizInnehåll />
    </>
  );
}

export default Innehåll;