---
sidebar_position: 9
---

# Payslip Management

## Overview

The Payslip Management feature in HR Monster provides employers with a comprehensive system to manage payroll runs, generate payslips, and distribute them to employees. This feature is designed to streamline the payroll process, ensuring accurate and timely payment of employees while maintaining detailed records for accounting and compliance purposes.

## Key Features

- **Payroll Run Management**: Create, process, approve, and monitor payroll runs
- **Payslip Generation**: Generate individual payslips for employees based on payroll runs
- **Multi-currency Support**: Handle payroll in different currencies with exchange rate management
- **Status Tracking**: Monitor the status of payroll runs (pending, processing, completed, failed, cancelled)
- **Financial Summaries**: View gross pay, net pay, taxes, and deductions for each payroll run
- **Bulk Operations**: Perform actions like deletion, regeneration, or email distribution on multiple payslips

## UI Components and User Workflows

### Admin Dashboard

The admin dashboard provides a comprehensive overview of all payroll activities, featuring:

1. **Summary Cards**: Display key metrics including total runs, completed runs, pending runs, and failed runs
2. **Payroll Runs Table**: Lists all payroll runs with details such as pay period, pay date, run type, status, gross pay, and net pay
3. **Action Buttons**: Process, approve, or delete payroll runs based on their current status

#### Creating a Payroll Run

Administrators can initiate a new payroll run through the following process:

1. Click the "Run Payroll" button on the admin dashboard
2. Complete the payroll run form with:
   - Pay period start and end dates
   - Pay date
   - Run type (regular or off-cycle)
   - Currency and exchange rate
3. Submit the form to create the payroll run and start the calculation process

#### Managing Payroll Runs

Once created, payroll runs can be managed through various actions:

- **Process**: Start the calculation process for a pending payroll run
- **Approve**: Mark a pending payroll run as approved
- **Delete**: Remove a pending payroll run from the system
- **View Details**: Access detailed information about a specific payroll run

### Employee Payslip View

Employees can access their payslips through their dashboard, where they can:

1. View a list of all their payslips
2. Download payslips as PDF documents
3. View detailed breakdowns of earnings, deductions, and taxes

## TypeScript Data Structures

### Payroll Run

The core data structure for managing payroll processing:

```typescript
export interface PayrollRun {
  id: string;
  tenant_id: string;
  pay_period_start: string; // ISO date string
  pay_period_end: string; // ISO date string
  pay_date: string; // ISO date string
  run_type: 'regular' | 'monthly' | 'weekly' | 'biweekly';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  total_gross_pay: string;
  total_net_pay: string;
  total_taxes: string;
  total_deductions: string;
  total_employer_contributions: string;
  currency: string;
  exchange_rate: string;
  processed_by: string | null;
  approved_by: string | null;
  processed_at: string | null; // ISO datetime string
  approved_at: string | null; // ISO datetime string
  created_at: string; // ISO datetime string
  updated_at: string; // ISO datetime string
}
```

### Payslip

The data structure representing an individual employee's payslip:

```typescript
export interface Payslip {
  id: string;
  employee_id: string;
  payroll_id: string;
  created_at: string; // ISO datetime string
  created_by: string;
  updated_at: string; // ISO datetime string
  update_by: string | null;
  value_payslip: number;
  pay_period: string; // Format: "YYYY-MM"
}
```

### Payslip Detail

Extended payslip information including employee and payroll data:

```typescript
export interface PayslipDetail extends PayslipWithEmployee, PayslipWithPayroll {
  payItems?: PayItem[];
}

export interface PayslipWithEmployee extends Payslip {
  employee?: {
    id: string;
    employee_number: string;
    job_title: string;
    work_email: string;
    hire_date: string;
    firstName: string;
    lastName: string;
    fullName: string;
    department?: {
      id: string;
      name: string;
    };
  };
}

export interface PayslipWithPayroll extends Payslip {
  payroll?: {
    id: string;
    pay_period_start: string;
    pay_period_end: string;
    pay_date: string;
    status: string;
    total_gross_pay: number;
    total_net_pay: number;
    currency: string;
  };
}
```

### Pay Items

Components of a payslip representing different types of payments or deductions:

```typescript
export interface PayItem {
  id: string;
  pay_slip_id: string;
  type: 'earning' | 'deduction' | 'tax';
  label: string;
  amount: number;
  created_at: string;
  update_at: string;
}
```

## Form Validation

The payslip management feature implements several validation rules to ensure data integrity:

1. **Required Fields**:
   - Pay period start and end dates
   - Pay date
   - Run type
   - Currency

2. **Date Validation**:
   - Pay period end date must be after the start date
   - Pay date should typically be after the pay period end date

3. **Numeric Validation**:
   - Exchange rate must be a positive number
   - All monetary values must be valid numbers

