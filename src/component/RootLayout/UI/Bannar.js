// import { Col, Row, Carousel } from "antd";
// import {
//   ArrowRightOutlined,
//   CalendarOutlined,
//   CommentOutlined,
//   ProfileOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";
// import leptopOne from "@/assets/image/banner/leptop-1.jpg";
// import leptopTwo from "../../../assets/image/banner/leptop-3.webp";
// import leptopTheree from "../../../assets/image/banner/leptop-4.webp";
// import leptopFour from "../../../assets/image/banner/leptop-5.webp";
// // import leptopFive from "../../../assets/image/banner/leptop-one.avif";


// const contentStyle = {
//   height: "425px",
//   color: "#000",
// };

// const Banner = () => (
//   <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
//     {/* slider-1 */}
//     <div>
//       <Row>
//         <Col
//           lg={{
//             span: 8,
//           }}
//         >
//           <h1 style={{ fontSize: "50px" }}>
//             LET&apos;S BUILD
//             <br />
//             YOUR CAREER
//           </h1>
//           <div
//             className="line"
//             style={{
//               height: "5px",
//               margin: "20px 0",
//               background: "#000",
//               width: "95%",
//             }}
//           ></div>

//           <p
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               color: "gray",
//               margin: "10px 0px",
//             }}
//           >
//             <span>
//               <CalendarOutlined /> FEBRUARY 28, 2023
//             </span>
//             <span>
//               <CommentOutlined /> NO COMMENTS
//             </span>
//             <span>
//               <ProfileOutlined /> HOBBY
//             </span>
//           </p>

//           <p style={{ fontSize: "20px" }}>
//             Beauteous before up across felt sheepishly and more mournfully the
//             wow so more flustered and one up pushed salamander collective
//             blinked that iguanodon bid much some since hey far goodness jaguar
//             whil...
//           </p>
//           <p
//             style={{
//               fontSize: "20px",
//               margin: "20px 0px",
//               backgroundColor: "black",
//               color: "white",
//               width: "168px",
//               padding: "2px 5px ",
//               fontWeight: "300",
//               letterSpacing: "3px",
//             }}
//           >
//             Keep Reading <ArrowRightOutlined />
//           </p>
//         </Col>

//         <Col
//           lg={{
//             span: 16,
//           }}
//           style={contentStyle}
//         >
//           <Image src={leptopOne}
//             height={400}
//             responsive
//             alt="drawing_image"


//           />
//         </Col>
//       </Row>
//     </div>
//     {/* slider-2 */}
//     <div>
//       <Row>
//         <Col
//           lg={{
//             span: 8,
//           }}
//         >
//           <h1 style={{ fontSize: "50px" }}>
//             EAGLE, YOU ARE
//             <br />
//             NOT ALONE
//           </h1>
//           <div
//             className="line"
//             style={{
//               height: "5px",
//               margin: "20px 0",
//               background: "#000",
//               width: "95%",
//             }}
//           ></div>

//           <p
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               color: "gray",
//               margin: "10px 0px",
//             }}
//           >
//             <span>
//               <CalendarOutlined /> MARCH 30, 2023
//             </span>
//             <span>
//               <CommentOutlined /> 5 COMMENTS
//             </span>
//             <span>
//               <ProfileOutlined /> NATURE
//             </span>
//           </p>

//           <p style={{ fontSize: "20px" }}>
//             A spread opened patient and compulsively one placed seagull goodness
//             python owing snapped yikes equitable when much the much Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
//           </p>
//           <p
//             style={{
//               fontSize: "20px",
//               margin: "20px 0px",
//               backgroundColor: "black",
//               color: "white",
//               width: "168px",
//               padding: "2px 5px ",
//               fontWeight: "300",
//               letterSpacing: "3px",
//             }}
//           >
//             Keep Reading <ArrowRightOutlined />
//           </p>
//         </Col>

//         <Col
//           lg={{
//             span: 16,
//           }}
//           style={contentStyle}
//         >
//           <Image
//             src={leptopTwo}
//             height={400}
//             responsive
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </Col>
//       </Row>
//     </div>
//     {/* slider-3 */}
//     <div>
//       <Row>
//         <Col
//           lg={{
//             span: 8,
//           }}
//         >
//           <h1 style={{ fontSize: "50px" }}>
//             EAGLE, YOU ARE
//             <br />
//             NOT ALONE
//           </h1>
//           <div
//             className="line"
//             style={{
//               height: "5px",
//               margin: "20px 0",
//               background: "#000",
//               width: "95%",
//             }}
//           ></div>

