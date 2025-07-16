---
sidebar_position: 7
---

# Attendance Management

## Overview

The Attendance Management feature in HR Monster provides a comprehensive system for tracking, recording, and managing employee work hours. This module enables administrators to monitor time entries, manage timesheets, and maintain accurate records of employee attendance and work hours, supporting payroll processing and workforce management.

## Key Features

### Time Entry Management

- **Time Entry Recording**: Track clock-in and clock-out times for employees
- **Time Entry Editing**: Modify existing time entries with proper validation
- **Hours Calculation**: Automatic calculation of total hours based on clock times
- **Notes and Metadata**: Add contextual information to time entries
- **Location Tracking**: Record location data for clock-in and clock-out events

### Timesheet Management

- **Timesheet Creation**: Generate timesheets for pay periods
- **Timesheet Submission**: Submit timesheets for approval
- **Approval Workflow**: Review, approve, or reject timesheets
- **Hours Categorization**: Track regular, overtime, and other hour types
- **Filtering and Searching**: Find timesheets by employee, date range, or status

## User Interface

### Main Dashboard

The Attendance Management dashboard provides a tabbed interface with two main sections:

1. **Time Entries Tab**: Displays all time entries with filtering options
2. **Timesheets Tab**: Shows all timesheets with approval workflows

### Time Entries Interface

- **Data Table**: Displays time entries with columns for date, employee, hours, and actions
- **Filtering Controls**: Filter by employee, date range, and other criteria
- **Entry Details**: View detailed information about each time entry
- **Edit/Delete Actions**: Modify or remove time entries as needed
- **Create Entry**: Add new time entries with validation

### Timesheets Interface

- **Data Table**: Lists timesheets with columns for employee, pay period, hours, status, and actions
- **Status Indicators**: Visual badges showing timesheet status (draft, submitted, approved, rejected)
- **Approval Controls**: Buttons for submitting, approving, or rejecting timesheets
- **Filtering Options**: Filter by employee, status, and date range
- **Create Timesheet**: Add new timesheets with validation

## User Experience

### Time Entry Workflow

1. **Creating Time Entries**:
   - Select date and employee
   - Enter clock-in and clock-out times
   - Choose hours type (regular, overtime, etc.)
   - Add optional notes
   - Total hours are automatically calculated
   - Save the entry

2. **Managing Time Entries**:
   - View all entries in a data table
   - Filter entries by employee, date range
   - Edit entries to correct or update information
   - Delete entries when necessary
   - View detailed information about each entry

### Timesheet Workflow

1. **Creating Timesheets**:
   - Select employee
   - Define pay period start and end dates
   - Enter regular hours, overtime hours
   - Total hours are automatically calculated
   - Save as draft

2. **Timesheet Approval Process**:
   - Employee submits timesheet for approval
   - Manager/admin reviews the timesheet
   - Approve the timesheet or reject with comments
   - Status updates reflect the current state

## Data Structure

### Time Entry Data

```typescript
interface TimeEntry {
  id: string;
  timeSheetId: string;
  employeeId: string;
  date: string;
  hoursType: string;
  hours: string;
  hourlyRate: string | null;
  costCenterId: string | null;
  projectId: string | null;
  notes: string | null;
  createdAt: string;
  clockInTime: string;
  clockOutTime: string;
  isClockedIn: boolean;
  locationData: LocationData;
}

interface LocationData {
  latitude: string;
  longitude: string;
  name: string;
  clockOut?: {
    latitude: string;
    longitude: string;
    name: string;
  };
}
```

### Timesheet Data

```typescript
interface Timesheet {
  id: string;
  employeeId: string;
  payPeriodStart: string;
  payPeriodEnd: string;
  regularHours: string;
  overtimeHours: string;
  doubleOvertimeHours: string;
  vacationHours: string;
  sickHours: string;
  holidayHours: string;
  personalHours: string;
  unpaidHours: string;
  totalHours: string;
  status: "draft" | "submitted" | "approved" | "rejected";
  submittedById?: string;
  approvedById?: string;
  submittedAt?: string;
  approvedAt?: string;
  createdAt: string;
  employee: Employee;
}
```

## Form Validation

HR Monster implements robust form validation for attendance management:

### Time Entry Validation

- Time sheet selection is required
- Date is required
- Clock-in time is required and must be in valid time format
- Clock-out time is required and must be in valid time format
- Clock-out time must be after clock-in time
- Hours type is required (defaults to "regular")

