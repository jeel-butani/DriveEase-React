import React, { useState } from 'react'
import Footer from "../components/footer";
import Navbar from '../components/navBar';
import Slider from "../components/slider";
import "../pagesCss/homeCss.css";
import { useForm } from 'react-hook-form';
const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [currentDateTime] = useState(new Date());

  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[urlParts.length - 1];
  }

  const encodedId = getEncodedIdFromUrl();

  const checkId = () => {
    const urlParts = window.location.href.split('/');
    if (urlParts[urlParts.length - 1] !== '') {
      return true;
    } else {
      return false;
    }
  }
  const loginPlease = () => {
    window.location.href = '/userLoginSignup';
  }

  const onSubmit = (data) => {
    const isLogin = checkId();
    if (!isLogin) {
      window.location.href = '/userLoginSignup';
    } else if (data.bikeOrCar == "car") {
      const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
      window.location.href = `/carProduct/${encodedId}?${queryString}`;
    } else if (data.bikeOrCar == "bike") {
      const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
      window.location.href = `/bikeProduct/${encodedId}?${queryString}`;
    } else if (data.bikeOrCar == "driver") {
      const queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
      window.location.href = `/driverUser/${encodedId}?${queryString}`;
    }
  };

  const validateDateTime = (value) => {
    const selectedDateTime = new Date(value);
    if (selectedDateTime <= currentDateTime) {
      return "Please select a future date and time";
    }
    return true;
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Slider />

      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group">
              <label className='text-xl font-bold'>Select Location:</label>
              <select className='text-xl ele' {...register("location", { required: "Please select a location" })}>
                <option value="">Select Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="rajkot">Rajkot</option>
              </select>
              {errors.location && <span className="error">{errors.location.message}</span>}
            </div>
            <div className="form-group">
              <label className='text-xl font-bold'>Search Type:</label>
              <select className='text-xl ele' {...register("bikeOrCar", { required: "Please select a type" })}>
                <option  value="">Select Type</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="driver">Driver</option>
              </select>
              {errors.bikeOrCar && <span className="error">{errors.bikeOrCar.message}</span>}
            </div>
            <div className="form-group">
              <label className='text-xl font-bold'>Start Date:</label>
              <input className='text-xl ele' type="date" {...register("startDate", { required: "Please enter start date", validate: validateDateTime })} />
              {errors.startDate && <span className="error">{errors.startDate.message}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className='text-xl font-bold'>Start Time:</label>
              <input className='text-xl ele' type="time" {...register("startTime", { required: "Please enter start time", validate: validateDateTime })} />
              {errors.startTime && <span className="error">{errors.startTime.message}</span>}
            </div>
            
            {/* Other fields */}
            
            <div className="form-group">
              <label className='text-xl font-bold'>End Date:</label>
              <input className='text-xl ele' type="date" {...register("endDate", { required: "Please enter end date" })} />
              {errors.endDate && <span className="error">{errors.endDate.message}</span>}
            </div>
            <div className="form-group">
              <label className='text-xl font-bold'>End Time:</label>
              <input className='text-xl ele' type="time" {...register("endTime", { required: "Please enter end time" })} />
              {errors.endTime && <span className="error">{errors.endTime.message}</span>}
            </div>
            <div className="form-group">
              <button className="button text-xl">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="iconWidget">
        <div class="templateContainer">
          <div class="iconSlideRow">
            <div class="iconSlideCol">
              <div class="ico">
                <svg width="49" height="49" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M61.9556 18.0301L45.0806 4.46078C38.9516 -0.468698 30.0518 -0.468698 23.9194 4.46078L7.04439 18.0301C3.04502 21.2478 0.75 26.0391 0.75 31.1712V51.4021C0.75 60.7006 8.32013 68.2637 17.625 68.2637H27.75V51.3988C27.75 47.6814 30.7774 44.663 34.5 44.663C38.2226 44.663 41.25 47.6848 41.25 51.3988V68.2637H51.375C60.6799 68.2637 68.25 60.7006 68.25 51.4021V31.1712C68.25 26.0391 65.955 21.2478 61.9556 18.0301ZM61.5 51.4021C61.5 56.9765 56.9572 61.511 51.375 61.511H48V51.3988C48 43.9607 41.9453 37.9103 34.5 37.9103C27.0547 37.9103 21 43.9607 21 51.3988V61.511H17.625C12.0427 61.511 7.5 56.9765 7.5 51.4021V31.1712C7.5 28.0953 8.87699 25.222 11.2732 23.2941L28.1482 9.72438C31.8304 6.7667 37.173 6.7667 40.8518 9.72438L57.7268 23.2941C60.1264 25.222 61.5034 28.0953 61.5034 31.1712V51.4021H61.5Z" fill="black"></path>
                </svg>
              </div>
              <b>Doorstep Delivery</b>
            </div>
            <div class="iconSlideCol">
              <div class="ico">
                <svg width="67" height="67" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.5 56C41.83 56 39.2199 55.2082 36.9998 53.7248C34.7797 52.2414 33.0494 50.133 32.0276 47.6662C31.0058 45.1994 30.7385 42.485 31.2594 39.8663C31.7803 37.2475 33.066 34.8421 34.9541 32.9541C36.8421 31.066 39.2475 29.7803 41.8663 29.2594C44.485 28.7385 47.1994 29.0058 49.6662 30.0276C52.133 31.0494 54.2414 32.7797 55.7248 34.9998C57.2082 37.2199 58 39.83 58 42.5C58 46.0804 56.5777 49.5142 54.0459 52.0459C51.5142 54.5777 48.0804 56 44.5 56ZM44.5 35.75C43.165 35.75 41.8599 36.1459 40.7499 36.8876C39.6399 37.6293 38.7747 38.6835 38.2638 39.9169C37.7529 41.1503 37.6192 42.5075 37.8797 43.8169C38.1401 45.1262 38.783 46.329 39.727 47.273C40.671 48.217 41.8738 48.8599 43.1831 49.1203C44.4925 49.3808 45.8497 49.2471 47.0831 48.7362C48.3165 48.2253 49.3707 47.3601 50.1124 46.2501C50.8541 45.1401 51.25 43.835 51.25 42.5C51.25 40.7098 50.5388 38.9929 49.273 37.727C48.0071 36.4612 46.2902 35.75 44.5 35.75ZM46.1875 76.25H42.8125C40.5747 76.25 38.4286 75.3611 36.8463 73.7787C35.2639 72.1964 34.375 70.0503 34.375 67.8125C34.3817 67.7346 34.363 67.6566 34.3216 67.5903C34.2802 67.5239 34.2184 67.4728 34.1455 67.4446C33.9801 67.3636 33.7878 67.5391 33.7878 67.5391C32.204 69.125 30.0564 70.0186 27.8152 70.0243C25.574 70.0299 23.4219 69.1473 21.8301 67.5695L19.4474 65.1834C18.6629 64.3983 18.0411 63.4661 17.6175 62.4403C17.1939 61.4145 16.9768 60.3152 16.9787 59.2054C16.9805 58.0956 17.2014 56.997 17.6285 55.9727C18.0556 54.9483 18.6805 54.0183 19.4676 53.2359C19.5242 53.1845 19.5617 53.1155 19.5739 53.0401C19.5862 52.9647 19.5725 52.8874 19.5351 52.8207C19.4968 52.763 19.4453 52.7151 19.3848 52.6811C19.3244 52.6471 19.2568 52.6278 19.1875 52.625C16.9497 52.625 14.8036 51.7361 13.2213 50.1537C11.6389 48.5714 10.75 46.4253 10.75 44.1875V40.8125C10.75 38.5747 11.6389 36.4286 13.2213 34.8463C14.8036 33.2639 16.9497 32.375 19.1875 32.375C19.2628 32.3791 19.3376 32.3607 19.4025 32.3223C19.4674 32.2838 19.5194 32.227 19.552 32.159C19.5769 32.1021 19.5831 32.0388 19.5698 31.9782C19.5564 31.9175 19.5242 31.8627 19.4777 31.8215C18.688 31.038 18.0604 30.1066 17.6309 29.0804C17.2014 28.0542 16.9784 26.9534 16.9747 25.841C16.9709 24.7285 17.1864 23.6262 17.609 22.5972C18.0316 21.5681 18.6528 20.6324 19.4372 19.8436L21.8268 17.4508C23.4121 15.8747 25.5566 14.9901 27.7921 14.9901C30.0275 14.9901 32.1721 15.8747 33.7574 17.4508C33.8038 17.5165 33.8721 17.5635 33.9501 17.5833C34.028 17.6031 34.1105 17.5944 34.1826 17.5588C34.375 17.4575 34.375 17.1875 34.375 17.1875C34.375 14.9497 35.2639 12.8036 36.8463 11.2213C38.4286 9.63895 40.5747 8.75 42.8125 8.75H46.1875C48.4253 8.75 50.5714 9.63895 52.1537 11.2213C53.7361 12.8036 54.625 14.9497 54.625 17.1875C54.625 17.1875 54.6081 17.525 54.7938 17.5925C54.8618 17.6138 54.9342 17.6173 55.0039 17.6025C55.0737 17.5877 55.1385 17.5552 55.192 17.5081C55.9743 16.7065 56.9092 16.0695 57.9415 15.6348C58.9739 15.2001 60.0827 14.9764 61.2029 14.9769C62.3115 14.973 63.4099 15.1893 64.4342 15.6134C65.4586 16.0375 66.3885 16.6609 67.1699 17.4474L69.5324 19.8099C71.1142 21.3921 72.0028 23.5379 72.0028 25.7752C72.0028 28.0125 71.1142 30.1582 69.5324 31.7405C69.4851 31.8114 69.2894 31.9565 69.367 32.159C69.3757 32.1963 69.3917 32.2315 69.4141 32.2626C69.4365 32.2937 69.4649 32.32 69.4975 32.3401C69.5301 32.3602 69.5664 32.3736 69.6043 32.3796C69.6421 32.3856 69.6808 32.384 69.718 32.375C70.8329 32.3666 71.9384 32.5783 72.9712 32.9982C74.004 33.4181 74.9437 34.0378 75.7364 34.8217C76.5292 35.6056 77.1593 36.5384 77.5906 37.5664C78.022 38.5945 78.246 39.6976 78.25 40.8125V44.1875C78.25 46.4253 77.3611 48.5714 75.7787 50.1537C74.1964 51.7361 72.0503 52.625 69.8125 52.625C69.61 52.625 69.4278 52.625 69.3636 52.7904C69.2995 52.9557 69.3332 53.0604 69.4986 53.1988C70.2935 53.9796 70.9259 54.9102 71.3592 55.9368C71.7925 56.9633 72.0181 58.0656 72.0232 59.1798C72.0282 60.2941 71.8125 61.3983 71.3884 62.4287C70.9644 63.4591 70.3404 64.3954 69.5526 65.1834L67.1901 67.5661C65.6048 69.1422 63.4602 70.0268 61.2248 70.0268C58.9894 70.0268 56.8448 69.1422 55.2595 67.5661C55.2595 67.5661 55.0705 67.3366 54.8815 67.4041C54.8142 67.4245 54.7549 67.4653 54.712 67.521C54.669 67.5767 54.6445 67.6444 54.6419 67.7146C54.6508 68.8312 54.4388 69.9385 54.018 70.9728C53.5973 72.007 52.9762 72.9479 52.1904 73.7412C51.4047 74.5345 50.4698 75.1646 49.4395 75.5951C48.4093 76.0257 47.3041 76.2483 46.1875 76.25ZM36.6396 61.1705L36.7881 61.2312C38.0664 61.7695 39.1587 62.671 39.9296 63.8241C40.7005 64.9771 41.1161 66.331 41.125 67.718C41.116 67.9465 41.1527 68.1745 41.2332 68.3886C41.3136 68.6027 41.436 68.7985 41.5933 68.9646C41.7505 69.1306 41.9394 69.2635 42.1488 69.3555C42.3582 69.4474 42.5838 69.4966 42.8125 69.5H46.1875C46.6351 69.5 47.0643 69.3222 47.3807 69.0057C47.6972 68.6893 47.875 68.2601 47.875 67.8125C47.8756 66.3959 48.2958 65.0113 49.0827 63.8333C49.8696 62.6554 50.9878 61.737 52.2963 61.1941C53.5786 60.6659 54.9884 60.5286 56.3486 60.7994C57.7087 61.0703 58.9584 61.7372 59.9406 62.7162C60.0952 62.8862 60.2823 63.0233 60.491 63.1194C60.6996 63.2155 60.9255 63.2685 61.1551 63.2755C61.3847 63.2824 61.6133 63.243 61.8274 63.1597C62.0414 63.0764 62.2365 62.9508 62.401 62.7905L64.7635 60.428C64.9206 60.2712 65.0453 60.085 65.1304 59.88C65.2155 59.675 65.2593 59.4552 65.2593 59.2333C65.2593 59.0113 65.2155 58.7915 65.1304 58.5865C65.0453 58.3815 64.9206 58.1953 64.7635 58.0385C63.7861 57.0555 63.1145 55.8104 62.83 54.4537C62.5455 53.097 62.6602 51.687 63.1604 50.3941C63.1806 50.3401 63.1975 50.2895 63.2211 50.2355L63.2414 50.1882C63.7734 48.9081 64.6737 47.8147 65.8279 47.0468C66.9822 46.279 68.3384 45.8711 69.7248 45.875C69.9528 45.8836 70.1803 45.8464 70.3938 45.7658C70.6073 45.6851 70.8025 45.5625 70.9679 45.4053C71.1334 45.248 71.2656 45.0593 71.357 44.8502C71.4484 44.641 71.497 44.4157 71.5 44.1875V40.8125C71.5 40.3649 71.3222 39.9357 71.0057 39.6193C70.6893 39.3028 70.2601 39.125 69.8125 39.125C68.4046 39.1408 67.0243 38.734 65.8499 37.9573C64.6755 37.1806 63.761 36.0696 63.2245 34.7679L63.1604 34.6126C62.6481 33.3391 62.5231 31.9427 62.8011 30.5984C63.0791 29.2542 63.7476 28.0219 64.723 27.056C64.8916 26.9008 65.0273 26.7134 65.1222 26.5048C65.2171 26.2963 65.2693 26.0708 65.2756 25.8418C65.2819 25.6127 65.2422 25.3847 65.1589 25.1713C65.0756 24.9578 64.9503 24.7632 64.7905 24.599L62.428 22.2365C62.271 22.0799 62.0847 21.9558 61.8797 21.8712C61.6747 21.7867 61.455 21.7434 61.2333 21.7437C61.0113 21.7438 60.7915 21.7876 60.5864 21.8728C60.3814 21.9579 60.1952 22.0827 60.0385 22.2399C59.0406 23.233 57.7727 23.911 56.3926 24.1894C55.0125 24.4678 53.5809 24.3344 52.276 23.8059C50.9722 23.2841 49.8554 22.3824 49.0706 21.2178C48.2858 20.0532 47.8692 18.6796 47.875 17.2753C47.8836 17.0472 47.8464 16.8197 47.7658 16.6062C47.6851 16.3927 47.5625 16.1975 47.4053 16.0321C47.248 15.8666 47.0593 15.7344 46.8502 15.643C46.641 15.5516 46.4157 15.503 46.1875 15.5H42.8125C42.3649 15.5 41.9357 15.6778 41.6193 15.9943C41.3028 16.3107 41.125 16.7399 41.125 17.1875C41.1352 18.5896 40.7293 19.9633 39.9586 21.1346C39.1879 22.306 38.0871 23.2225 36.7954 23.768C35.5037 24.3136 34.0792 24.4638 32.7022 24.1996C31.3251 23.9354 30.0574 23.2686 29.0594 22.2838C28.9053 22.1154 28.719 21.9797 28.5116 21.8846C28.3041 21.7895 28.0797 21.7369 27.8516 21.73C27.6235 21.7231 27.3963 21.762 27.1835 21.8443C26.9707 21.9267 26.7765 22.0508 26.6125 22.2095L24.2095 24.6125C23.8931 24.929 23.7154 25.3581 23.7154 25.8056C23.7154 26.253 23.8931 26.6822 24.2095 26.9986C25.2114 27.9795 25.8981 29.2368 26.1819 30.6099C26.4657 31.983 26.3336 33.4095 25.8025 34.7071C25.713 34.9311 25.5998 35.145 25.465 35.345C24.8682 36.4717 23.9793 37.4171 22.8914 38.0822C21.8036 38.7472 20.5569 39.1074 19.282 39.125C19.0535 39.116 18.8255 39.1527 18.6114 39.2332C18.3973 39.3136 18.2015 39.436 18.0354 39.5933C17.8694 39.7505 17.7365 39.9394 17.6445 40.1488C17.5526 40.3582 17.5034 40.5838 17.5 40.8125V44.1875C17.5 44.6351 17.6778 45.0643 17.9943 45.3807C18.3107 45.6972 18.7399 45.875 19.1875 45.875C20.5836 45.859 21.9529 46.2591 23.1208 47.0242C24.2887 47.7894 25.2023 48.885 25.7451 50.1714L25.7654 50.2186C25.7957 50.2895 25.8228 50.357 25.8464 50.4313C26.3395 51.7074 26.4528 53.099 26.1725 54.4381C25.8923 55.7772 25.2304 57.0065 24.2669 57.9778C24.0985 58.1368 23.964 58.3282 23.8712 58.5404C23.7784 58.7527 23.7293 58.9814 23.7269 59.213C23.7249 59.4355 23.7675 59.6561 23.8521 59.8619C23.9367 60.0676 24.0617 60.2544 24.2196 60.4111L26.6024 62.7939C26.9188 63.1102 27.348 63.288 27.7954 63.288C28.2429 63.288 28.672 63.1102 28.9885 62.7939C29.9619 61.7994 31.2075 61.1148 32.5687 60.8259C33.93 60.5371 35.3463 60.657 36.6396 61.1705Z" fill="black"></path>
                  <path d="M4 83L83 4" stroke="black" stroke-width="7" stroke-linecap="round"></path>
                </svg>
              </div>
              <b>Zero Maintenance</b>
            </div>
            <div class="iconSlideCol">
              <div class="ico">
                <svg width="49" height="49" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.5 0.75C15.8903 0.75 0.75 15.8903 0.75 34.5C0.75 53.1097 15.8903 68.25 34.5 68.25C53.1097 68.25 68.25 53.1097 68.25 34.5C68.25 15.8903 53.1097 0.75 34.5 0.75ZM34.5 61.5C19.6129 61.5 7.5 49.3871 7.5 34.5C7.5 19.6129 19.6129 7.5 34.5 7.5C49.3871 7.5 61.5 19.6129 61.5 34.5C61.5 49.3871 49.3871 61.5 34.5 61.5ZM45.1008 15.7183L31.4152 19.1403C25.3571 20.6523 20.6557 25.3606 19.137 31.4187L15.7147 45.1046C15.1342 47.4266 15.7991 49.8225 17.4934 51.5167C18.7826 52.8026 20.4803 53.4943 22.2386 53.4943C22.7921 53.4943 23.349 53.4267 23.9025 53.285L37.5882 49.863C43.6463 48.351 48.3477 43.6427 49.8664 37.5845L53.2886 23.8992C53.8691 21.5772 53.2043 19.1808 51.51 17.4866C49.8158 15.7991 47.4195 15.1378 45.1008 15.7183ZM46.7344 22.2656L43.3121 35.9477C42.4008 39.5826 39.5828 42.4077 35.9445 43.319L22.2588 46.7377L25.6811 33.0556C26.5924 29.4207 29.4105 26.5955 33.0488 25.6843L46.7344 22.2656ZM34.5 29.4375C37.2945 29.4375 39.5625 31.7055 39.5625 34.5C39.5625 37.2945 37.2945 39.5625 34.5 39.5625C31.7055 39.5625 29.4375 37.2945 29.4375 34.5C29.4375 31.7055 31.7055 29.4375 34.5 29.4375Z" fill="black"></path>
                </svg>
              </div>
              <b>Multiple Pickup</b>
            </div>
            <div class="iconSlideCol">
              <div class="ico">
                <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64.1897 5.82162C61.1557 3.97321 57.459 3.83285 54.302 5.45919L46.7477 9.33714C45.7979 9.82572 44.7045 9.82572 43.7547 9.33714L29.3671 1.95035C27.9424 1.21918 26.381 0.857021 24.8161 0.846771C24.7922 0.846771 24.7751 0.833008 24.7512 0.833008C24.7272 0.833008 24.7102 0.846771 24.6863 0.846771C23.1215 0.857021 21.56 1.21918 20.1319 1.95035L8.35464 8.00125C3.71481 10.3827 0.831055 15.1558 0.831055 20.4551V55.2261C0.831055 58.9263 2.69316 62.2716 5.81258 64.1781C8.84658 66.0266 12.54 66.1665 15.7005 64.5402L23.2547 60.6622C24.2045 60.1736 25.2979 60.1736 26.2477 60.6622L40.6353 68.0494C42.0669 68.784 43.6385 69.1528 45.2102 69.1597C45.2239 69.1597 45.2375 69.1663 45.2512 69.1663C45.2648 69.1663 45.2785 69.1597 45.2921 69.1597C46.8638 69.1528 48.4355 68.784 49.8671 68.0494L61.6443 61.9985C66.2842 59.6171 69.1678 54.8439 69.1678 49.5447V14.7733C69.1712 11.073 67.3092 7.72813 64.1897 5.82162ZM12.5844 58.4551C11.105 59.2136 9.8511 58.6261 9.3796 58.3391C8.3136 57.6865 7.67127 56.5212 7.67127 55.2194V20.448C7.67127 17.7215 9.13015 15.2786 11.4808 14.0759L21.3379 9.01265V54.1333C20.9382 54.2768 20.5213 54.3789 20.1386 54.5771L12.5844 58.4551ZM29.3706 54.5771C28.9879 54.3789 28.571 54.2803 28.1713 54.1333V9.00932L40.6386 15.4118C41.0213 15.61 41.4382 15.7091 41.8379 15.856V60.98L29.3706 54.5771ZM62.3379 49.5447C62.3379 52.2712 60.8791 54.7141 58.5284 55.9167L48.6713 60.98V15.856C49.071 15.7125 49.4879 15.61 49.8706 15.4118L57.4248 11.5343C58.9008 10.7724 60.1581 11.3632 60.6296 11.6502C61.6956 12.3028 62.3379 13.4678 62.3379 14.7695V49.5447Z" fill="black"></path>
                </svg>
              </div>
              <b>Road side Assistance</b>
            </div>
            <div class="iconSlideCol">
              <div class="ico">
                <svg width="49" height="49" viewBox="0 0 61 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.5631 14.4255C48.2154 10.9763 35.6234 4.46916 32.9538 1.75566C32.326 1.12116 31.4687 0.75675 30.5744 0.75C29.6496 0.77025 28.816 1.09413 28.1815 1.72188C24.9584 4.89775 15.1573 11.263 2.58209 14.8169C1.12747 15.2253 0.125 16.5551 0.125 18.0638C0.125 46.2754 4.53279 60.9635 29.5753 68.1219C29.879 68.2062 30.193 68.25 30.5035 68.25C30.814 68.25 31.1278 68.2062 31.4315 68.1219C56.4673 60.9669 60.875 46.137 60.875 17.625C60.8716 16.1704 59.9435 14.8845 58.5631 14.4255ZM30.5 61.3583C11.114 55.5432 7.11805 45.3137 6.8818 20.5715C17.4624 17.2202 25.9878 12.171 30.625 8.51926C35.917 12.2453 46.079 17.0951 54.1081 20.0178C53.8887 45.1649 49.9197 55.5297 30.5 61.3583Z" fill="black"></path>
                </svg>
              </div>
              <b>Free Insurance</b>
            </div>
          </div>
        </div>

      </div>
      <div className="templateContainer">
        <h2 className="textLeft text-3xl font-bold">Featured Vehicles</h2>


        <div className="featuredRow">
          <div className="featured-vehicle-list-item p-8">
            <div className="featuredList">
              <div className="vertically-centered featuredList-img">
                <img src="https://evmwheels.com/front-theme/images/tabImg1.png" alt="" />
              </div>
            </div>
            <div className="p-10">
              <p>Skoda</p>
              <h2>Slavia</h2>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          <div className="featured-vehicle-list-item p-10">
            <div className="featuredList">
              <div className="vertically-centered featuredList-img">
                <img src="https://evmwheels.com/front-theme/images/HECTOR PLUS-D-MT.png" alt="MG Hector Plus rent a car" />
              </div>
            </div>
            <div className="p-10">
              <p>MG</p>
              <h2>Hector</h2>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          <div className="featured-vehicle-list-item p-10">
            <div className="featuredList">
              <div className="vertically-centered featuredList-img">
                <img src="https://evmwheels.com/front-theme/images/tabImg3.png" alt="Volkswagen Polo rent a car" />
              </div>
            </div>
            <div className="p-10">
              <p>Volkswagen</p>
              <h2>Polo</h2>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          <div className="featured-vehicle-list-item p-10">
            <div className="featuredList">
              <div className="vertically-centered featuredList-img">
                <img src="https://evmwheels.com/front-theme/images/tabImg4.png" alt="Toyota Innova rent a car" />
              </div>
            </div>
            <div className="p-10">
              <p>Toyota</p>
              <h2>Innova</h2>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <section class="howitWork">
        <div class="templateContainer">
          <h2>How it works</h2>
          <div class="templateRow">
            <div class="contentWidget">
              <div class="contentList">
                <div class="textCol">
                  <div class="cTitle">
                    <span class="slNo">1.</span>
                    <h3 className='text-3xl font-bold'>Search &amp; Book Your Preferred Vehicle</h3>
                  </div>
                  <p>Chooose your desired vehicle from
                    our various available options.</p>
                </div>
              </div>
              <div class="contentList">
                <div class="textCol">
                  <div class="cTitle">
                    <span class="slNo">2.</span>
                    <h3 className='text-3xl font-bold'>Pick Up your Vehicle</h3>
                  </div>
                  <p>Take delivery of your car from any
                    of our various pickup points or
                    deliver it straight to your doorstep
                    by our trusted associates.</p>
                </div>
              </div>
              <div class="contentList">
                <div class="textCol">
                  <div class="cTitle">
                    <span class="slNo">3.</span>
                    <h3 className='text-3xl font-bold'> Drive your Vehicle</h3>
                  </div>
                  <p>Take your car for a spin and start
                    your road trip with your loved ones.</p>
                </div>
              </div>
              <div class="contentList">
                <div class="textCol">
                  <div class="cTitle">
                    <span class="slNo">4.</span>
                    <h3 className='text-3xl font-bold'>Return your Vehicle</h3>
                  </div>
                  <p>Get the vehicle back to your
                    preferred return location, and we
                    will take it from there.</p>
                </div>
              </div>
            </div>
            <div class="imageWidget">
              <div class="templateContainer">
                <div class="templateRow">
                  <div>
                    <img src="https://evmwheels.com/front-theme/images/Free_MacBook_Pro_2 1.png" alt="" />
                  </div>
                  <img src="https://evmwheels.com/front-theme/images/Free_Iphone_14_Pro_Mockup_4 1.png" alt="" />
                </div>
              </div>

            </div>
          </div>
        </div></section>
      <Footer />
    </>
  );
};

export default Home;
