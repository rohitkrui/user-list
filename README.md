# Angular User Listing App

This is a simple Angular application that fetches and displays a list of users using an API. The app includes a search filter to allow users to search by name, and it's styled using Angular Material components.

# Features

 **Search by Name** (case-insensitive)
 **Displays** Name, Email, Phone, Company Name
 **Angular Material** UI with `mat-table`
 **Loading Spinner** while data loads
 **Error Handling** for failed requests


## Tech Stack

- Angular (latest stable)
- Angular Material
- RxJS
- TypeScript
- JSONPlaceholder API


## API Used

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)



## Folder Structure  

src/
├── app/
│   ├── user-list/                 # UserListComponent files
│   │   ├── user-list.component.ts
│   │   ├── user-list.component.html
│   │   ├── user-list.component.css
│   ├── user.service.ts            # Service for API calls
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app-routing.module.ts
│   ├── app.module.ts



 Project Summary – User Listing with Search Filter
 
Tech Stack
•	Angular v16 
•	Angular Material for UI components
•	TypeScript
•	RxJS for handling HTTP observables
•	HTML/CSS for styling

 Features Implemented
1. User Data Fetching
•	 Used HttpClient to fetch user data from the API:
       https://jsonplaceholder.typicode.com/users
•	 Data fetched inside ngOnInit() using UserService.
•	 Handled network errors using catchError.

3. Search Functionality
•	Search input (<input matInput>) with [(ngModel)] two-way binding.
•	 Filtered results on input event in a case-insensitive manner.
•	Real-time search without refresh.

5. User Interface (UI)
•	 Used Angular Material components:
     o	mat-table – to display tabular data
     o	mat-form-field & matInput – for the search input
     o	mat-spinner – for loading indicator
•	 Displayed user fields:
    o	Name
    o	Email
    o	Phone
    o	Company Name
6. Loading and Error Handling
•	 Used isLoading flag to show a spinner while data loads.
•	 Displayed error message using *ngIf="error" in case of API failure.



