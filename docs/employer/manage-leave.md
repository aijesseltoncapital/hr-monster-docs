---
sidebar_position: 6
---

# Leave Management

## Overview

The Leave Management feature in HR Monster provides a comprehensive system for managing employee time off requests and leave balances. This module enables administrators to track, approve, reject, and manage various types of leave requests, while also maintaining accurate records of leave balances for each employee.

## Key Features

### Leave Request Management

- **Leave Request Dashboard**: Central hub for viewing and managing all leave requests
- **Status Filtering**: Filter leave requests by status (pending, approved, rejected, all)
- **Request Approval/Rejection**: Process leave requests with comments and notifications
- **Request Deletion**: Remove unnecessary or cancelled leave requests

### Leave Balance Management

- **Balance Tracking**: Monitor accrued, used, and available leave hours for each employee
- **Balance Addition**: Add new leave balances for employees
- **Fiscal Year Tracking**: Track leave balances by fiscal year
- **Leave Type Support**: Support for multiple leave types (vacation, sick, personal, etc.)

### User Interface

- **Tabbed Interface**: Separate tabs for leave requests and leave balances
- **Data Tables**: Organized tables for viewing leave data with sorting and filtering
- **Status Indicators**: Visual indicators for different leave request statuses
- **Interactive Controls**: Buttons and dialogs for managing leave requests and balances

## User Experience

### Leave Request Management

Administrators can:

1. View all leave requests in a centralized dashboard
2. Filter requests by status (pending, approved, rejected, all)
3. Review request details including employee name, leave type, dates, and hours
4. Approve or reject requests with comments
5. Delete requests when necessary

### Leave Balance Management

Administrators can:

1. View leave balances for all employees
2. See detailed information including leave type, fiscal year, and hour allocations
3. Add new leave balances for employees
4. Monitor accrued, used, and available hours for each leave type

## Data Structure

### Leave Request Data

```typescript
interface TimeOffRequest {
  id: string;
  employeeId: string;
  timeOffTypeId: string;
  timeOffType: TimeOffType;
  startDate: string;
  endDate: string;
  requestedHours: number;
  reason?: string;
  status: string;
  approvedBy?: string;
  comments?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### Leave Type Data

```typescript
interface TimeOffType {
  id: string;
  tenantId: string;
  carryOverLimit: number;
  accrualMethod?: string;
  countryCode: string;
  typeName: string;
  description?: string;
  isStatutory: boolean;
  isPaid: boolean;
  createdAt: Date;
  maxAccrualBalance?: number;
  lawReference?: string;
}
```

### Leave Balance Data

```typescript
interface TimeOffBalanceResponse {
  timeOffTypeId: string;
  typeName: string;
  fiscalYear: number;
  accruedHours: number;
  usedHours: number;
  availableHours: number;
}
```

## Form Validation

HR Monster implements robust form validation for leave management:

### Leave Request Validation

- Time off type selection is required
- Start and end dates are required and must be valid
- End date must be after or equal to start date
- Requested hours must be greater than 0
- Reason must be at least 10 characters long

### Leave Approval Validation

- Approver ID is required
- Status must be either "approved" or "rejected"
- Comments must be at least 5 characters long

### Leave Balance Validation

- Employee ID is required
- Time off type selection is required
- Fiscal year must be between 2020 and 2030
- Accrued, used, and available hours cannot be negative
- Available hours must equal accrued hours minus used hours

## API Integration

The Leave Management module interacts with the backend through several API endpoints:

### Leave Request API

- `GET /api/leave/requests`: Retrieve all leave requests
- `GET /api/leave/requests/{employeeId}`: Get leave requests for a specific employee
- `POST /api/leave/requests`: Create a new leave request
- `PUT /api/leave/requests/status`: Update the status of a leave request
- `DELETE /api/leave/requests/{requestId}`: Delete a leave request

### Leave Balance API

- `GET /api/leave/balances`: Retrieve all leave balances
- `GET /api/leave/balances/{employeeId}`: Get leave balances for a specific employee
- `POST /api/leave/balances`: Create a new leave balance

### Leave Type API

- `GET /api/leave/types`: Retrieve all leave types

## Integration with Other Modules

The Leave Management module integrates with several other HR Monster modules:

- **Employee Management**: Leave requests and balances are associated with specific employees
- **User Authentication**: Approvers are authenticated users with appropriate permissions
- **Notifications**: Users receive notifications about leave request status changes
- **Timesheet Management**: Leave requests may affect timesheet calculations and reporting
- **Dashboard**: Leave statistics may be displayed on the main dashboard

## Best Practices

When managing leave requests and balances, administrators should:

1. **Respond Promptly**: Process leave requests in a timely manner
2. **Provide Clear Feedback**: Include detailed comments when rejecting requests
3. **Maintain Accurate Balances**: Regularly verify and update leave balances
4. **Document Policies**: Ensure leave policies are clearly documented and accessible
5. **Monitor Patterns**: Watch for unusual leave patterns that may require attention

## Troubleshooting

### Common Issues

1. **Leave Request Not Showing**: Verify that the request was properly submitted and check status filters
2. **Leave Balance Discrepancy**: Ensure that the available hours equal accrued hours minus used hours
3. **Approval Error**: Check that the approver has the necessary permissions
4. **Leave Type Missing**: Verify that the required leave types have been configured in the system

### Support

For additional support with the Leave Management module, contact the HR Monster support team at support@hrmonster.com.

## Technical Implementation

The Leave Management feature is implemented using:

- **React Components**: For the user interface elements
- **TanStack Query (React Query)**: For API data fetching, caching, and mutations
- **React Hook Form**: For form handling with Zod validation
- **Context API**: For toast notifications and global state
- **Data Tables**: For displaying and interacting with leave data

### Key Components

- **AdminLeaveDashboard**: Main component for the leave management interface
- **LeaveRequestsCard**: Component for displaying and managing leave requests
- **LeaveBalanceTable**: Component for displaying and managing leave balances
- **LeaveBalanceDialog**: Dialog for adding new leave balances
- **StatusFilter**: Component for filtering leave requests by status

## Future Enhancements

Planned enhancements for the Leave Management feature include:

- **Calendar View**: Visual calendar representation of leave requests
- **Bulk Actions**: Approve or reject multiple leave requests at once
- **Leave Request Templates**: Pre-defined templates for common leave scenarios
- **Advanced Reporting**: Detailed reports on leave usage and patterns
- **Leave Accrual Rules**: Automated accrual of leave based on configurable rules
- **Email Notifications**: Automated email notifications for leave request status changes
- **Mobile Support**: Enhanced mobile experience for managing leave on the go
- **Integration with Calendar Systems**: Sync leave with external calendar systems

## Related Features

The Leave Management module works in conjunction with the Timesheet Management feature, allowing for comprehensive tracking of employee time. Timesheets can be created for employees with fields for regular hours, overtime hours, and automatic calculation of total hours, complementing the leave tracking functionality.
