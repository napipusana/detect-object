<template>
<div>
  <section>
    <div class="back-img"></div>
    <div class="header">
      <h1>Pipusana Kumvongdee</h1>
      <p>I am a frontend developer</p>
    </div>
    <!-- <div class="main">
      <section>
        <h2>Header Example 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius vel pharetra vel turpis nunc. Sed risus pretium quam vulputate. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Sapien nec sagittis aliquam malesuada bibendum. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Bibendum ut tristique et egestas quis. Suspendisse in est ante in nibh mauris. Tortor consequat id porta nibh. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultrices tincidunt arcu non sodales neque sodales. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Pharetra massa massa ultricies mi quis hendrerit dolor. Tellus orci ac auctor augue mauris augue neque gravida in. Morbi tristique senectus et netus et malesuada. Pretium quam vulputate dignissim suspendisse in est ante. Sagittis orci a scelerisque purus semper eget duis at tellus. Non curabitur gravida arcu ac tortor dignissim.</p>
      </section>
      <section>
        <h2>Header Example 2</h2>
        <p>Tortor at risus viverra adipiscing at in. In metus vulputate eu scelerisque felis imperdiet proin. Donec pretium vulputate sapien nec sagittis aliquam. Morbi non arcu risus quis varius quam quisque id diam. Arcu ac tortor dignissim convallis aenean et tortor at. Cras semper auctor neque vitae tempus. Sed libero enim sed faucibus turpis in eu mi. Fermentum dui faucibus in ornare quam. Ultricies integer quis auctor elit sed. Urna nunc id cursus metus aliquam eleifend mi. Fringilla phasellus faucibus scelerisque eleifend donec pretium. In nibh mauris cursus mattis. Dignissim sodales ut eu sem integer vitae justo eget magna.</p>
      </section>
    </div> -->
    <!-- =================================================================== -->
    <div class="sub-container">
      <section>
        <div class="container" id="content">
          <div class="row">
            <div class="col s12 m12 l12">
              <ul class="timeline">
                <li class="event">
                  <h3>Siam Cement Group (SCG) in Zero to one, Team ROOTS <span class=dot>&#9864; </span><span class=sub-text>August 2019 - Present</span> </h3>
                  <p>Software Developer (Front End)</p>
                  <ul>
                    <span class=dot>&#9864; </span> Front End : HTML, CSS, Vue.js, Bootstrap, Bootstrap-Vue
                  </ul>
                  <ul>
                    <span class=dot>&#9864; </span> Tools : Visual Studio Code
                  </ul>
                </li>
                <li class="event">
                  <h3>Thanachat Bank (Onsite from MFEC Public Company Limited) <span class=dot>&#9864; </span><span class=sub-text>November 2018 – July 2019</span></h3> 
                  <p>
                    Project Web
                  </p>
                  <ul>
                    <span class=dot>&#9864; </span> Back End : Stored procedure
                  </ul>
                  <ul>
                    <span class=dot>&#9864; </span> Tools : k2
                  </ul>
                </li>
                <li class="event">
                  <h3>MFEC Public Company Limited <span class=dot>&#9864; </span><span class=sub-text>June 2018 – October 2018</span></h3>
                  <p>Project MVC and Web Form</p>
                  <ul>
                    <span class=dot>&#9864; </span> BackEnd:c#
                  </ul>
                  <ul>
                    <span class=dot>&#9864; </span> Front End : HTML, CSS, Vue.js, jquery, Bootstrap, Buefy
                  </ul>
                  <ul>
                    <span class=dot>&#9864; </span> Tools : Visual Studio, Visual Studio Code
                  </ul>
                </li>
                <li class="event">
                  <h3>KASIKORN Business-Technology Group (KBTG) <span class=dot>&#9864; </span><span class=sub-text>May 2017 – July 2017</span></h3>
                  <p>Summer Internship</p>
                  <ul>
                    <span class=dot>&#9864; </span> Created web login pages, using HTML, CSS, JavaScript, Bootstrap, PHP
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- <div id="test" ref="test" class="pt-5 bg-red">
      <b-img :src="homeTowns" fluid alt="Responsive image" />
    </div>
    <section class="service-section service-bg">
      <div class="text-center">
        <p class="section-title">
          OUR SERVICE
        </p>
        <hr class="hr-style">
        <div class="clearfix" />
        <p>
          B2B Purchasing Platform
        </p>
        <b-img :src="FlowImg" style="width: 80%;height: auto" />
      </div>
    </section> -->
