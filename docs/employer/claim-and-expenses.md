---
sidebar_position: 8
---

# Claims & Expenses Management

## Overview

The Claims & Expenses Management feature in HR Monster provides a comprehensive system for employees to submit expense claims and for administrators to review, approve, or reject these claims. This module streamlines the entire expense management workflow, from submission to reimbursement, ensuring transparency and efficiency in handling employee expenses.

## Key Features

### Claims Management

- **Claim Submission**: Employees can submit expense claims with supporting documentation
- **Claim Tracking**: Monitor the status of submitted claims (pending, approved, rejected)
- **Claim Approval Workflow**: Structured process for reviewing and approving/rejecting claims
- **Claim History**: Access historical records of all submitted claims
- **Attachments**: Support for receipt uploads and documentation

### Reimbursement Management

- **Reimbursement Processing**: Track approved claims through to payment
- **Payment Status**: Monitor which approved claims have been reimbursed
- **Reimbursement History**: Access historical records of all reimbursements
- **Batch Processing**: Handle multiple reimbursements simultaneously

## User Interface

### Admin Dashboard

The Claims & Expenses Management dashboard provides administrators with a comprehensive view of all employee claims:

1. **Main Header**: Displays the title "Claims & Expenses Management" with a descriptive subtitle
2. **Action Buttons**: Export functionality for claims data
3. **Tabbed Interface**: Filter claims by status (Pending, Approved, Rejected, All)
4. **Search and Filter**: Find claims by employee name, date range, or amount
5. **Claims Table**: Detailed list of all claims with key information and action buttons

### Claims Table

The claims table displays the following information for each claim:

- **Employee**: Name and department of the employee submitting the claim
- **Claim Type**: Category of expense (e.g., travel, meals, supplies)
- **Date**: When the expense was incurred
- **Amount**: The claimed amount and currency
- **Status**: Visual indicator of claim status (pending, approved, rejected)
- **Actions**: Buttons for viewing details, approving, or rejecting claims

### Claim Details View

When viewing a specific claim, administrators can see:

- **Employee Information**: Name, department, and contact details
- **Claim Details**: Type, date, amount, and description
- **Supporting Documentation**: Attached receipts or other evidence
- **Status History**: Timeline of claim processing
- **Approval/Rejection Details**: Who processed the claim and when
- **Comments**: Notes from approvers or reasons for rejection

## User Experience

### Admin Workflow

1. **Reviewing Claims**:
   - Access the Claims & Expenses dashboard
   - Filter claims by status (typically focusing on "Pending" first)
   - Review claim details including attached documentation
   - Make approval/rejection decisions

2. **Approving Claims**:
   - Select a claim to approve
   - Review all details for accuracy and policy compliance
   - Add optional comments
   - Confirm approval
   - System updates claim status and notifies employee

3. **Rejecting Claims**:
   - Select a claim to reject
   - Provide a reason for rejection (required)
   - Confirm rejection
   - System updates claim status and notifies employee with reason

4. **Exporting Data**:
   - Generate reports of claims for accounting or record-keeping
   - Export filtered data based on status, date range, or employee

### Employee Workflow

1. **Submitting Claims**:
   - Create a new claim
   - Select claim type
   - Enter expense details (date, amount, description)
   - Attach supporting documentation (receipts)
   - Submit for approval

2. **Tracking Claims**:
   - View submitted claims and their current status
   - Receive notifications when claims are approved or rejected
   - View reasons for rejection if applicable

## Data Structure

### Claim Data

```typescript
interface Claim {
  id: string;
  employeeId: string;
  claimType: string;
  claimDate: string; // ISO date string (YYYY-MM-DD)
  amount: number;
  description?: string;
  status: ClaimStatus;
  tenantId: string;
  createdAt: string; // ISO datetime string
  updatedAt: string; // ISO datetime string
  
  // Admin action fields
  adminComments?: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectedAt?: string;
  rejectedBy?: string;
  
  // Admin user details
  approver?: {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
  };
  rejector?: {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
  };
  
  // Employee information
  employee?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    department?: {
      id: string;
      name: string;
    };
  };
}
```

### Claim Status

```typescript
enum ClaimStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'rejected',
  CANCELLED = 'cancelled'
}
```

### Reimbursement Data

```typescript
interface Reimbursement {
  id: string;
  employeeId: string;
  reimbursementType: string;
  reimbursementDate: string;
  amount: number;
  description?: string;
  status: ReimbursementStatus;
  createdAt: string;
  updatedAt: string;
  adminComments?: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectedAt?: string;
  rejectedBy?: string;
  
  // Employee information
  employee?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    department?: {
      id: string;
      name: string;
    };
  };
}
```

### Reimbursement Status

```typescript
enum ReimbursementStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  DECLINED = 'rejected',
  PAID = 'paid',
  CANCELLED = 'cancelled'
}
```

## Form Validation

HR Monster implements robust form validation for claims and expenses:

### Claim Submission Validation

