---
sidebar_position: 3
---

# Department Management

## Overview

The Department Management module in HR Monster provides a comprehensive solution for organizing and managing your company's organizational structure. This feature allows HR administrators and managers to create departments, assign employees to departments, and manage the overall departmental hierarchy within the organization.

## Key Features

### Department Dashboard

The Department Dashboard provides a centralized view of all departments in your organization with the following features:

- **Search Functionality**: Search for departments by name or description
- **Department List**: View all departments with their details
- **Employee Count**: See how many employees are assigned to each department
- **Department Manager**: View the manager assigned to each department

### Department Creation and Editing

The department creation and editing functionality allows administrators to:

- Create new departments with name and description
- Edit existing department information
- Delete departments when they are no longer needed

### Department Structure

Departments in HR Monster are structured with the following information:

- Department name
- Department description
- Department manager
- Employee count
- List of assigned employees

### Employee Assignment

The Department Management module provides robust tools for managing employee assignments:

- **Assign Employees**: Add employees to departments
- **Unassign Employees**: Remove employees from departments
- **Bulk Actions**: Select multiple employees for unassignment
- **Employee Search**: Search for employees to assign to departments

### Employee List by Department

For each department, HR Monster provides:

- A detailed list of all employees assigned to the department
- Employee information including name, job title, and status
- Employment start date
- Actions to manage employee assignments

## Data Structure

### Department

The core department record contains the following information:

```typescript
type Department = {
  id: string;
  name: string;
  description?: string;
  manager: string;
  managerEmail: string;
  employeeCount: number;
  deleted: boolean;
  employees?: Employee[];
}
```

### Department Form Data

When creating or editing a department, the following data structure is used:

```typescript
type DepartmentFormData = {
  id?: string;
  name: string;
  description?: string;
}
```

### Employee by Department

Employees assigned to departments are represented with the following data structure:

```typescript
type EmployeeByDepartment = {
  id: string;
  employee_number: string;
  job_title: string;
  work_email: string;
  hire_date: string;
  status: 'active' | 'onboard' | 'offboard' | 'dismissed' | 'resigned';
  employment_type: string;
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    // Additional user properties
  };
  department: {
    id: string;
    name: string;
    description: string;
    // Additional department properties
  };
}
```

## User Interface Components

### Department List

The department list displays all departments with key information:

- Department name and description
- Department manager
- Number of employees
- Actions (View Employees, Edit, Delete)

### Department Form

The department form allows users to:

- Enter department name (required)
- Provide a department description (optional)
- Submit the form to create or update a department

### Assign Employee Dialog

The assign employee dialog provides:

- A search field to find employees
- A list of employees that can be selected
- Checkboxes to select multiple employees
- Buttons to confirm or cancel the assignment

### Employee List by Department

The employee list for each department includes:

- Employee name and avatar
- Email address
- Job title
- Hire date
- Employee status badge
- Selection checkboxes for bulk actions

## Integration with Other Modules

The Department Management module integrates with several other HR Monster modules:

- **Employee Management**: Departments are assigned to employees as part of their employment information
- **Reporting**: Department structure is used in organizational reports
- **Payroll**: Department information can be used for payroll categorization
- **Leave Management**: Department managers can approve leave requests

## Best Practices

1. **Clear Department Structure**: Create a logical department structure that reflects your organization
2. **Descriptive Names**: Use clear, descriptive names for departments
3. **Regular Updates**: Keep department information up to date, especially when organizational changes occur
4. **Manager Assignment**: Assign appropriate managers to departments for proper oversight
5. **Employee Organization**: Ensure all employees are assigned to the correct departments

## User Permissions

Different user roles have different levels of access to the Department Management module:

- **HR Administrators**: Full access to create, edit, and delete departments and manage employee assignments
- **Department Managers**: Access to view department information and manage employees within their departments
- **Employees**: Limited access to view their department information

## API Integration

The Department Management module provides a robust API for integration with other systems:

- Create, read, update, and delete department records
- Assign and unassign employees to/from departments
- Search for departments and employees
- Retrieve department hierarchies and employee lists

## Troubleshooting

### Common Issues

1. **Department Creation Fails**: Ensure the department name is provided and unique
2. **Employee Assignment Errors**: Verify that the employee and department both exist
3. **Department Deletion Issues**: Ensure all employees are unassigned before deleting a department

### Support

For additional support with the Department Management module, contact the HR Monster support team at support@hrmonster.com.
