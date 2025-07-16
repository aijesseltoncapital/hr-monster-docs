---
sidebar_position: 4
---

# Profile Management

## Overview

The Profile Management feature in HR Monster provides users with the ability to view and update their personal information and account settings. This self-service functionality allows employees and administrators to maintain accurate personal details and manage security settings without requiring assistance from IT or HR personnel.

## Key Features

### Personal Information Management

The Profile Management module allows users to:

- View their current profile information
- Edit personal details including:
  - First name
  - Last name
  - Birth date
  - Phone number
- View their email address (changes to email address may require additional verification)

### Security Settings

Users can manage their account security through:

- Password management with robust security features
- Password strength indicators
- Password requirements enforcement

### User Interface

The Profile Management interface is designed with user experience in mind:

- Clean, intuitive layout
- Responsive design for desktop and mobile devices
- Clear separation between viewing and editing modes
- Immediate feedback on form validation
- Success and error notifications

## User Experience

### Viewing Profile Information

When users access their profile, they can see:

- Their profile picture or avatar with initials fallback
- Personal information displayed in a read-only format
- Security settings section
- Edit button to switch to editing mode

### Editing Profile Information

When in editing mode, users can:

- Modify their personal information through form inputs
- See validation errors in real-time
- Save changes or cancel and revert to previous values
- Receive confirmation when changes are successfully saved

### Changing Password

The password change functionality includes:

- Current password verification for security
- New password and confirmation fields
- Password strength indicator
- Visual feedback on password requirements:
  - Minimum length (8 characters)
  - Uppercase letter requirement
  - Lowercase letter requirement
  - Number requirement
  - Special character requirement
- Clear error messages for validation issues

## Data Structure

### Profile Data

The core profile data structure includes:

```typescript
type ProfileType = {
  email: string;
  firstName: string;
  lastName: string;
  birthday?: string;
  phoneNumber?: string;
}
```

### Password Change Data

When changing a password, the following data structure is used:

```typescript
type ChangePasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
```

## Form Validation

HR Monster implements robust form validation for profile management:

### Profile Form Validation

- First name and last name are required
- Email must be a valid email format
- Phone number validation (optional field)
- Date format validation for birthday

### Password Change Validation

- Current password is required
- New password must meet security requirements
- Confirmation password must match new password
- Password strength is evaluated and displayed to the user

## API Integration

The Profile Management module interacts with the backend through several API endpoints:

### Profile API

- `GET /api/profile`: Retrieve the current user's profile
- `PUT /api/profile`: Update the user's profile information

### Security API

- `PUT /api/profile/password`: Change the user's password
- `PUT /api/profile/email`: Update the user's email address (when implemented)

## Security Considerations

The Profile Management module implements several security best practices:

- Current password verification before sensitive changes
- Password strength requirements
- Client-side and server-side validation
- Secure API calls with proper authentication
- Protection against common security vulnerabilities

## Best Practices

When using the Profile Management feature, users should:

1. **Keep Information Updated**: Regularly review and update personal information
2. **Use Strong Passwords**: Follow the password requirements for maximum security
3. **Verify Changes**: Confirm that profile updates have been successfully saved
4. **Report Issues**: Contact support if they encounter any problems updating their profile

## Integration with Other Modules

The Profile Management module integrates with several other HR Monster modules:

- **User Authentication**: Profile information is used for user identification
- **Employee Management**: Some profile data may be synchronized with employee records
- **Notifications**: Users receive notifications about profile changes
- **Security**: Profile management adheres to the system's security policies

## Troubleshooting

### Common Issues

1. **Profile Updates Not Saving**: Ensure all required fields are filled correctly
2. **Password Change Failures**: Verify the current password is correct and new password meets requirements
3. **Validation Errors**: Check the specific error messages for guidance on fixing form issues

### Support

For additional support with the Profile Management module, contact the HR Monster support team at support@hrmonster.com.

## Technical Implementation

The Profile Management feature is implemented using:

- React components for the user interface
- React Hook Form with Zod for form validation
- TanStack Query (React Query) for API data fetching and caching
- Context API for toast notifications
- Responsive design principles for cross-device compatibility

## Future Enhancements

Planned enhancements for the Profile Management feature include:

- Profile picture upload and management
- Additional security options (e.g., two-factor authentication)
- Enhanced email change workflow with verification
- Additional customizable user preferences
- Integration with external identity providers