- Claim type is required
- Claim date is required and must be a valid date
- Amount is required and must be a positive number
- Description is optional but limited to a maximum length
- Supporting documentation may be required depending on company policy

### Claim Approval/Rejection Validation

- Comments are required when rejecting a claim
- Comments are optional when approving a claim
- Only authorized users can approve or reject claims

## API Integration

The Claims & Expenses Management module interacts with the backend through several API endpoints:

### Claims API

- `GET /api/claims`: Retrieve claims with optional filtering
- `GET /api/claims/admin`: Retrieve all claims for admin (with advanced filtering)
- `GET /api/claims/{id}`: Get a specific claim by ID
- `POST /api/claims`: Create a new claim
- `PUT /api/claims/{id}`: Update an existing claim
- `POST /api/claims/{id}/approve`: Approve a claim
- `POST /api/claims/{id}/decline`: Decline a claim with reason
- `POST /api/claims/{id}/cancel`: Cancel a claim
- `DELETE /api/claims/{id}`: Delete a claim

### Reimbursements API

- `GET /api/reimbursements`: Retrieve reimbursements with optional filtering
- `GET /api/reimbursements/{id}`: Get a specific reimbursement by ID
- `POST /api/reimbursements`: Create a new reimbursement
- `PUT /api/reimbursements/{id}`: Update an existing reimbursement
- `POST /api/reimbursements/{id}/approve`: Approve a reimbursement
- `POST /api/reimbursements/{id}/decline`: Decline a reimbursement with reason
- `POST /api/reimbursements/{id}/paid`: Mark a reimbursement as paid
- `POST /api/reimbursements/{id}/cancel`: Cancel a reimbursement
- `DELETE /api/reimbursements/{id}`: Delete a reimbursement

### Summary and Analytics API

- `GET /api/claims/summary`: Get summary statistics for claims
- `GET /api/reimbursements/summary`: Get summary statistics for reimbursements

## Integration with Other Modules

The Claims & Expenses Management module integrates with several other HR Monster modules:

- **Employee Management**: Claims are associated with specific employees
- **User Authentication**: Approvers are authenticated users with appropriate permissions
- **Notifications**: Employees and managers receive notifications about claim status changes
- **Financial Reporting**: Approved claims feed into financial reports and accounting systems
- **Document Management**: Attachments are stored and managed securely

## Best Practices

When managing claims and expenses, administrators should:

1. **Establish Clear Policies**: Define and communicate expense policies to all employees
2. **Prompt Review**: Process claims in a timely manner to avoid delays in reimbursement
3. **Thorough Verification**: Check all supporting documentation before approval
4. **Clear Communication**: Provide detailed reasons when rejecting claims
5. **Regular Auditing**: Periodically review approved claims for compliance and patterns
6. **Consistent Application**: Apply expense policies consistently across all employees
7. **Documentation**: Maintain complete records of all claims and decisions

## Troubleshooting

### Common Issues

1. **Missing Documentation**: Ensure all required receipts and supporting documents are attached
2. **Policy Violations**: Check that claims comply with company expense policies
3. **Approval Delays**: Verify that approvers have the necessary permissions
4. **Duplicate Claims**: Check for and prevent duplicate submission of the same expense
5. **Calculation Errors**: Verify that amount calculations are accurate

### Support

For additional support with the Claims & Expenses Management module, contact the HR Monster support team at support@hrmonster.com.

## Technical Implementation

The Claims & Expenses Management feature is implemented using:

- **React Components**: For the user interface elements
- **TanStack Query (React Query)**: For API data fetching, caching, and mutations
- **React Hook Form**: For form handling with validation
- **Context API**: For toast notifications and global state
- **Data Tables**: For displaying and interacting with claims data
- **File Upload**: For handling receipt attachments

### Key Components

- **AdminClaimsContent**: Main component for the claims management interface
- **ClaimForm**: Form for creating and editing claims
- **ClaimDetailsView**: Component for viewing claim details
- **ClaimsTable**: Component for displaying claims in a data table
- **ImageViewerModal**: Component for viewing attached receipts and documentation

## Future Enhancements

Planned enhancements for the Claims & Expenses Management feature include:

- **Mobile Submission**: Allow employees to submit claims from mobile devices
- **OCR Integration**: Automatically extract data from receipts using OCR
- **Expense Categories**: More detailed categorization of expense types
- **Budget Integration**: Link expenses to department or project budgets
- **Approval Workflows**: Multi-level approval processes for high-value claims
- **Expense Analytics**: Advanced reporting and analytics on expense patterns
- **Corporate Card Integration**: Direct import of corporate card transactions
- **Currency Conversion**: Automatic handling of multi-currency expenses
- **Mileage Tracking**: GPS-based tracking for travel expense claims

## Related Features

The Claims & Expenses Management module works in conjunction with the Payroll Management feature, allowing for seamless processing of approved expenses through the payroll system. Approved claims can be included in employee compensation, ensuring timely reimbursement and accurate financial record-keeping.
