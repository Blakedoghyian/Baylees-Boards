import React from "react";
import board1 from "../images/board-1.jpg";
import board2 from "../images/board-2.jpg";
import board3 from "../images/board-3.jpg";
import board4 from "../images/board-4.jpg";
import { Container, Row, Col } from 'react-bootstrap';


function Homepage() {
    return (
        <Container className="mt-2">
            <Row>
                <div className="col-lg-6 col-md-6 col-sm-3" >
                    <a target="_blank" href={board1}>
                        <img src={board1} alt="charcuterie board" width="600" height="400" />
                    </a>
                    <div className="desc">Baylee's Charcuterie Boards!</div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-3" >
                    <a target="_blank" href={board2}>
                        <img src={board2} alt="charcuterie board" width="600" height="400" />
                    </a>
                    <div className="desc">Baylee's Charcuterie Boards!</div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-3" >
                    <a target="_blank" href={board3}>
                        <img src={board3} alt="charcuterie board" width="600" height="400" />
                    </a>
                    <div className="desc">Baylee's Charcuterie Boards!</div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-3" >
                    <a target="_blank" href={board4}>
                        <img src={board4} alt="charcuterie board" width="600" height="400" />
                    </a>
                    <div className="desc">Baylee's Charcuterie Boards!</div>
                </div>
            </Row>
        </Container>
    );
}

export default Homepage;