<!--  =================================================================== -->
    <!-- <div class="back-img foot"></div>
    <div class="footer bg-dark text-white-50 text-center p-3">
      &copy; 2020 <a class="text-white-50" href="javascript:;">GitHub</a> | <a class="text-white-50" href="javascript:;">Facebook</a>
    </div> -->
    
  </section>
  
  <!-- <section>
    <header class="text-white">
        <h1>Pipusana Kumvongdee</h1>
        <p>Pure CSS // No JavaScript !</p>
    </header>
  </section> -->
</div>
</template>

<style>
/* body {
  padding: 1rem;
} */
</style>

<script>
// import { validationMixin } from 'vuelidate'
// import { required, minLength } from 'vuelidate/lib/validators'

export default {
  // mixins: [validationMixin],
  data() {
    return {
      foods: [
        { value: null, text: 'Choose...' },
        { value: 'apple', text: 'Apple' },
        { value: 'orange', text: 'Orange' }
      ],
      form: {
        name: null,
        food: null
      }
    }
  },
  methods: {

  }
}
</script>

<style>
/* html {
  font-family: 'Roboto', san-serif;
} */

body {
  position: relative;
}

.back-img {
  display: block;
  /* background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.50)),url("https://images.pexels.com/photos/2929243/pexels-photo-2929243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); */
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.50)),url("https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  /* background-position: center top; */
}

.header {
  color: #fafafa;
  position: absolute;
  padding: 8rem 0;
  text-align: center;
  top: 30vh;
  width: 100%;
}
.header h1 {
  font-size: 3rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
}

.main {
  margin: auto;
  max-width: 800px;
  padding: 5rem;
}
.main section {
  padding: 3rem;
}

.footer {
  padding: 1rem 0;
  text-align: center;
  width: 100%;
}

.foot {
  height: 30vh;
}
/* ================================================================= */
/* .bg {
  background: repeating-linear-gradient(
    45deg,
    #f0f6ff 0,
    #f0f6ff 10px,
    #e9f2ff 10px,
    #e9f2ff 20px
  );
} */

.sub-container
{
  margin: auto;
}

#content {
  /* margin-top: 50px; */
  text-align: center;
  /* padding-right: 60px; */
  max-width:90%;
}

section.timeline-outer {
  width: 80%;
  margin: 0 auto;
  min-width: 100vw;
	height: 100%;
	scroll-snap-align: start;
  padding-left:50px;
}

h1.header {
  font-size: 50px;
  line-height: 70px;
}

.dot
{
  font-size:20px;
}

.sub-text
{
  font-size:15px;
}

/* Timeline */

.timeline {
  border-left: 2px solid #000;
  
  /* color: #fff; */
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  padding: 20px;
  list-style: none;
  text-align: left;
}

.timeline h1,
.timeline h2,
.timeline h3 {
  font-size: 1.4em;
}

.timeline .event {

  padding-left:20px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}


.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:after {
  box-shadow: 0 0 0 2px #fff;
  left: -50px;
  background-color: black;
  background-image: url('https://rajanlabs.000webhostapp.com/assets/work.png');
  background-size:30px 30px;
  background-repeat:no-repeat;
  background-position: center;
  border-radius: 50%;
  height: 51px;
  width: 51px;
  content: "";
  top: 5px;
}
/**/
/*——————————————
Responsive Stuff
———————————————*/

@media (max-width: 945px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
  section.lab h3.card-title {
    padding: 5px;
    font-size: 16px
  }
}

@media (max-width: 768px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }

  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
  .timeline {
    margin: 0 auto;
  }
}
/*——————————————
others
———————————————*/

a.portfolio-link {
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>