//           <p
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               color: "gray",
//               margin: "10px 0px",
//             }}
//           >
//             <span>
//               <CalendarOutlined /> MARCH 30, 2023
//             </span>
//             <span>
//               <CommentOutlined /> 5 COMMENTS
//             </span>
//             <span>
//               <ProfileOutlined /> NATURE
//             </span>
//           </p>

//           <p style={{ fontSize: "20px" }}>
//             A spread opened patient and compulsively one placed seagull goodness
//             python owing snapped yikes equitable when much the much Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
//           </p>
//           <p
//             style={{
//               fontSize: "20px",
//               margin: "20px 0px",
//               backgroundColor: "black",
//               color: "white",
//               width: "168px",
//               padding: "2px 5px ",
//               fontWeight: "300",
//               letterSpacing: "3px",
//             }}
//           >
//             Keep Reading <ArrowRightOutlined />
//           </p>
//         </Col>

//         <Col
//           lg={{
//             span: 16,
//           }}
//           style={contentStyle}
//         >
//           <Image
//             src={leptopTheree}
//             height={400}
//             responsive
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </Col>
//       </Row>
//     </div>
//     {/* slider-4*/}
//     <div>
//       <Row>
//         <Col
//           lg={{
//             span: 8,
//           }}
//         >
//           <h1 style={{ fontSize: "50px" }}>
//             EAGLE, YOU ARE
//             <br />
//             NOT ALONE
//           </h1>
//           <div
//             className="line"
//             style={{
//               height: "5px",
//               margin: "20px 0",
//               background: "#000",
//               width: "95%",
//             }}
//           ></div>

//           <p
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               color: "gray",
//               margin: "10px 0px",
//             }}
//           >
//             <span>
//               <CalendarOutlined /> MARCH 30, 2023
//             </span>
//             <span>
//               <CommentOutlined /> 5 COMMENTS
//             </span>
//             <span>
//               <ProfileOutlined /> NATURE
//             </span>
//           </p>

//           <p style={{ fontSize: "20px" }}>
//             A spread opened patient and compulsively one placed seagull goodness
//             python owing snapped yikes equitable when much the much Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
//           </p>
//           <p
//             style={{
//               fontSize: "20px",
//               margin: "20px 0px",
//               backgroundColor: "black",
//               color: "white",
//               width: "168px",
//               padding: "2px 5px ",
//               fontWeight: "300",
//               letterSpacing: "3px",
//             }}
//           >
//             Keep Reading <ArrowRightOutlined />
//           </p>
//         </Col>

//         <Col
//           lg={{
//             span: 16,
//           }}
//           style={leptopFour}
//         >
//           <Image
//             src={leptopTwo}
//             height={400}
//             responsive
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </Col>
//       </Row>
//     </div>
//     {/* slider-2 */}
//     <div>
//       <Row>
//         <Col
//           lg={{
//             span: 8,
//           }}
//         >
//           <h1 style={{ fontSize: "50px" }}>
//             EAGLE, YOU ARE
//             <br />
//             NOT ALONE
//           </h1>
//           <div
//             className="line"
//             style={{
//               height: "5px",
//               margin: "20px 0",
//               background: "#000",
//               width: "95%",
//             }}
//           ></div>

//           <p
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               color: "gray",
//               margin: "10px 0px",
//             }}
//           >
//             <span>
//               <CalendarOutlined /> MARCH 30, 2023
//             </span>
//             <span>
//               <CommentOutlined /> 5 COMMENTS
//             </span>
//             <span>
//               <ProfileOutlined /> NATURE
//             </span>
//           </p>

//           <p style={{ fontSize: "20px" }}>
//             A spread opened patient and compulsively one placed seagull goodness
//             python owing snapped yikes equitable when much the much Lorem ipsum
//             dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
//           </p>
//           <p
//             style={{
//               fontSize: "20px",
//               margin: "20px 0px",
//               backgroundColor: "black",
//               color: "white",
//               width: "168px",
//               padding: "2px 5px ",
//               fontWeight: "300",
//               letterSpacing: "3px",
//             }}
//           >
//             Keep Reading <ArrowRightOutlined />
//           </p>
//         </Col>

//         <Col
//           lg={{
//             span: 16,
//           }}
//           style={contentStyle}
//         >
//           <Image
//             src={leptopTwo}
//             height={400}
//             responsive
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </Col>
//       </Row>
//     </div>
//   </Carousel>
// );
// export default Banner;