Example validation implementation in the GeneratePayslipForm component:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!payPeriodStart || !payPeriodEnd || !payDate) {
    toast({
      title: "Validation Error",
      description: "Please fill in all required date fields.",
      variant: "destructive",
    })
    return
  }
  
  // Additional validation logic...
}
```

## API Integration

### React Query Hooks

The payslip management feature uses React Query hooks for efficient data fetching and state management:

#### Payroll Run Management

```typescript
// Get all payroll runs
export const useGetPayrollRuns = (params?: PayrollRunQueryParams) => {
  return useQuery({
    queryKey: [PAYROLL_QUERY_KEY, 'runs', params],
    queryFn: () => payrollService.getPayrollRuns(params),
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 403) {
        return false;
      }
      return failureCount < 3;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Create a new payroll run
export const useCreatePayrollRun = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreatePayrollRunRequestDto) => payrollService.createPayrollRun(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PAYROLL_QUERY_KEY, 'runs'] });
    },
  });
};
```

#### Payslip Operations

```typescript
// Get payslips for a payroll run
export const useGetPayrollItems = (runId: string) => {
  return useQuery({
    queryKey: [PAYROLL_QUERY_KEY, 'runs', runId, 'items'],
    queryFn: () => payrollService.getPayrollItems(runId),
    enabled: !!runId,
  });
};

// Get payslip details
export const useGetPayslipForPayrollItem = (itemId: string) => {
  return useQuery({
    queryKey: [PAYROLL_QUERY_KEY, 'items', itemId, 'payslip'],
    queryFn: () => payrollService.getPayslipForPayrollItem(itemId),
    enabled: !!itemId,
  });
};
```

### API Endpoints

The payslip management feature interacts with the following API endpoints:

```typescript
// Payroll Run Endpoints
const createPayrollRun = async (payload: CreatePayrollRunRequestDto): Promise<PayrollRunDto> => {
  const response = await apiClient.post('/v1/payroll/runs', payload);
  return response.data;
};

const getPayrollRuns = async (params?: PayrollRunQueryParams): Promise<PayrollRunsResponse> => {
  const response = await apiClient.get('/v1/payroll/runs', { params });
  return response.data;
};

const getPayrollRunById = async (id: string): Promise<PayrollRun> => {
  const response = await apiClient.get(`/v1/payroll/runs/${id}`);
  return response.data;
};

// Payslip Endpoints
const getPayrollItems = async (id: string): Promise<PayrollItemDto[]> => {
  const response = await apiClient.get(`/v1/payroll/runs/${id}/items`);
  return response.data;
};

const getPayslipForPayrollItem = async (id: string): Promise<Payslip> => {
  const response = await apiClient.get(`/v1/payroll/items/${id}/payslip`);
  return response.data;
};
```

## Integration with Other HR Monster Modules

The Payslip Management feature integrates with several other HR Monster modules:

1. **Employee Management**: Retrieves employee information for payslip generation
2. **Attendance Management**: Uses timesheet data to calculate regular and overtime hours for payroll processing
3. **Claims & Expenses Management**: Incorporates approved claims and reimbursements into payroll calculations
4. **Reporting**: Provides payroll data for financial and HR reporting

## Best Practices

### For Administrators

1. **Regular Schedule**: Establish and maintain a consistent payroll schedule
2. **Data Verification**: Always verify payroll data before finalizing a payroll run
3. **Backup**: Regularly export payroll data for backup purposes
4. **Compliance**: Ensure payroll processes comply with local tax and labor regulations
5. **Documentation**: Maintain records of all payroll runs and any manual adjustments

### For Developers

1. **Error Handling**: Implement comprehensive error handling for payroll calculations
2. **Audit Trails**: Maintain detailed logs of all payroll operations
3. **Performance Optimization**: Optimize payroll calculations for large employee datasets
4. **Security**: Implement strict access controls for payroll data
5. **Testing**: Thoroughly test payroll calculations with various edge cases

## Troubleshooting

### Common Issues and Solutions

1. **Payroll Run Stuck in Processing**
   - Check server logs for calculation errors
   - Verify that all required employee data is available
   - Restart the processing if necessary

2. **Incorrect Payslip Amounts**
   - Verify timesheet data for accuracy
   - Check for any pending or recently approved claims
   - Review tax and deduction settings

3. **Missing Employees in Payroll Run**
   - Verify employee status (active/inactive)
   - Check if employees are assigned to the correct department
   - Ensure employee records are complete

4. **Currency Conversion Issues**
   - Verify the exchange rate is correctly set
   - Check for any rounding errors in calculations
   - Ensure the base currency is properly configured

## Technical Implementation

The Payslip Management feature is implemented using:

1. **React Components**: For rendering the UI elements
2. **React Query**: For data fetching and state management
3. **TypeScript**: For type-safe code
4. **Shadcn UI**: For consistent UI components
5. **Date-fns**: For date manipulation and formatting

Key implementation details include:

- **Status Management**: Payroll runs follow a state machine pattern (pending → processing → completed/failed)
- **Calculation Logic**: Payroll calculations are performed on the server to ensure consistency
- **Caching Strategy**: Payroll data is cached for 5 minutes to balance freshness and performance
- **Optimistic Updates**: UI updates optimistically for better user experience

## Future Enhancements

Planned improvements to the Payslip Management feature include:

1. **Automated Scheduling**: Set up recurring payroll runs based on predefined schedules
2. **Payslip Templates**: Customizable templates for different types of employees or departments
3. **Direct Deposit Integration**: Support for automatic bank transfers
4. **Tax Filing Integration**: Automated generation of tax filing documents
5. **Historical Analysis**: Tools for analyzing payroll trends and forecasting
6. **Mobile Access**: Enhanced mobile experience for approving payroll runs on the go
7. **Notification System**: Alerts for employees when new payslips are available
