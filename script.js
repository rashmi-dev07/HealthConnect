function openModal(id){ document.getElementById(id).style.display='flex'; }
    function closeModal(id){ document.getElementById(id).style.display='none'; }
    function openForgotPassword(){ closeModal('loginModal'); openModal('forgotModal'); }
    function openRegister(){ closeModal('loginModal'); openModal('registerModal'); }
    function submitLogin(){ alert('Login successful!'); closeModal('loginModal'); }
    function getOtp(){
      document.getElementById('otpSection').classList.remove('hidden');
      document.getElementById('verifyBtn').classList.remove('hidden');
      alert('OTP sent successfully!');
    }
    function verifyOtp(){ closeModal('forgotModal'); openModal('resetModal'); }
    function confirmReset(){
      const np=document.getElementById('newPassword').value;
      const cp=document.getElementById('confirmPassword').value;
      if(np && np===cp){
        alert('Password reset successfully!');
        closeModal('resetModal');
        openModal('loginModal');
      } else alert('Passwords do not match!');
    }
    function registerUser() {
  const name = document.getElementById('regName').value.trim();
  const mobile = document.getElementById('regmobilenumber').value.trim();
  const aadhaar = document.getElementById('regAadhaar').value.trim();
  const passFields = document.querySelectorAll('#registerModal input[type="password"]');
  const pass = passFields[0].value.trim();
  const confirmPass = passFields[1].value.trim();
  // Password match check
  if (pass !== confirmPass) {
    alert('Password does not match!!');
    passFields[1].focus();
    return;
  }
  if (name && mobile && aadhaar && pass) {
    alert('Registration successful!');
    closeModal('registerModal');
    openModal('loginModal');
  } else {
    alert('Please fill all fields!');
  }
}
    // ✅ UPDATED REGISTER FLOW
    function openRegister() {
      closeModal('loginModal');
      openModal('registerMobileModal');
    }
    function getMobileOtp() {
      const mobile = document.getElementById('mobileNumber').value.trim();
      if (mobile.length === 10) {
        document.getElementById('mobileOtpSection').classList.remove('hidden');
        document.getElementById('verifyMobileOtpBtn').classList.remove('hidden');
        alert('OTP sent successfully to ' + mobile);
      } else {
        alert('Please enter a valid 10-digit mobile number!');
      }
    }
    function verifyMobileOtp() {
      const otpInputs = document.querySelectorAll('#mobileOtpSection input');
      const otp = Array.from(otpInputs).map(i => i.value).join('');
      if (otp.length === 4) {
        alert('Mobile number verified successfully!');
        closeModal('registerMobileModal');
        openModal('registerModal');
      } else {
        alert('Please enter all 4 digits of OTP!');
      }
    }
    // ✅ OTP Auto-Move Cursor (for new mobile OTP inputs)
    document.addEventListener('DOMContentLoaded', () => {
      const mobileOtpInputs = document.querySelectorAll('#mobileOtpSection input');
      mobileOtpInputs.forEach((input, index) => {
        input.addEventListener('input', e => {
          if (e.target.value && index < mobileOtpInputs.length - 1) {
            mobileOtpInputs[index + 1].focus();
          }
        });
        input.addEventListener('keydown', e => {
          if (e.key === 'Backspace' && !e.target.value && index > 0) {
            mobileOtpInputs[index - 1].focus();
          }
        });
      });
    });
    // ✅ OTP Auto-Move Cursor Feature
    document.addEventListener('DOMContentLoaded', () => {
      const otpInputs = document.querySelectorAll('#otpSection input');
      
      otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
          const value = e.target.value;
          if (value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
          }
        });
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !e.target.value && index > 0) {
            otpInputs[index - 1].focus();
          }
        });
      });
    });
    function openUserLogin() {
  closeModal('loginTypeModal');
  openModal('loginModal'); // opens your existing login/register modal
}
function openDoctorLogin() {
  closeModal('loginTypeModal');
  openModal('doctorLoginModal'); // this will be your doctor modal
}
function submitDoctorLogin() {
  alert('Doctor login successful!');
  closeModal('doctorLoginModal');
}
function openDoctorRegister() {
  closeModal('doctorLoginModal');
  openModal('doctorRegisterModal');
}
function registerDoctor() {
  alert('Doctor registered successfully!');
  closeModal('doctorRegisterModal');
  openModal('doctorLoginModal');
}
function openDoctorLogin() {
  closeModal('loginTypeModal');
  openModal('doctorLoginModal');
}
function submitDoctorLogin() {
  const id = document.getElementById('doctorId').value.trim();
  const pass = document.getElementById('doctorPassword').value.trim(); 
  if (id && pass) {
    alert('Doctor login successful!');
    closeModal('doctorLoginModal');
  } else {
    alert('Please enter both Doctor ID and Password!');
  }
}
function openDoctorRegister() {
  closeModal('doctorLoginModal');
  openModal('doctorRegisterModal');
}
function registerDoctor() {
  const id = document.getElementById('regDoctorId').value.trim();
  const name = document.getElementById('regDoctorName').value.trim();
  const passFields = document.querySelectorAll('#doctorRegisterModal input[type="password"]');
  const pass = passFields[0].value.trim();
  const confirmPass = passFields[1].value.trim();
  // Password match check
  if (pass !== confirmPass) {
    alert('Password does not match!!');
    passFields[1].focus();
    return;
  }
  if (id && name && pass) {
    alert('Doctor registered successfully!');
    closeModal('doctorRegisterModal');
    openModal('doctorLoginModal');
  } else {
    alert('Please fill all fields!');
  }
}
// Auto-move cursor from Aadhaar to Password in User Login modal
 document.addEventListener('DOMContentLoaded', () => {
  const aadhaarInput = document.getElementById('userAadhaar');
  const passwordInput = document.getElementById('userPassword');
  if (aadhaarInput && passwordInput) {
    aadhaarInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        passwordInput.focus();
      }
    });
  }
});
// Auto-move cursor from doctorId to Password in doctor Login modal
 document.addEventListener('DOMContentLoaded', () => {
  const doctorInput = document.getElementById('doctorId');
  const passwordInput = document.getElementById('doctorPassword');
  if (doctorInput && passwordInput) {
    doctorInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        passwordInput.focus();
      }
    });
  }
});
// Auto-move cursor to next field in user Register modal
document.addEventListener('DOMContentLoaded', () => {
  const registerFields = [
    document.getElementById('regName'),
    document.getElementById('regmobilenumber'),
    document.getElementById('regAadhaar'),
    document.getElementById('regemail'),
    document.getElementById('regPassword'), // First password box
    document.querySelectorAll('#registerModal input[type="password"]')[1] // Second password box (confirm)
  ];
  registerFields.forEach((field, index) => {
    if (field && index < registerFields.length - 1) {
      field.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          registerFields[index + 1].focus();
        }
      });
    }
  });
});
// Auto-move cursor to next field in Doctor Registration modal
document.addEventListener('DOMContentLoaded', () => {
  const doctorFields = [
    document.getElementById('regDoctorName'),
    document.getElementById('regDoctorId'),
    document.getElementById('regDoctorMobilenumber'),
    document.getElementById('regDoctorEmail'),
    document.querySelectorAll('#doctorRegisterModal input[type="password"]')[0], // Create Password
    document.querySelectorAll('#doctorRegisterModal input[type="password"]')[1]  // Confirm Password
  ];
  doctorFields.forEach((field, index) => {
    if (field && index < doctorFields.length - 1) {
      field.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          doctorFields[index + 1].focus();
        }
      });
    }
  });
});
// ✅ Search Doctors & Hospitals
function searchDoctors() {
  const location = document.querySelector('.search-bar input[placeholder="Enter Location"]').value.trim().toLowerCase();
  const speciality = document.querySelector('.search-bar input[placeholder="Specialty / Doctor"]').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // clear old results
  // Dummy database
  const data = [
    { name: "Dr. Sadiq Saleem", speciality: "general", location: "bhubaneswar", hospital: "Apollo Hospital", img: "https://www.sakraworldhospital.com/assets/doctor-images/767x863-sadiq-saleem-sikora.webp" },
    { name: "Dr. Jayanti Khura", speciality: "general", location: "bhubaneswar", hospital: "Aiims Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtavS7yxPms7HXmQRcnPPwsjmwCF3Zz1i4gDWh0LzkZ9WHiPh6vAxUW7tmx0vgRsZWv0&usqp=CAU" },
    { name: "Dr. Sumita Ray", speciality: "general", location: "bhubaneswar", hospital: "Sum Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZ7Qgw9bPlTR0iqY3UUvW7GIH1dmea-codw&s" },
    { name: "Dr. jatashankar Mohapatra", speciality: "general", location: "bhubaneswar", hospital: "Kalinga Hospital", img: "https://www.carehospitals.com/assets/images/main/dr-jatashankar-mohapatra.png" },
    { name: "Dr. Reetu Mishra", speciality: "cardiologist", location: "bhubaneswar", hospital: "Sum Hospital", img: "https://www.carehospitals.com/assets/images/main/dr-reetu-mishra.png" },
    { name: "Dr. Tanmaya padhy", speciality: "cardiologist", location: "bhubaneswar", hospital: "AIMS Hospital", img: "https://sunshineodisha.com/images/doctors/dr-tanmaya-padhy.webp" },
    { name: "Dr. Alakta Das", speciality: "cardiologist", location: "bhubaneswar", hospital: "kalinga Hospital", img: "https://www.carehospitals.com/assets/images/main/dr-alakta-das.png" },
    { name: "Dr. B.K Mohapatra", speciality: "cardiologist", location: "bhubaneswar", hospital: "City Hospital", img: "https://www.carehospitals.com/assets/images/main/dr-bikram-mohapatra.png" },
    { name: "Dr. Nandan Kumar", speciality: "neurologist", location: "puri", hospital: "Sun Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHG_te-F6xHKNTFbCkPR8066TwKmxdCrCXA&s" },
    { name: "Dr. Richa Singh", speciality: "neurologist", location: "puri", hospital: "L.N Hospital", img: "https://cdn.hexahealth.com/Image/webp/120x120/9eae34c5-1cb8-4203-863e-b96ea6efec52.webp" },
    { name: "Dr. Swagat Mohanty", speciality: "neurologist", location: "puri", hospital: "Licon Hospital", img: "https://content.jdmagicbox.com/v2/comp/cuttack/k5/0671px671.x671.230503234155.l9k5/catalogue/dr-bijay-kumar-mohanty-cuttack-neurologists-m9y2oulrff.jpg" },
    { name: "Dr. Anumeha Mishra", speciality: "neurologist", location: "puri", hospital: "District Headquater Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eC1mwNl7D90xbCIN2qOb_Juy32EZySPycc3FHswgPTSmREUt5qpfivb_wfPFSBAvToU&usqp=CAU" },
    { name: "Dr.Gobinda nayak", speciality: "orthopedic", location: "cuttack", hospital: "Scb Hospital", img: "https://images.apollo247.in/doctors/-1734964364902.png?tr=q-80,f-auto,w-100,dpr-2.5,c-at_max%20250w" },
    { name: "Dr.Nandini behera", speciality: "orthopedic", location: "cuttack", hospital: "Shreeja Hospital", img: "https://www.greaternoidawest.in/wp-content/uploads/2022/09/Dr-Shikha-Khare-Dermatologist.jpg" },
    { name: "Dr.sradha sahoo ", speciality: "orthopedic", location: "cuttack", hospital: "Aswin Hospital", img: "https://geimshospital.com/wp-content/uploads/2025/03/Dr.-Naini-Puri-Grey.webp" },
    { name: "Dr.Pankaj Panda ", speciality: "orthopedic", location: "cuttack", hospital: "Blue line Hospital", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEBr4lZaOHz2wmkGuA6JsrLecEQiRliWHArkEX2SuNO951fRmNAig34TgRDtu4edLqaQ&usqp=CAU" },
    { name: "kailash sahoo", speciality: "multispeciality", location: "jagatsinghpur", hospital: "Govt Hospital", img: "https://content.jdmagicbox.com/v2/comp/gurgaon/e4/011pxx11.xx11.230103192153.e7e4/catalogue/dr-amarender-singh-puri-islampur-colony-gurgaon-gastroenterologists-2k6m1s4ngs-250.jpg" },
  ];
  // Handle Book Now click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('book-now-btn')) {
    window.location.href = 'appointment.html'; // go to your new page
  }
});
  // Filter results
  const filtered = data.filter(item =>
    (item.location.includes(location) || location === "") &&
    (item.speciality.includes(speciality) || item.name.toLowerCase().includes(speciality) || speciality === "")
  );
  // Show the results section
  const section = document.getElementById('search-results');
  section.style.display = 'block';
  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p style='font-size:18px;'>No results found. Try a different location or specialty.</p>";
    return;
  }
  // Display results dynamically
  filtered.forEach(result => {
    const card = document.createElement('div');
    card.style.width = "220px";
    card.style.background = "white";
    card.style.borderRadius = "10px";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    card.style.padding = "15px";
    card.style.textAlign = "center";
    card.innerHTML = `
      <img src="${result.img}" alt="Doctor/Hospital" style="width:100%; border-radius:10px; margin-bottom:10px;">
      <h3 style="margin-bottom:5px;">${result.name}</h3>
      <p style="color:#555;">${result.speciality}</p>
      <p style="color:#777;">📍 ${result.location.charAt(0).toUpperCase() + result.location.slice(1)}</p>
      <p style="font-weight:600; color:#2E86DE;">🏥 ${result.hospital}</p>
      <button class="book-now-btn" style="margin-top:10px; background-color:#2E86DE; color:white; padding:8px 15px; border:none; border-radius:5px; cursor:pointer;">Book Now</button>
    `;
    resultsContainer.appendChild(card);
  });
}
// === SLIDE-IN MENU LOGIC ===
let isUserLoggedIn = false; // change to true after login
const menu = document.getElementById("sideMenu");
// Open or close the menu
function toggleMenu() {
  menu.classList.toggle("open");
}
// Detect click outside the menu → close it
document.addEventListener("click", function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnMenuIcon = event.target.classList.contains("menu-icon");
  // If click is outside the menu & not on the menu icon → close it
  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    menu.classList.remove("open");
  }
});
// Example: when user logs in
function submitLogin() {
  alert("Login successful!");
  isUserLoggedIn = true;
  closeModal("loginModal");
  updateMenu();
}
// Example: when user logs out
function logoutUser() {
  alert("You have logged out!");
  isUserLoggedIn = false;
  updateMenu();
  menu.classList.remove("open"); // close menu after logout
}
// Show/hide Logout link dynamically
function updateMenu() {
  const logoutLink = document.getElementById("logoutLink");
  if (isUserLoggedIn) {
    logoutLink.style.display = "block";
    logoutLink.onclick = logoutUser;
  } else {
    logoutLink.style.display = "none";
  }
}
  // Redirect to appointment form page
  document.querySelectorAll('.book-now-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = "appointment.html";
    });
  });
  function goToEmergency() {
    window.location.href = "emergency.html";
  }
  
  function goToBooking() {
    window.location.href = "appointment.html";
  }