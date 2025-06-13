import React from "react";
import Nerbar from "./Nerbar";
import Sidebar from "./Sidebar";
import Container from "../components/Container";
import { PiGreaterThanFill } from "react-icons/pi";
import Flex from "../components/Flex";
import Footer from "./Footer";
const SingUp = () => {
  return (
    <section>
      <div>
        <Nerbar />
        <Sidebar />
      </div>
      <Container>
        <h1 className="text-5xl font-dm font-bold hover:text-gray-500 pt-24">
          Sign up
        </h1>
        <div className="flex items-center gap-4 pt-4">
          <h1 className="text-[#767676] text-xl hover:text-black hover:font-semibold">
            Home
          </h1>
          <PiGreaterThanFill />
          <h2 className="text-[#767676] text-xl hover:text-black hover:font-semibold">
            About
          </h2>
        </div>
        <p className="text-2xl font-dm pt-16 hover:text-3xl hover:text-blue-500 hover:font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since
          the.
        </p>
        <h1 className="text-6xl font-dm font-bold hover:text-gray-500 pt-24">
          Your Personal Details
        </h1>
        <Flex className="gap-24 pt-8">
          <div className="w-2/5">
            <p className="font-bold text-xl">First Name</p>
            <input
              type="text"
              placeholder="You First Name."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
            <p className="font-bold text-xl">Email Address</p>
            <input
              type="text"
              placeholder="You Email Address."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
          <div className="w-2/12">
            <p className="font-bold text-xl">Last Name</p>
            <input
              type="text"
              placeholder="You Last Name."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
            <p className="font-bold text-xl">Phone Number</p>
            <input
              type="text"
              placeholder="You Phone Number."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
        </Flex>
        {/* Address============================================ */}
        <h1 className="text-6xl font-dm font-bold hover:text-gray-500 pt-24">
          New Customer
        </h1>
        <Flex className="gap-24 pt-8">
          <div className="w-2/5">
            <p className="font-bold text-xl">Address 1</p>
            <input
              type="text"
              placeholder="Address 1."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
            <p className="font-bold text-xl">city</p>
            <input
              type="text"
              placeholder="Your City."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
            <div className="">
              <p className="font-bold text-xl">Select you country</p>

              <select
                id="country"
                name="country"
                class="pt-3 rounded outline-none"
              >
                <option value="">Select Country.</option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CD">Congo (DRC)</option>
                <option value="CG">Congo (Republic)</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GR">Greece</option>
                <option value="GD">Grenada</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="CI">Ivory Coast</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">North Korea</option>
                <option value="KR">South Korea</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
            </div>
            <hr className=" w-[500px] text-[#F0F0F0] mt-2" />
          </div>
          {/* other section */}
          <div className="w-2/12">
            <p className="font-bold text-xl">Address 2</p>
            <input
              type="text"
              placeholder="Address 2."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
            <p className="font-bold text-xl">Post Code</p>
            <input
              type="text"
              placeholder="Your post code."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
        </Flex>

        {/* Passsword section */}
        <h1 className="text-6xl font-dm font-bold hover:text-gray-500 pt-24">
          Your Password
        </h1>
        <Flex className="gap-24 pt-8">
          <div className="w-2/5">
            <p className="font-bold text-xl">Password</p>
            <input
              type="text"
              placeholder="Your password."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
          {/* other section */}
          <div className="w-2/12">
            <p className="font-bold text-xl">Confirm password</p>
            <input
              type="text"
              placeholder="Password Again."
              className="w-[900px] py-4 rounded outline-none"
            />
            <hr className=" w-[500px] text-[#F0F0F0]" />
          </div>
        </Flex>
        <div className="flex pt-24 gap-4">
          <input type="checkbox" />
          <p>I have read and agree to the Privacy Policy</p>
        </div>
        <div className="flex gap-8 pt-4">
          Subscribe Newsletter yes
          <input type="checkbox" />
          No
          <input type="checkbox" />
        </div>
        <button className="w-[330px] bg-black text-white font-dm font-bold text-4xl py-3 rounded mt-8 hover:bg-blue-500 hover:text-5xl">
          Login
        </button>
      </Container>
      <div className="pt-52">
        <Footer />
      </div>
    </section>
  );
};

export default SingUp;
