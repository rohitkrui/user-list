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


