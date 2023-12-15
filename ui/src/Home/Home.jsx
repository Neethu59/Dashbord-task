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
      <Col className='statboard d-flex flex-column align-items-center' xs={12} md={2} lg={2} style={{border:"1px solid red"}}>
      <div className=' d-flex flex-column align-items-center' >
      <div><img src="\Assets\Briefcase.png" alt="" style={{ margin: 'auto' }} /></div>
        <div style={{color:"white"}}><h4>STATBOARD</h4></div>
        </div>
        <div>
          
        </div>
        </Col>
        <Col xs={12} md={10} lg={10}>
          {/* Content for the second column */}
          <div>Column 2 Content</div>
        </Col>
        
      </Row>
    <Table/>
    <Linechart/>
    <Piechart/>
    </>
  )
}
