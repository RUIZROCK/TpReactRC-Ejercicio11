import { Card } from "react-bootstrap";
const ListaNoticias = ({ lista }) => {
  return (
    <div className="py-3 row d-flex justify-content-around">
      {lista.map((noticia, pos) => (
        <Card
          key={pos}
          style={{ width: "18rem" }}
          className="m-3 col-12 col-sm-12 col-md-3 col-lg-3"
        >
          <Card.Img variant="top" src={noticia.image_url} />
          <Card.Body>
            <Card.Title>{noticia.category} - {noticia.title}</Card.Title>
            <Card.Text className="text-truncate">
              {noticia.description}
            </Card.Text>
            <a className="btn btn-primary " href={noticia.link}  target="_blank">Ver mas</a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListaNoticias;
