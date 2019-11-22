import React, { Component } from 'react';

import picture from "./picture.png";
import wallpaper from './wallpaper.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Orbitron-Bold.ttf";
import "./TradeWinds-Regular.ttf";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Navbar,
  Col
 }  from "reactstrap";


 export default class App extends React.Component {
  render() {

    
    const projetsData = [
      {name: 'FootSlap', desc: 'Jeu mobile ou tu choisis ton club de foot et tu notes les prestations de tes joueurs en leur mettant des "wows" ou des "slaps"', img: '/FTpicture.png'},
      {name: 'FootSlap', desc: 'Jeu mobile ou tu choisis ton club de foot et tu notes les prestations de tes joueurs en leur mettant des "wows" ou des "slaps"', img: '/FTpicture.png'},
    
    ];
    var projetList = projetsData.map((projet, i) => {
      return(<Projet key={i} projetName={projet.name} projetDesc={projet.desc} projetImg={projet.img}/>)
    });



      return (
      <div  className = "BG"  >
          <div className="App"   >
              <div>
             <img src={picture}    roundedCircle   alt="persopicture"     style={{  margin : 0,left : 10,  position: 'absolute',
                                              marginRight : 100, width: 180, height: 180, borderRadius: 150, marginTop: 100}} 
                      />
                      </div>
                      <div>
            <p className = 'title' style={ { fontSize : 60,fontFamily: "Orbitron-Bold" ,color: 'green' , marginLeft : 600, marginTop : 100}}>
            Vincent Lazarus
                  </p>
                  </div>
                  <div>
            <p className = 'title' style={{ fontSize : 50,  fontFamily : "TradeWinds-Regular",color: 'brown' , textAlign : 'center', marginLeft : 600 }}>   
      Développeur Web
                    </p>
                    </div>
                    
                    </div>
                    <div>

              <Container style ={{ paddingRight : 600}} >
                         <Row>
                          <div style = {{ justifyContent : 'center'}} > 
                        {projetList }

                        </div>
                </Row>
                        </Container>
                        </div>
             
</div>
   );
      }
    }
        
          class Projet  extends Component {
            render () {
              var styleHeart = {
                color: '#fc6861',
                position: 'absolute',
                top: '5%',
                left: '80%',
                cursor: 'pointer'
              }
    
    
    return (
    
      <Col xs="12" sm="6" md="4" lg="3" >
      <div style={{opacity : 5, marginBottom : 30}}   >
        <Card className = 'card' style = {{width : 300, height : 300,top : 350, right : 340, justifyContent : 'center', alignItems : 'center', margin : 90}} >
        <CardImg variant="top" src={this.props.projetImg} style ={{width : 100, height : 100}}  />
        <CardBody  style={{height: 250}}>
              <CardTitle>{this.props.projetName}</CardTitle>
              <CardText>{this.props.projetDesc}</CardText>

            </CardBody>
                      <Button variant="secondary" style= {{color : "pink"}}>
                  Lien Github 
                    </Button>

          </Card>
      </div>
    </Col>
    
    
    )
            }
          }

        
