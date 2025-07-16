---
sidebar_position: 2
---

# Employee Management

## Overview

The Employee Management module in HR Monster provides a comprehensive solution for managing your organization's workforce. It allows HR administrators and managers to create, view, update, and manage employee records efficiently. The module includes features for tracking employee status, department assignments, role management, and more.

## Key Features

### Employee Dashboard

The Employee Dashboard provides a centralized view of all employees in your organization with the following features:

- **Status Filtering**: Filter employees by status (All, Active, Onboarding, Offboarding, Dismissed)
- **Search Functionality**: Search for employees by name, email, or employee number
- **Department Filtering**: Filter employees by department
- **Bulk Actions**: Perform actions on multiple employees at once, such as role assignment

### Employee List

The employee list displays all employees with key information:

- Employee name and avatar
- Employee number
- Job title
- Department
- Status (Active, Onboarding, Offboarding, Dismissed)
- Actions (View, Edit, Delete)

### Employee Creation

The employee creation process is divided into four steps:

1. **Personal Information**:
   - First name and last name
   - Email address and phone number
   - Employee number
   - Work email
   - Country

2. **Job Information**:
   - Hire date
   - Department
   - Employment type (Full-time, Part-time, Contract, Intern)
   - Job title
   - Manager
   - Probation period details (if applicable)

3. **Salary Information**:
   - Base salary
   - Currency
   - Pay cycle (Yearly, Monthly, Weekly, Hourly)
   - Special tax status

4. **Review**:
   - Summary of all entered information
   - Submit to create the employee record

### Employee Status Management

HR Monster supports the following employee statuses:

- **Active**: Currently employed and working
- **Onboarding**: In the process of being onboarded
- **Offboarding**: In the process of leaving the organization
- **Dismissed**: Employment terminated by the organization

### Role Assignment

Administrators can assign roles to employees to control their access to different features within HR Monster:

- Select one or multiple employees
- Choose a role from the available roles
- Assign the role to the selected employees

## Data Structure

### Employee

The core employee record contains the following information:

```typescript
type Employee = {
  id: string;
  tenantId: string;
  employee_number: string;
  job_title: string;
  work_email: string;
  hire_date: string;
  termination_date?: string;
  status: "active" | "onboard" | "offboard" | "dismissed" | "resigned";
  employment_type: string;
  position_id: string;
  department_id: string;
  manager_id: string;
  tax_rate_id: string;
  special_tax_status: string;
  created_at: Date;
  updated_at: Date;
  currency: string;
  user: User;
  department: Department;
}
```

### User

Each employee is associated with a user account:

```typescript
type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: string;
  isEmailVerified: boolean;
}
```

### Department

Employees are assigned to departments:

```typescript
type Department = {
  id: string;
  name: string;
  description: string;
}
```

## Integration with Other Modules

The Employee Management module integrates with several other HR Monster modules:

- **Attendance**: Track employee attendance and timesheets
- **Leave Management**: Manage employee leave requests and balances
- **Claims**: Process employee expense claims
- **Payroll**: Generate employee payslips based on salary information

## Timesheet Management

As part of the employee management system, HR Monster includes a timesheet creation feature that allows:

- Creating new timesheets for employees
- Tracking regular and overtime hours
- Automatic calculation of total hours
- Managing pay periods
- Form validation using react-hook-form with zod

## Best Practices

1. **Consistent Employee Numbering**: Establish a consistent employee numbering system (e.g., EMP001, EMP002)
2. **Complete Information**: Fill in all relevant employee information to ensure accurate reporting
3. **Regular Updates**: Keep employee records up to date, especially when changes occur (promotions, department transfers, etc.)
4. **Role-Based Access**: Assign appropriate roles to employees based on their responsibilities
5. **Department Structure**: Maintain a clear department structure to facilitate employee management

## User Permissions

Different user roles have different levels of access to the Employee Management module:

- **HR Administrators**: Full access to all employee records and management features
- **Managers**: Access to view and manage employees in their departments
- **Employees**: Limited access to view their own information

## API Integration

The Employee Management module provides a robust API for integration with other systems:

- Create, read, update, and delete employee records
- Filter and search for employees
- Manage employee statuses and roles

## Troubleshooting

### Common Issues

1. **Employee Creation Fails**: Ensure all required fields are filled in correctly
2. **Role Assignment Errors**: Verify that the selected role exists and is active
3. **Employee Status Changes**: Check that the employee's current status allows for the requested status change

### Support

For additional support with the Employee Management module, contact the HR Monster support team at support@hrmonster.com.
