import React from "react";
import { div, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import image from "../components/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import immg from "../components/images.jpg";
import Uu from "./size";
import "bootstrap/dist/css/bootstrap.min.css";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.jpg";
import six from "../images/6.jpeg";
import { useState } from "react";
import axios from "axios";
const images = [
  { url: one },
  { url: two },
  { url: three },
  { url: four },
  { url: six },
  { url: five },
];

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const InputDefault = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2F3C7E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8AAAE5", // Change this color
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#317773", // Change this color
    },
    "&:hover fieldset": {
      borderColor: "#E2D1F9", // Change this color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ADD8E6", // Change this color
    },
  },
  "& input": {
    color: "#FFFFFF", // Change the text color
  },
  "& .MuiFormLabel-root": {
    color: "#FFFFFF", // Change the label text color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFFFFF", // Change the focused label text color
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#FFFFFF", // Change the placeholder color
  },
});

const flexContainerStyle = {
  display: "flex",

  justifyContent: "center",
  flexWrap: "wrap", // Allow content to wrap to the next line
};

const responsiveColumn = {
  flexBasis: "100%", // Make each item take full width in a column
  padding: "5px", // Adjust spacing as needed
};

export default function App() {
  const [name, setName] = useState("");
  const [admNo, setAdmNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [branch, setBranch] = useState("");
  const [hostel, setHostel] = useState("");
  const [transId, setTransId] = useState("");
  const [room, setRoom] = useState("");
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  const server = "https://concetto-23-nuc1.onrender.com/api";
  const submitHandler = async (e) => {
    e.preventDefault();


    const data = new FormData(e.currentTarget);
      const resp = new FormData();

      const response = {
        name: data.get("name"),
        image: url,
        orderID: data.get("transId"),
        admissionNumber: data.get("admNo"),
        mobileNumber: data.get("mobNo"),
        branch: data.get("branch"),
        tshirtSize: data.get("size"),
        transactionID: data.get("transId"),
        hostel: data.get("hostel"),
        roomNumber: data.get("room"),
        place: data.get("place"),
      };
       
      for(let prop in response){
        resp.append(prop, response[prop]);
      }

    const formData = new FormData();
    formData.append("image", url);
    try {
      const usr = await axios.post(
        `${server}/purchase`,
        resp,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(usr);
    } catch (error) {
      console.log("error2", error);
    }
  };
  const handleImageChange = (event) => {
    setUrl(event.target.files[0]);
  };

  return (
    <div id="canvas_container">
      <div className="m-3" id="canvas_box">
        <img src={image} className="my-1" height={70} alt="404" />
        <div style={flexContainerStyle}>
          <div className="note mt-5">
            <SimpleImageSlider
              width={650}
              height={500}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
          <div className="text-light">
            <Typography variant="h5" className="mb-3" align="center">
              Enter Your Information
            </Typography>
            <Form
              style={{ width: "100%" }}
              className="m-3"
              onSubmit={submitHandler}
            >
              <div style={responsiveColumn}>
                <InputDefault
                  label="Name"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Admission Number"
                  fullWidth
                  required
                  value={admNo}
                  onChange={(e) => {
                    setAdmNo(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Email"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Phone Number"
                  fullWidth
                  required
                  value={mobNo}
                  onChange={(e) => {
                    setMobNo(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Branch"
                  fullWidth
                  required
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn} className="hostel" fullWidth>
                <InputDefault
                  label="Hostel"
                  className="w-50"
                  required
                  value={hostel}
                  onChange={(e) => {
                    setHostel(e.target.value);
                  }}
                />

                <InputDefault
                  label="Room No"
                  className="w-49"
                  required
                  value={room}
                  onChange={(e) => {
                    setRoom(e.target.value);
                  }}
                />
              </div>
              <div style={responsiveColumn}>
                <InputDefault
                  label="Transaction id"
                  fullWidth
                  required
                  value={transId}
                  onChange={(e) => {
                    setTransId(e.target.value);
                  }}
                />
              </div>
              {/* <span>Size</span> */}
              {/* <br/> */}
              <Uu size={size} setSize={setSize} />
              <div style={responsiveColumn}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleImageChange}
                    required
                    accept="image/*"
                  />
                  <Button className="m-3" variant="outlined" component="span">
                    Upload button
                  </Button>
                </label>
                <Button type="submit" className="m-3" variant="contained">
                  Place order
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
