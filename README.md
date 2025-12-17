##  **Screenshot / Logo**

![App Screenshot](public/images/Screenshot.png)
![Logo](public/images/logo.png)

---

##  **App Name: Healthcare Hub**

**Healthcare Hub** is a medical appointment management app that allows users to create, view, edit, and delete their upcoming appointments.  
It was built to simplify the process of tracking medical visits and ensure patients never miss important checkups.

This app was inspired by the need for a clean, beginner-friendly interface that supports basic CRUD operations while respecting user privacy and access control.

---

## **Getting Started**

-  [Live App on Render](https://calendly.com/)

### App Idea

**HealthCare Hub** is a medical clinic management application where patients can book appointments. The app includes authentication, authorization, and full CRUD functionality using Node, Express, MongoDB, and EJS.

### User Stories

#### Patients
- **As a patient, I want to create an account so that I can access my medical information.**
- **As a patient, I want to book an appointment so that I can visit a doctor.**
- **As a patient, I want to view my upcoming appointments so that I can plan my schedule.**
- **As a patient, I want to view my medical records so that I can understand my health history.**

### Entities
 ![ERD](/public/images/ERD.png)
#### User
- **_id:** ObjectId  
- **name:** String  
- **email:** String  
- **password:** String  
- **role:** String (patient)

#### Appointment
- **_id:** ObjectId  
- **patient:** ObjectId (ref User)   
- **date:** Date  
- **reason:** String  
- **status:** String (scheduled)

#### Relationships

**User 1 → Many Appointments**   
**Appointment Many → 1 User (patient)**  
**Appointment Many → 1 User (doctor)**  

### How the App Will Render

- **EJS templates** will be used for all pages.
- A **main layout** will include navigation and structure.
- Each entity will have:
  - **Index page** (list view)
  - **Show page** (details)
  - **New page** (form)
  - **Edit page** (pre-filled form)
- **Authorization** will hide edit/delete buttons from users who do not own the data.
- **Navigation links** will allow users to move through the app easily.

### Mockup 

![Mockup](/public/images/Mockup.png)

---

##  **Attributions**

- Font Awesome icons from [https://fontawesome.com](https://fontawesome.com)  
- Images from [https://www.pinterest.com](https://www.pinterest.com)

---

## **Technologies Used**

- **JavaScript**
- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **EJS**
- **Express-Session**
- **Connect-Mongo**


---

##  **Next Steps**

- Add email reminders for upcoming appointments  
- Implement doctor profiles and specialties  
- Add calendar view for appointments  
- Improve mobile responsiveness  
- Add user profile editing and password reset

---

