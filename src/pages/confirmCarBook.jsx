import NavBarEmpty from '../components/navBar.empty';
import payment from '../assets/images/payment.png'
import '../pagesCss/confirmCarBook.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ConfirmCarBook = () => {
  const [carData, setCarData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [rate, setRate] = useState(0);
  const [gst, setGst] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [hub, setHub] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
  }
  function decodeId(encodedId) {
    return atob(encodedId);
  }
  const encodedId = getEncodedIdFromUrl();

  const ids = decodeId(encodedId);
  console.log('Decoded ID:', ids);

  const fetchData = async () => {
    const getCarResponse = await axios.get(`http://localhost:8080/api/cars/${ids}`);
    console.log(getCarResponse.data);
    const amount = parseFloat(getCarResponse.data.car.amount); 
    const gst = (amount * 18) / 100;
    const cgst = (amount * 9) / 100;
    const sgst = (amount * 9) / 100;
    const hub = (amount * 5) / 100;

    const total = amount + gst + hub;

    setRate(amount);
    setGst(gst);
    setCgst(cgst);
    setSgst(sgst);
    setHub(hub);
    setTotal(total);

    console.log(rate);
    console.log(gst);
    console.log(hub);
    console.log(total);
    setCarData(getCarResponse.data);
  }

  const checkToken = () => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    console.log("Token:", token);
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkToken();
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        window.location.href = '/userLoginSignup';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);


  return (
    <>
      <NavBarEmpty />
      {carData.length != 0 ? (<section class="bookingWidget">
        <div className="templateContainer">
          <div className="bookingSummary">
            <div className="leftWidget">
              <div class="paymentWidget w100">
                <div class="productWidget">
                  <div class="productImage">
                    <h2>{carData.car.carName}</h2>
                    <figure>
                      <img src={"http://localhost:5173/@fs/D:/Sem_6/drive-ease-backend/assets/carsImage/" + carData.car.imageUrl} alt="" />
                    </figure>
                  </div>
                  <div class="productDetails">
                    <div class="timeList">
                      <div class="tTitle">TIME PERIOD</div>
                      <div class="day">
                        <b>2</b>
                        <p>DAYS</p>
                      </div>
                      <div class="hours">
                        <b>1</b>
                        <p>HOURS</p>
                      </div>
                      <div class="mins">
                        <b>30</b>
                        <p>MINS</p>
                      </div>
                    </div>
                    <div class="pickupTable">
                      <div class="pickupCol">
                        <div class="tableTitle">PICKUP DATE &amp; TIME</div>
                        <div class="tableContent">26/02/2024</div>
                        <div class="tableContent">05:00 AM</div>
                      </div>
                      <div class="pickupCol">
                        <div class="tableTitle">DROP OFF DATE &amp; TIME</div>
                        <div class="tableContent">28/02/2024</div>
                        <div class="tableContent">06:30 AM</div>
                      </div>
                    </div>
                    <div class="pickupTable">
                      <div class="pickupCol">
                        <div class="tableTitle">PICKUP LOCATION</div>
                        <div class="tableContent">Kottayam</div>
                      </div>
                      <div class="pickupCol">
                        <div class="tableTitle">DROP OFF LOCATION</div>
                        <div class="tableContent">Kottayam</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productContent">
                <div className="scroller">
                  <h2><strong>Terms and Conditions</strong></h2>
                  <div className="sec">
                    <h3><strong>DriveEase</strong></h3>
                    <br />
                    <p>
                      Please note the following Terms and Conditions apply to bookings placed directly on the EVM WHEELS website or through an affiliate website. Throughout this document, EVM Wheels will be referred to as 'the company' after the first mention.

                      The terms and conditions of the company are the policies that govern the relationship between the Company and the User. These terms and conditions (as amended from time to time including all Schedules and Annexures hereto) shall constitute a legally valid and binding contract under the Applicable Laws and the use of any product Services either through EVM Wheels’s Website or Application (hereinafter referred to as App”) by the User shall be deemed to be an acceptance of all the terms and conditions set forth herein. Users are advised to read these terms and conditions carefully before using/registering on the Website/ App or availing Services through the same. EVM Wheels reserves the right to alter/modify/change these terms and conditions in its sole discretion, from time to time, with or without prior notice to the User. Notice of any changes shall be made by EVM Wheels, promptly and communicated/brought to the attention of the User in such manner as it deems fit.
                    </p>
                    <br />
                    <h3>
                      <strong>Requirements to Rent</strong>
                    </h3>
                    <br />

                  </div>
                  <p><h4>You must bring the following items to collect your car:</h4></p>
                  <p><h4>For Customers NOT arriving by flight:</h4></p>
                  <div class="sec">
                    <ul type="disc">
                      <li>Valid original Indian driving license with 2 years' experience.</li>
                      <li>Credit card in main driver's name with available credit up to excess liability. The credit card must NOT expire within 2 months of the customer return date.</li>
                      <li>roof of address such as utility bill or bank statement issued within the past 3 months -- must match address on license or a second proof will be needed</li>
                      <li>EVM Wheels Booking Voucher (paper or digital)</li>
                    </ul>
                  </div>
                  <p>
                    <h4>For customers who are arriving by flight:</h4>
                  </p>
                  <div class="sec">
                    <ul type="disc" >
                      <li> Valid original Indian driving license with 2 years' experience. </li>
                      <li> Credit card in main driver's name with available credit up to excess liability. The credit card must NOT expire within 2 months of the customer return date. </li>
                      <li> Passport </li>
                      <li> Boarding pass from inbound flight </li>
                      <li> EVM Wheels Booking Voucher (paper or digital) </li>
                    </ul>
                  </div>
                  <br />
                  <p><strong>Driver License Requirements</strong></p>
                  <br />
                  <div class="sec1">
                    <ol>
                      <li><span>Drivers must bring previous driving licenses or a letter from their driving license authority stating that they have held it for at least the minimum period if their current driving license does not show the full period.
                      </span></li>
                      <li><span>Digital Driving licenses are not accepted, a physical driving license is required.</span></li>
                      <li><span>For International Driving license, License must be in Roman letters, Latin alphabet or accompanied by an International Driving Permit (IDP).
                      </span></li>
                      <li><span>Exclusions will apply with regards to traffic violations or penalty points. Any offences relating to drink or drug usage (however old) may result in no car being offered.
                      </span></li>
                      <li><span>Vehicles used for customer and reward are excluded from the insurance policy.
                      </span></li>
                      <li><span>Customers must ensure that their current home address is showing on the rental agreement.
                      </span></li>
                      <li><span>Customers who cannot prove return flight will be processed as a local customer and will need to prove their address.</span></li>
                      <li><span>For security reasons name changes are not allowed.
                      </span></li>
                      <li><span>It is the customer's responsibility to ensure that their license is valid for use in India. Failure to provide a valid license and permit (where required) will result in a non-refundable cancellation of the registration.
                      </span></li>
                    </ol>
                  </div>
                  <div claa="sec">
                    <p><span>[A photograph of drivers is required for insurance formalities and will be taken at the time of rental. In keeping with privacy legislation, the image will not be shared outside the company or its insurer unless illegal activity is suspected, at which point it could be shared with Police or a duly authorized enforcement body.]</span></p>
                    <p><span>You may be denied rental for reasons including:</span></p>
                  </div>
                  <p><strong>You may be denied rental for reasons including:</strong></p>
                  <div class="sec">
                    <ul type="disc">
                      <li><span>Previous driving disqualifications</span></li>
                      <li><span>Pending prosecution or police enquiry</span></li>
                      <li><span>Convictions for offences relating to theft, fraud or dishonesty</span></li>
                      <li><span>Involved in an at-fault accident within the last 5 years</span></li>
                      <li><span>Involved in more than 1 accident in the last 3 years</span>
                      </li><li><span>Defective vision</span>
                      </li></ul>
                  </div>
                  <p><strong>Accepted Methods of Payments and Preauthorization of Deposits</strong></p>
                  <table class="tab">
                    <thead>
                      <tr>
                        <td>
                          <p><span>The company locations accept credit cards for payment as detailed below. All credit card payments will be subject to and must pass PIN verification. Cards must be in the main driver's name.</span></p>
                          <p><strong><span>&nbsp;</span></strong></p>
                        </td>
                        <td>
                          <p><strong><span>&nbsp;</span></strong></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span>&nbsp;</span>
                          </p><table class="tab">
                            <tbody>
                              <tr>
                                <td>

                                  <h3>Method of Payment<p></p>
                                  </h3></td>
                                <td>
                                  <h3>Accepted for local Rental Charges</h3>
                                </td>
                                <td>
                                  <h3>Accepted for Security Deposit</h3>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>Credit Card (VISA / Mastercard)</span>
                                  </p></td>
                                <td>
                                  <p><span>YES</span>

                                  </p></td><td>
                                  <p><span>YES

                                  </span></p></td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>American Express/ Diners</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>Debit Card</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>Pre-Paid / Electronic Use Card</span></p>
                                </td>
                                <td>
                                  <p><span>NO</span></p>
                                </td>
                                <td>
                                  <p><span>NO &nbsp;</span></p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>Cash/Cheques</span></p>
                                </td>
                                <td>
                                  <p><span>NO</span></p>
                                </td>
                                <td>
                                  <p><span>NO</span></p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p><span>Virtual Cards (E.G Apple Pay/Google Pay)</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                                <td>
                                  <p><span>YES</span></p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p><br /></p>
                        </td>
                        <td>
                          <p><strong><span>&nbsp;</span></strong></p>
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <div class="sec">
                    <p><span>&nbsp;</span></p>
                    <p><span>Failure to present a valid method of payment or lack of sufficient funds on the Credit Card, or if the Credit Card expires within 2 months of customer return date, may result in refusal of vehicle release. No funds paid will be reimbursed.</span></p>
                    <p><span>In the event that the original booking was paid using a third-party card, customers may be required to present details, permissions and authorization relating to the transaction. Failure to provide the information requested may result in refusal.</span></p>
                  </div>
                  <br />
                  <table class="tab">
                    <tbody>
                      <tr>
                        <td>
                          <h3>Driver Age Requirements</h3>
                        </td>
                        <td>
                          <p><span>&nbsp;</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span>Minimum age</span></p>
                        </td>
                        <td>
                          <p><span>21</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span>Maximum age</span></p>
                        </td>
                        <td>
                          <p><span>80</span></p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span>*Young Driver Surcharge</span></p>
                        </td>
                        <td>
                          <p>Young driver surcharge applies to ages 21 – 24. Charge 100 per day.</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p><span>Senior Driver Surcharge</span></p>
                        </td>
                        <td>
                          <p><span>N/A</span></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="sec">

                    <p><span>Drivers aged 21 to 24 years old will incur restrictions on vehicle size during booking. Drivers aged 21 to 24 cannot drive any large or premium vehicles. Other limitations may apply, please contact rental branch for details.</span></p>
                    <p><span>The standard maximum age for insurance purposes is 80 years. Please check with the branch prior to booking.</span></p>
                    <p><span>*Young drivers may be subject to a different pre-authorization amount, please check with the renting branch prior to collection.</span></p><br />
                    <h3>Booking Voucher</h3>
                    <p><span>A printed or electronic copy of your voucher is required to confirm your booking details upon arrival at the rental desk.</span></p><br />
                    <h3>Pricing</h3>
                    <p><span>The company website offers multi-pricing packages with differing inclusions and deposit/excess amounts. Details of each package will be available during booking and on the rental voucher. The customer is responsible for checking package inclusions before booking.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>EVM Wheels Basic</h3>
                    <p><span>Security deposit</span></p>
                    <p><span>Without Fuel</span></p>
                    <p><span>120 Km Per Day</span></p>
                    <p><span>Non refundable</span></p>
                    <p><span>Non amendable</span></p>
                    <p><span>Damage charges as per policy</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>EVM Wheels Plus</h3>
                    <p><span>Security deposit</span></p>
                    <p><span>Without Fuel</span></p>
                    <p><span>180 Km Per Day</span></p>
                    <p><span>Cancellation as per Policy</span></p>
                    <p><span>Amendable</span></p>
                    <p><span>Damage charges as per policy</span></p><br />
                    <h3>EVM Wheels Premium</h3>
                    <p><span>Security deposit – NIL</span></p>
                    <p><span>Without Fuel</span></p>
                    <p><span>Unlimited Kms</span></p>
                    <p><span>Cancellation as per Policy</span></p>
                    <p><span>Amendable</span></p>
                    <p><span>Damage charges as per policy</span></p>
                    <p><span>Additional Driver incorporated</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>All packages include:</h3>
                    <p><span>Manufacturer Warranty</span></p>
                    <p><span>Breakdown Assistance</span></p>
                    <p><span>Third Party Liability</span></p>
                    <p><span>GST</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Deposits, Excess and Additional Cover</h3>
                    <p><span>The company offers 3 packages with varying protection levels; Basic, Plus, Premium. Please see below for details.</span></p>
                    <p><span>Credit card pre-authorization will be used for security deposits. This rings-fences the deposit amount rather than transacting as a sale. The monies must be available but will not leave the account until released by the issuing bank. This usually takes up to 10 working days, however can take up to 30 days depending on card type, bank and country.</span></p>
                    <p><span>Customers using debit card for deposit must pay security deposit in advance.</span></p>
                    <p><span>*Premium fleet cars include brands such as Mercedes, Audi, BMW. This list is not exhaustive.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Protection packages</h3>
                    <p><span>&nbsp;</span></p>
                    <h4>Basic</h4>
                    <p><span>Reduces Excess liability charges for denting and painting only to zero. Excess for other damage, major accident repairs and damage to tyre and windshield remains unchanged and is NOT covered.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h4>Smart</h4>
                    <p><span>Reduces Excess liability charges for denting, painting, other damage, major accident repairs and damage to tyre and windshield to zero. Downtime charges are NOT covered.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h4>Safe</h4>
                    <p><span>Reduces Excess liability charges for denting, painting, other damage, major accident repairs and damage to tyre and windshield to zero. Downtime charges also covered for minor dents and scratches.</span></p>
                    <p><span>*Downtime waiver not applicable for high collision/total loss damages.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Extra Services</h3>
                    <p><span>All optional extras can be subject to price changes without notice and are subject to availability.</span></p>
                    <h4>Additional Driver:<span>&nbsp;200 per day</span></h4>
                    <h4>Baby seat:<span>&nbsp;100 per day</span></h4>
                    <h4>Luggage carrier:<span>&nbsp;200 per day</span></h4>
                    <p><strong>Mobile charger:</strong><span>&nbsp;50 per day</span></p>
                    <p><strong><span>Unlimited mileage:</span></strong><span>&nbsp;80% per day rental -- No charges for Premium package.</span></p>
                    <p><strong><span>Installation of Baby / Child Seats</span></strong></p>
                    <p><span>Responsibility for installation of child/baby seats rests with the customer and will not be done by company employees due to liability concerns over inappropriate installation.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>FUEL CHARGES</h3>
                    <p><span>Vehicles are supplied without fuel. You must maintain the same fuel level at delivery when returning the vehicle. If fuel is lower at drop off, you can top up or pay the fuel cost used. There is no option to refund or adjust extra fuel filled. Customers should not fill more than their expected usage.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Mileage Policy</h3>
                    <p><span>Basic -- 120 Kms per day</span></p>
                    <p><span>Plus -- 180 Kms per day</span></p>
                    <p><span>Premium -- Unlimited mileage within Kerala</span></p>
                    <p><span>Premium Plus -- Unlimited mileage within Kerala</span></p>
                    <p><span>If mileage allowance is exceeded, a fee will be charged per the extra KM charges policy.</span></p>
                    <p><strong><span>Permitted territory</span></strong><span>&nbsp;refers to within Kerala state limits.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>&gt;EXTRA KMS CHARGES:</h3>
                    <p><span>You can select various per-day KM options under our Basic, Plus, Premium packages. If you exceed the total allowed kilometers, extra charges will apply based on vehicle type.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Roadside Assistance</h3>
                    <p><span>Manufacturer's warranty roadside assistance is included. Relevant contact details and procedures will be provided before rental commences. The company reserves the right not to provide a replacement vehicle depending on circumstances. The company does not take liability for driver error faults, only provides free recovery or other solution for immobility.</span></p>
                    <p><span>Breakdown costs related to misuse/sympathetic use of vehicle are not covered and will incur charges.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Smoking Policy</h3>
                    <p><span>It is illegal to smoke in a rental vehicle. If you have smoked or allowed smoking within the vehicle, charges up to the full excess will apply. This includes allowing cigarette (or cigar) smoke or ash into the vehicle, implying the above.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Valeting/Animals in Vehicles</h3>
                    <p><span>No animals should be transported unless contained. A minimum valeting fee of INR 3000 will apply for animal transportation.</span></p>
                    <p><span>If a vehicle is returned unclean internally/externally requiring more than standard clean, a valeting charge of INR 500 will apply. Hazardous or excessive soiling requiring specialist cleaning will be charged per the specialist required.</span></p>
                    <p><span>&nbsp;</span></p>
                    <h3>Delayed Pick-ups/ No show policy</h3>
                    <strong>AT AIRPORT LOCATIONS:</strong>
                  </div>
                  <div class="sec">
                    <ul type="disc" >
                      <li><span>Registration will be held for 4 hours within office hours from the specified time, after which a no-show will be assumed. If customer arrives after this time, a vehicle is not assured. Pick-ups outside office hours incur an 'Out of Hours' fee.</span></li>
                      <li><span>For flight delays with a valid flight number, registration will be held for 4 hours from the delayed arrival time within office hours. Collection outside office hours incurs an 'Out of Hours' fee by prior arrangement. It is the customer's responsibility to inform the location before flying if arriving after closing, as soon as possible.</span></li>
                      <li><span>If no valid flight number is provided, registration will be held for 4 hours or until location closes. Staff cannot wait after closing when no flight number is provided.</span></li>
                      <li><span>Flight diversions will be treated as a no-show at the original location and transfer cannot be assumed.</span></li>
                    </ul>
                  </div>
                  <strong>AT NON-AIRPORT LOCATIONS:</strong>
                  <div class="sec">
                    <ul type="disc">
                      <li><span>Registration will be held for 4 hours or until closing office time, whichever comes first. Staff will not wait after closing time.</span></li>
                    </ul>
                  </div>
                  <div class="sec">
                    <p><span>The company will make every effort to provide a vehicle, which may involve offering a different vehicle at different rates to the original booking.</span></p>
                    <p><span>Late pick-ups outside office hours may incur the 'Out of Hours' fee. Requests via email cannot be guaranteed.</span></p>
                    <p><span>No refunds given for rentals ended early, late pick-ups, no-shows or cancellations after the rental start date.</span></p>

                    <h3>Lost Keys</h3>
                    <p><span>A charge will apply for lost or damaged keys. Note that if a vehicle is stolen and keys not returned, the customer will be deemed negligent, liable for all recovery, loss of use and repair costs. This list is not exhaustive.</span></p>

                    <h3>Rental Extensions</h3>
                    <p><span>Extensions may not always be possible at the hiring branch. Where agreed, the extension will be charged at the prevailing rate which may differ from the original booking rate.</span></p>

                    <h3>Un-authorized Rental Extension</h3>
                    <p><span>This occurs when the customer fails to return the vehicle within the agreed return date, time and location on the contract. This will be a breach of contract and incur charges including reverting to 'Rack Rate' costs:</span></p>
                    <p><span>EVM Wheels Rack Rate Tariff: 2 times the per day rental rate of that vehicle.</span></p>

                    <h3>Early Drop off/Unused Rental Days</h3>
                    <p><span>No refunds given for rentals ended early, including purchase of ancillary items, late pick-ups, extensions, no shows or cancellations after the rental start date.</span></p>

                    <h3>Late Drop off</h3>
                    <p><span>A grace period applies as detailed in the rental agreement. After this, the booking will be classed as late and additional charges will be due. The minimum charge is <strong>INR 500/- per hour</strong> but may vary according to the vehicle's rental value. The company will attempt to inform you of costs.</span></p>
                    <p><span>Any optional extras like additional drivers or waivers already taken will be charged. The charge will be applied to the card used for security deposit.</span></p>
                    <p><span>Late drop offs after the grace period are considered unauthorized extensions without written approval from the rental location.</span></p>

                    <h3>Grace period: 59 minutes</h3>

                    <h3>Amendments</h3>
                    <p><span>Amendments must be requested in writing via email at least 24 hours before rental start. Please note telephone amendments are not accepted. Amendments may be treated as a new booking.</span></p>

                    <h3>Fines, Penalties and Administration Charges</h3>
                    <p><span>The customer is responsible for parking fines and traffic violations. When the company administers the charge, an administration fee of INR 68 per fine will apply to the customer. This is a non-waiverable fee.</span></p>

                    <h3>Traffic/Parking violations</h3>
                    <p><span>Full payment of traffic fines and late fees, including cases where we receive notices after the end of booking. Users have to pay it by themself immediately and send a receipt to us OR pay INR 500 extra for each case.</span></p>
                    <p><span>Over-speeding (above 80 KMs/Hr.) INR 1500 will be charged for each over speeding event based on the Govt approved GPS device fitted on the vehicle.</span></p>

                    <h3>Opening Hours</h3>

                    <h3>Downtime charges:</h3>
                    <p><span>In the event of any damages to the vehicle, including accident: User have to pay for the downtime losses (rental loss), according to the following table as the incidental and consequential loss to the company.</span></p>
                  </div>

                </div>
              </div>
            </div>
            <div className="rightWidget">
              <div class="pricingWidget">
                <h2>Fare Details</h2>
                <div class="paymentList">
                  <div class="payKey">Rate</div>
                  <div class="payValue">₹{rate}</div>
                </div>
                <div class="paymentList mb-5">
                  <div class="payKey">Addons Amount</div>
                  <div class="payValue">₹0.00</div>
                </div>
                <div class="describe-payment-list mb-15">
                </div>
                <div class="paymentList mb-0">
                  <div class="payKey">Insurance Amount</div>
                  <div class="payValue">₹0.00</div>
                </div>
                <div class="describe-payment-list mb-15">
                  <div class="d-flex justify-content-between">
                    <div class="payKey text-capitalize"> - </div>
                    <div class="payValue">₹ 0.00</div>
                  </div>
                </div>
                <div class="paymentList">
                  <div class="payKey">Diff Location Charges</div>
                  <div class="payValue">₹0.00</div>
                </div>
                <div class="paymentList">
                  <div class="payKey">Delivery Charge</div>
                  <div class="payValue">₹0.00</div>
                </div>
                <div class="paymentList">
                  <div class="payKey">CGST</div>
                  <div class="payValue">₹{cgst}</div>
                </div>
                <div class="paymentList">
                  <div class="payKey">SGST</div>
                  <div class="payValue">₹{sgst}</div>
                </div>
                <div class="paymentList">
                  <div class="payKey">Hub Charge</div>
                  <div class="payValue">₹{hub}</div>
                </div>

                <div class="paymentList">
                  <div class="payKey">Total Rent Amount</div>
                  <div class="payValue">₹{total}</div>
                </div>
                <div class="paymentList">
                  <div class="payKey">Deposit Amount</div>
                  <div class="payValue">₹0</div>
                </div>
                <br />
                <div class="paymentList totalAmount">
                  <div class="payKey">Total Amount </div>
                  <div class="payValue">₹{total}</div>
                </div>



                <div class="radioCheck">
                  <label class="container">
                    <input checked={isChecked} type="checkbox" onClick={handleCheckboxChange} />
                    <div class="checkmark"></div>
                  </label>
                  <label for="termsCheck">I understand and agree to the terms and conditions.</label>
                </div>
                <div id="error-terms" >Agree the terms and conditions to continue </div>
                <div class="promoCodWidget">


                  <span class="promo_code_error" ></span>
                </div>
                <div class="panel-heading">
                  <div class="w-full h-40 flex items-center justify-center cursor-pointer">
                    <div
                      class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
                    >
                      <span
                        class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
                      ></span>
                      <span
                        class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          class="w-5 h-5 text-green-400"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <span
                        class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          class="w-5 h-5 text-green-400"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </span>
                      <span
                        class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
                      >Pay Now</span
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-15">
                  <img src={payment} alt="" />
                </div>
                <span class="terms-error"></span>
              </div>
            </div>
          </div>
        </div>
      </section>) : (null)}
    </>
  )
}

export default ConfirmCarBook