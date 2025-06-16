import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  isLoading = true;
  error = '';
  searchText = '';

  displayedColumns: string[] = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: data => {
        this.users = data;
        this.filteredUsers = data;
        this.isLoading = false;
      },
      error: err => {
        this.error = 'Failed to fetch users.';
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    const keyword = this.searchText.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(keyword)
    );
  }
}