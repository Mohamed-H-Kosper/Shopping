import About1 from '../images/about1.jpg';
import About2 from '../images/about2.png';
import '../AboutUs/About.css';
function About(){
    return (
      <>
      <div className="container-fluid">
        <div className="row">
          <h2  data-aos="fade-down" data-aos-duration="3000" className=" address d-flex justify-content-center fs-3 pt-5 pb-5">
            About Us Shopping
          </h2>
          <img
          data-aos="fade-left" 
          data-aos-duration="3000"
            loading="lazy"
            className="newAbout-img d-none pb-5"
            // src={about1}
            alt="NoImage"
          />{" "}
          {/* appear in 1550px only*/}
          {/* section 1 */}
          <div className="About d-flex justify-content-evenly ">
            <div data-aos="fade-right" data-aos-duration="3000" className="about-L " >
              <h3 style={{textShadow:"1px 1px 5px black"}} > Welcome to our shopping site </h3>
              <h4 className="pt-2 pb-2 text-primary  ">1-🛍 Who We Are</h4>
              <h5 className="text-about  text-white " style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we provide university students with a unique
                living experience that combines comfort, security, and an ideal
                study environment. We strive to offer a place that inspires
                students to excel academically while also enjoying their time.
                Our hostel is located in the heart of the city, making it easy
                and convenient to commute to campus and nearby facilities. We
                take pride in offering well-equipped rooms with all the
                necessary amenities, as well as modern common spaces that
                encourage collaboration, social interaction, and study. Every
                detail of our design is tailored to meet the needs of students,
                ensuring a calm and secure environment. Join us at Student
                Hostel, where we offer more than just accommodation—we provide a
                community that balances academic and social life, caring for
                your comfort and personal growth.
              </h5>
              <h4 className="pt-5 pb-2 text-primary">2-Vision and Mission</h4>
              <h4 className="pt-2 pb-2 ">🎯 Our Vision</h4>
              <h5 className="text-about text-white" style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we aim to be the top and preferred
                destination for students by providing a safe, comfortable, and
                inspiring residential environment that supports academic success
                and offers a distinctive living experience. We aspire to become
                a comprehensive student community that fosters a balance between
                study and social interaction.
              </h5>
              <h4 className="pt-2 pb-2">💡 Our Mission</h4>
              <h5 className="text-about text-white" style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we are committed to providing a residential
                environment that enhances students' academic and personal
                well-being. Our goal is to offer high-quality accommodation
                services characterized by comfort and security, while creating a
                collaborative community that encourages academic excellence and
                helps students build strong social connections and achieve
                personal growth.
              </h5>
            </div>
            <img
              loading="lazy"
              className="about-img "
              src={About2}
              alt="NoImage"
              data-aos="fade-left" 
              data-aos-duration="3000"
            />
          </div>
          {/* section 2 */}
          <img
          data-aos="fade-right"
           data-aos-duration="3000"
            loading="lazy"
            className="newAbout-img  d-none pb-5"
            src={About1}
            alt="NoImage"
          />{" "}
          {/* appear in 1550px only*/}
          <div className="About d-flex justify-content-evenly ">
            <img
            data-aos="fade-right" 
            data-aos-duration="3000"
              loading="lazy"
              className="about-img "
              src={About1}
              alt="NoImage"
            />
            <div data-aos="fade-left" data-aos-duration="2000" className="about-R">
              <h4 className=" pb-2 text-primary">3-🧩 What We Offer</h4>
              <h5 className="pt-2 pb-2 text-white"  style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we provide a range of high-quality facilities
                and services designed to meet the needs of our students and
                ensure their comfort:
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Comfortable Rooms: Fully furnished rooms with comfortable beds,
                study desks, and ample storage space.
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Study Areas: Quiet and well-equipped study spaces that encourage
                focus and productivity
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Common Areas: Modern common areas for relaxation, socializing,
                and community activities.
              </h5>
              <h5 className="pt-2 pb-2 text-white"  style={{textShadow:"3px 3px 5px black"}}>
                High-Speed Internet: Free Wi-Fi throughout the hostel to ensure
                students can stay connected and complete their academic tasks.
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Security: 24/7 security and surveillance to ensure a safe living
                environment for all residents.
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Support Services: A friendly and helpful staff available to
                assist with any needs or concerns.
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Laundry Facilities: On-site laundry rooms equipped with modern
                washing machines and dryers.
              </h5>
              <h4 className="pt-5 pb-2 text-primary">
                4-🙌 Why Choose Us ?
              </h4>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we offer flexible pricing plans and an
                easy-to-use booking system to accommodate the needs of our
                students:
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Flexible Pricing Plans: We provide a variety of pricing options
                to suit different budgets. Whether you need a single room or
                shared accommodation, we have plans that offer both
                affordability and comfort.
              </h5>
              <h4 className="pt-5 pb-2 text-primary">
                4-🤝 Our Partners
              </h4>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                At Student Hostel, we offer flexible pricing plans and an
                easy-to-use booking system to accommodate the needs of our
                students:
              </h5>
              <h5 className="pt-2 pb-2 text-white" style={{textShadow:"3px 3px 5px black"}}>
                Flexible Pricing Plans: We provide a variety of pricing options
                to suit different budgets. Whether you need a single room or
                shared accommodation, we have plans that offer both
                affordability and comfort.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
export default About;