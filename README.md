# App Idea

**HealthCare Hub** is a medical clinic management application where patients can book appointments and doctors can create medical records. The app includes authentication, authorization, and full CRUD functionality using Node, Express, MongoDB, and EJS.

# User Stories

## Patients
- **As a patient, I want to create an account so that I can access my medical information.**
- **As a patient, I want to book an appointment so that I can visit a doctor.**
- **As a patient, I want to view my upcoming appointments so that I can plan my schedule.**
- **As a patient, I want to view my medical records so that I can understand my health history.**

## Doctors
- **As a doctor, I want to log in securely so that I can access patient data safely.**
- **As a doctor, I want to see all my scheduled appointments so that I can prepare for my day.**
- **As a doctor, I want to create medical records so that I can document patient visits.**
- **As a doctor, I want to update medical records so that information stays accurate.**

# Entities

## User
- **_id:** ObjectId  
- **name:** String  
- **email:** String  
- **password:** String  
- **role:** String (patient or doctor)

## Appointment
- **_id:** ObjectId  
- **patient:** ObjectId (ref User)  
- **doctor:** ObjectId (ref User)  
- **date:** Date  
- **reason:** String  
- **status:** String (scheduled, completed, cancelled)

## MedicalRecord
- **_id:** ObjectId  
- **patient:** ObjectId (ref User)  
- **doctor:** ObjectId (ref User)  
- **date:** Date  
- **diagnosis:** String  
- **prescription:** String  
- **notes:** String

# Relationships

**User 1 → Many Appointments**  
**User 1 → Many MedicalRecords**  
**Appointment Many → 1 User (patient)**  
**Appointment Many → 1 User (doctor)**  
**MedicalRecord Many → 1 User (patient)**  
**MedicalRecord Many → 1 User (doctor)**

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

## Doctor Dashboard
- List of scheduled appointments  
- Link to create a medical record  

## Appointment Pages
- Index: list of appointments  
- Show: appointment details  
- New: create form  
- Edit: update form  

## Medical Record Pages
- Index: list of records  
- Show: record details  
- New: create form  
- Edit: update form  



