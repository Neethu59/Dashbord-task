import React from 'react'
import Table from './Table'
import Linechart from './Linechart'
import Piechart from './Piechart'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
  <Row>
  <Col className='statboard d-flex flex-column p-0 m-0' xs={12} md={2} lg={3} >
    <div className='d-flex flex-column align-items-center'>
      <div><img src="\Assets\Briefcase.png" alt="" style={{ margin: 'auto' }} /></div>
      <div style={{ color: "white" }}>
        <img src="\Assets\StatBoard.png" alt="" />
      </div>
    </div>

    <div className='d-flex flex-column align-items-end mt-auto mb-auto'>
  <ul className='list-unstyled'>
    <li className='li'>
      <div className='card card-li d-flex align-items-center justify-content-center flex-row'>
        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="\Assets\Circled Menu.png" alt="" style={{ marginRight: "5%" }} />
          Dashboard
        </div>
      </div>
    </li>

    <li className='li'>
      <div className='card card-li d-flex align-items-center justify-content-center flex-row'>
        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="\Assets\Support.png" alt="" style={{ marginRight: "5%" }} />
          Support
        </div>
      </div>
    </li>

    <li className='li'>
      <div className='card card-li d-flex align-items-center justify-content-center flex-row'>
        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="\Assets\Puzzle.png" alt="" style={{ marginRight: "5%" }} />
          Plugins
        </div>
      </div>
    </li>

    <li className='li'>
      <div className='card card-li d-flex align-items-center justify-content-center flex-row'>
        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="\Assets\Help.png" alt="" style={{ marginRight: "5%" }} />
          Help
        </div>
      </div>
    </li>
  </ul>
</div>


<div className='d-flex justify-content-center logout' style={{backgroundColor:"white",color:"red"}}>
  <p>Logout</p>
  <img src="\Assets\Shutdown.png"style={{height:"15px",marginTop:"5px"}} alt="" />
</div>

  </Col>

 

<Col xs={12} md={10} lg={9} className='column2 p-0 m-0'>
  <div className='d-flex align-items-center justify-content-between container'>
    <div> <h5>Good Morning</h5></div>
   <div className='d-flex flex-row card  justify-content-center' style={{width:"15vw",borderRadius:"10px"}}>
    <div className='d-flex flex-column 'style={{fontSize:"10px",padding:"5px 5px"}}>
      <h6>Jhon Doe</h6>
      <p>jhon@doe.com</p>
    </div>
    <div>
<img src="\Assets\Rectangle 10.png" alt="" style={{padding:"5px"}}/>
    </div>
   </div>

  </div>
  <div className='d-flex justify-content-center align-items-center m-4 chart'>
    <div className='card mr-4' style={{ width: '50vw' }}>
      <Linechart />
    </div>
    <div className='card' style={{ width: '20vw' }}>
      <Piechart />
    </div>
  </div>

  <div className='d-flex justify-content-center align-items-center mt-2 table'>
    <div className='card' style={{ width: '57vw' }}>
      <Table />
    </div>
    <div className='card d-flex flex-column align-items-center mt-5'>
      <div><img src="\Assets\media.png" alt=""className='p-0' style={{ height: "25vh",marginRight:"2%",width:"15vw"}} /></div>
      <div><h6>Jhon Doe</h6></div>
      <div><p style={{ fontSize: "12px" }}>CEO</p></div>
      <div className="d-flex justify-content-center p-2 img">
        <img src="\Assets\facebook.png" className='p-2 img' alt="" />
        <img src="\Assets\instagram.png" className='p-2 img' alt="" />
        <img src="\Assets\twitter.png" className='p-2 img' alt="" />
      </div>
    </div>
  </div>
</Col>

</Row>

   
  
   
    </>
  )
}
