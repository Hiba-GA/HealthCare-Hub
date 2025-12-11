# App Idea

**HealthCare Hub** is a medical clinic management application where patients can book appointments. The app includes authentication, authorization, and full CRUD functionality using Node, Express, MongoDB, and EJS.

# User Stories

## Patients
- **As a patient, I want to create an account so that I can access my medical information.**
- **As a patient, I want to book an appointment so that I can visit a doctor.**
- **As a patient, I want to view my upcoming appointments so that I can plan my schedule.**
- **As a patient, I want to view my medical records so that I can understand my health history.**

# Entities

## User
- **_id:** ObjectId  
- **name:** String  
- **email:** String  
- **password:** String  
- **role:** String (patient)

## Appointment
- **_id:** ObjectId  
- **patient:** ObjectId (ref User)  
- **doctor:** ObjectId (ref User)  
- **date:** Date  
- **reason:** String  
- **status:** String (scheduled)

# Relationships

**User 1 → Many Appointments**   
**Appointment Many → 1 User (patient)**  
**Appointment Many → 1 User (doctor)**  

# How the App Will Render

- **EJS templates** will be used for all pages.
- A **main layout** will include navigation and structure.
- Each entity will have:
  - **Index page** (list view)
  - **Show page** (details)
  - **New page** (form)
  - **Edit page** (pre-filled form)
- **Authorization** will hide edit/delete buttons from users who do not own the data.
- **Navigation links** will allow users to move through the app easily.

# Mockup (Wireframe Overview)

## Home Page
- Login and Signup links  
- Simple introduction to the app

## Patient Dashboard
- List of upcoming appointments  
- Button to create a new appointment  
- Link to view medical records  

## Appointment Pages
- Index: list of appointments  
- Show: appointment details  
- New: create form  
- Edit: update form  
