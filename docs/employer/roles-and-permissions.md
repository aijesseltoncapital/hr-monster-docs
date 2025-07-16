---
sidebar_position: 5
---

# Roles & Permissions Management

## Overview

The Roles and Permissions Management feature in HR Monster provides a comprehensive system for controlling user access to various features and resources within the application. This feature enables administrators to define roles, assign them to users, and configure granular permissions for each role, ensuring proper access control and security across the organization.

## Key Features

### Role Management

- **Role Listing**: View all available roles in the system
- **Role Selection**: Select a specific role to view and edit its permissions
- **Role Details**: View role name and description

### Permission Management

- **Permission Assignment**: Assign or revoke permissions for specific roles
- **Category-based Organization**: Permissions are grouped by resource type (e.g., Employee, Department, Timesheet)
- **Bulk Actions**: Select or deselect all permissions within a category
- **Permission Details**: View detailed descriptions of each permission via tooltips

### User Interface

- **Two-panel Layout**: 
  - Left panel for role selection
  - Right panel for permission configuration
- **Interactive Controls**: 
  - Checkboxes for toggling individual permissions
  - Category-level select all controls
  - Save and reset buttons for permission changes
- **Visual Feedback**: 
  - Tooltips for permission descriptions
  - Loading indicators during data fetching
  - Success/error notifications for actions

## User Experience

### Role Selection

When users access the Roles & Permissions page, they can:

1. View a list of all available roles in the system
2. Select a role to view and modify its permissions
3. See basic information about the selected role

### Permission Configuration

After selecting a role, administrators can:

1. View all permissions organized by resource categories
2. Toggle individual permissions on or off
3. Use "Select All" to enable or disable all permissions in a category
4. See detailed descriptions of permissions via tooltips
5. Save changes to update the role's permissions
6. Reset changes to revert to the original permission set

### Change Management

The interface provides clear feedback on the state of changes:

- Unsaved changes are tracked and indicated
- Save and Reset buttons are enabled only when changes are made
- Loading states are displayed during API operations
- Success and error notifications provide feedback on operations

## Data Structure

### Role Data

```typescript
type Role = {
  roleId: string;
  name: string;
  description: string;
}
```

### Permission Data

```typescript
type Permission = {
  id: string;
  code: string;
  name: string;
  description: string;
  resource_type: string;
  action: string;
  isInternal: boolean;
  scope?: string;
}
```

### Role Permissions Data

```typescript
type RolePermissionList = {
  roleId: string;
  permissions: Permission[];
}
```

### Permission Category (UI Organization)

```typescript
interface PermissionCategory {
  id: string;
  title: string;
  permissions: Permission[];
}
```

## API Integration

The Roles & Permissions Management module interacts with the backend through several API endpoints:

### Role API

- `GET /v1/roles`: Retrieve all available roles
- `POST /v1/permissions/tenant-users/assign-role`: Assign roles to users

### Permission API

- `GET /v1/permissions`: Retrieve all available permissions
- `GET /v1/permissions/roles/{id}`: Get permissions for a specific role
- `POST /v1/permissions/roles/{id}/permissions`: Update permissions for a role
- `GET /v1/permissions/me`: Get current user's permissions

## Security Considerations

The Roles & Permissions Management feature implements several security best practices:

- **Principle of Least Privilege**: Users are granted only the permissions necessary for their job functions
- **Role-Based Access Control (RBAC)**: Access is controlled through roles rather than individual user permissions
- **Permission Granularity**: Fine-grained permissions allow for precise access control
- **Audit Trail**: Changes to permissions can be tracked (when audit logging is enabled)
- **UI Security**: Permission management is restricted to authorized administrators

## Best Practices

When managing roles and permissions, administrators should:

1. **Follow the Principle of Least Privilege**: Assign only the permissions necessary for each role
2. **Use Descriptive Role Names**: Create roles with clear, descriptive names that reflect their purpose
3. **Review Permissions Regularly**: Periodically audit role permissions to ensure they remain appropriate
4. **Test After Changes**: Verify that permission changes work as expected by testing affected features
5. **Document Role Definitions**: Maintain documentation of what each role represents and its intended permissions

## Integration with Other Modules

The Roles & Permissions Management module integrates with several other HR Monster modules:

- **User Management**: Roles are assigned to users through the user management interface
- **Employee Management**: Permissions control access to employee data and functions
- **Department Management**: Permissions determine who can view and modify department information
- **Timesheet Management**: Access to timesheet features is controlled through permissions
- **Reporting**: Access to reports and analytics is governed by specific permissions

## Troubleshooting

### Common Issues

1. **Permission Changes Not Saving**: Ensure you click the "Save Changes" button after making modifications
2. **Missing Expected Permissions**: Verify that the permission exists in the system and is correctly categorized
3. **Role Not Appearing**: Check that the role has been properly created and is available in the system
4. **Permission Not Taking Effect**: Clear browser cache or reload the application after permission changes

### Support

For additional support with the Roles & Permissions Management module, contact the HR Monster support team at support@hrmonster.com.

## Technical Implementation

The Roles & Permissions Management feature is implemented using:

- **React Components**: For the user interface elements
- **TanStack Query (React Query)**: For API data fetching and caching
- **React Hook Form**: For form handling and validation
- **Context API**: For toast notifications
- **Custom Hooks**: For encapsulating role and permission logic

### Key Components

- **RolePermissionsPage**: Main component for the roles and permissions management interface
- **Permission Categories**: Logical grouping of permissions by resource type
- **Permission Toggles**: Individual permission controls with tooltips for descriptions
- **Change Management**: Tracking of permission changes with save and reset functionality

## Future Enhancements

Planned enhancements for the Roles & Permissions Management feature include:

- **Custom Role Creation**: Ability to create and define new custom roles
- **Permission Templates**: Pre-defined permission sets for common role types
- **Role Hierarchy**: Support for role inheritance and hierarchical permissions
- **Permission Analytics**: Insights into permission usage and access patterns
- **Approval Workflows**: Multi-step approval process for permission changes
- **Time-bound Permissions**: Temporary permission grants with automatic expiration