### Timesheet Validation

- Employee ID is required
- Pay period start date is required
- Pay period end date is required
- Regular hours must be 0 or greater
- Overtime hours must be 0 or greater
- Total hours must be 0 or greater
- Available hours must equal accrued hours minus used hours

## API Integration

The Attendance Management module interacts with the backend through several API endpoints:

### Time Entry API

- `GET /api/attendance/time-entries`: Retrieve time entries with optional filtering
- `POST /api/attendance/time-entries`: Create a new time entry
- `PUT /api/attendance/time-entries/{id}`: Update an existing time entry
- `DELETE /api/attendance/time-entries/{id}`: Delete a time entry
- `POST /api/attendance/clock-in`: Record a clock-in event
- `POST /api/attendance/clock-out`: Record a clock-out event

### Timesheet API

- `GET /api/attendance/timesheets`: Retrieve timesheets with optional filtering
- `GET /api/attendance/timesheets/{id}`: Get a specific timesheet
- `POST /api/attendance/timesheets`: Create a new timesheet
- `PUT /api/attendance/timesheets/{id}`: Update an existing timesheet
- `POST /api/attendance/timesheets/{id}/submit`: Submit a timesheet for approval
- `POST /api/attendance/timesheets/{id}/approve`: Approve a timesheet
- `POST /api/attendance/timesheets/{id}/reject`: Reject a timesheet with reason

## Integration with Other Modules

The Attendance Management module integrates with several other HR Monster modules:

- **Employee Management**: Time entries and timesheets are associated with specific employees
- **User Authentication**: Approvers are authenticated users with appropriate permissions
- **Leave Management**: Leave hours may affect timesheet calculations
- **Payroll Processing**: Timesheet data feeds into payroll calculations
- **Reporting**: Attendance data is used in various reports and analytics

## Best Practices

When managing attendance and timesheets, administrators should:

1. **Regular Reviews**: Review time entries and timesheets regularly to ensure accuracy
2. **Clear Communication**: Provide clear feedback when rejecting timesheets
3. **Data Validation**: Verify that hours are correctly categorized and calculated
4. **Policy Enforcement**: Ensure attendance policies are consistently applied
5. **Audit Trail**: Maintain a clear record of timesheet approvals and changes

## Troubleshooting

### Common Issues

1. **Timesheet Calculation Errors**: Ensure that total hours match the sum of individual categories
2. **Approval Process Delays**: Check that approvers have the necessary permissions
3. **Time Entry Conflicts**: Verify that clock-in and clock-out times don't overlap
4. **Missing Time Entries**: Confirm that all required fields are completed
5. **Status Update Issues**: Check the workflow state and permissions for status changes

### Support

For additional support with the Attendance Management module, contact the HR Monster support team at support@hrmonster.com.

## Technical Implementation

The Attendance Management feature is implemented using:

- **React Components**: For the user interface elements
- **TanStack Query (React Query)**: For API data fetching, caching, and mutations
- **React Hook Form**: For form handling with Zod validation
- **Context API**: For toast notifications and global state
- **Data Tables**: For displaying and interacting with time entry and timesheet data

### Key Components

- **AdminAttendanceSystemContent**: Main component for the attendance management interface
- **TimeEntriesList**: Component for displaying and managing time entries
- **TimesheetsList**: Component for displaying and managing timesheets
- **TimeEntryForm**: Form for creating and editing time entries
- **TimeSheetForm**: Form for creating and editing timesheets

## Future Enhancements

Planned enhancements for the Attendance Management feature include:

- **Calendar View**: Visual calendar representation of time entries
- **Mobile Clock-In/Out**: Mobile-friendly interface for recording attendance on the go
- **Geofencing**: Location-based restrictions for clock-in/out events
- **Biometric Integration**: Support for biometric attendance verification
- **Scheduling Integration**: Connect attendance with employee scheduling
- **Overtime Alerts**: Notifications for approaching overtime thresholds
- **Bulk Operations**: Approve or process multiple timesheets at once
- **Advanced Analytics**: Detailed reports on attendance patterns and trends

## Related Features

The Attendance Management module works in conjunction with the Leave Management feature, allowing for comprehensive tracking of employee time. Leave requests can impact available working hours and are reflected in timesheet calculations, ensuring accurate payroll processing and attendance tracking.
