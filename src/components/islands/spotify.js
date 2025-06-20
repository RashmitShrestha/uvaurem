import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Spotify = () => {
    return (

        <Container>
            <h1>Spotify</h1>
            <Row className="d-flex align-items-center justify-content-center" style={{ height: '100%' }}>
                <Col>
                    <iframe src="https://open.spotify.com/embed/playlist/6przDaTmjlVmqvvSjHlEBT?utm_source=generator" width="100%" height="300"
                        a allow="autoplay; clipboard-write; encrypted-media; " loading="lazy"></iframe>        </Col>
            </Row>
        </Container>

    );
};

export default Spotify;