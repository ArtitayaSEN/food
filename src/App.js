import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import Contact from "./Contact";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export function Layout() {
  return (
    <nav className="be-secondary p-2 md-3">
      <img str="card-07.jpg" alt="My logo" />
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าเเรก
      </NavLink>
      <NavLink
        to="/product"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ตารางเทียบแคลอรี่
      </NavLink>
      <NavLink
        to="/Contact"
        className="link px-2"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทํา
      </NavLink>
    </nav>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div className="text-center">
        <img str="card-02.JPG" alt="อู๋หน่อไม้พุงปลา" />
        <h3>ปลาส้มทรงเครื่องสมุนไพร</h3>
        <div>
        ปลาส้มทรงเครื่องสมุนไพร 
        เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ 
        ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น 
        มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี 
        </div>
        <Button onclick={P1}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="card-04.jpg" alt="ลาบปลาคัง" />
        <h3>หลนเค็มบักนัด</h3>
        <div>
        หลนเค็มบักนัด เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี 
        มีความโดดเด่นและมีเอกลักษณ์เฉพาะของจังหวัดอุบลราชธานี 
        เป็นภูมิปัญญาในการถนอมอาหารด้วยวิธี แปรรูป แบบดองเค็มเพื่อให้เก็บไว้ได้นานเป็นปี 
        เป็นอาหารพื้นเมืองโบราณของจังหวัดอุบลราชธานีมาช้านานที่ได้สืบทอดกันมารุ่นต่อรุ่น
        </div>
        <Button onClick={P2}>เรียนรู้เพิ่มเติม</Button>
      </div>
      <div className="text-center">
        <img str="card-06.jpg" alt="แกงอ่อมหอยขม" />
        <h3>ผัดไทหมื่นปีห่อใบบัว</h3>
        <div>
        ผัดไทยเป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น 
        ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น 
        มีความโดดเด่นและมีความเป็นเอกลักษณ์ที่มีความประณีตสวยงาม ของจังหวัดอุบลราชธานี 
        มีความเป็นธรรมชาติของส่วนผสมหลักและเครื่องปรุงรส เป็นอาหารที่ให้คุณค่าทางโภชนาการ
        และมีสารอาหารครบ 5 หมู่ ที่มีประโยชน์ต่อร่างกายครบถ้วน อาทิ 
        คาร์โบไฮเดรตได้มาจากเส้นของก๋วยเตี๋ยว โปรตีน ได้มาจากเนื้อสัตว์ กุ้งแห้ง และถั่วลิสง
        ไขมันได้มาจากน้ำมันพืช วิตามินและเกลือแร่ได้จากเครื่องเคียงพืชผักสมุนไพรและเครื่องปรุงรส 
        ที่มีครบทุกรสคือ เปรี้ยว หวาน เค็ม มัน เพิ่มรสชาติความเปรี้ยว ด้วย น้ำมะขามเปียก มะนาว 
        รสหวานได้จากน้ำตาล รสเค็มได้จากน้ำปลา กุ้งแห้ง และรสมัน ได้จากถั่วลิสงคั่วป่น เติมความเผ็ดด้วยพริกป่น โรยหน้าด้วยต้นหอมและผักชี 
        </div>
        <Button onClick={P3}>เรียนรู้เพิ่มเติม</Button>
      </div>
    </>
  );
}

function Product() {
  const table = useRef();
  const tr = useRef([]);
  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.DeleteRow(index);
  };

  const data = [
    ["ปลาส้มเครื่องสมุนไพร", 1200],
    ["หลนเ็มบักนัด", 350],
    ["ผัดไทหมื่นปีห่อใบบัว", 450],
  ];

  return (
    <>
      <Layout />
      <h4>ตารางเทียบแคลอรี่</h4>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>ชื่ออาหาร</th>
            <th>แคลอรี่</th>
            <th>เทียบแคลอรี่</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                ref={(el) => {
                  tr.current[i] = el;
                }}
                ker={i}
              >
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => DeleteRow(i)}>
                    เทียบแคลอรี่
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-ligh">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;