import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Employee',
      collapsed: false,
      items: [
        'employee/overview',
        'employee/request-leave',
        'employee/view-payslip',
        'employee/attendance',
        'employee/claim-and-expenses',
      ],
    },
    {
      type: 'category',
      label: 'Employer',
      collapsed: false,
      items: [
        'employer/overview',
        'employer/claim-and-expenses',
        'employer/manage-attendance',
        'employer/manage-department',
        'employer/manage-employee',
        'employer/manage-leave',
        'employer/manage-payslip',
        'employer/manage-profile',
        'employer/manage-regulation',
        'employer/roles-and-permissions',
        'employer/run-payroll',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/authentication',
        // 'api/employees',
        // 'api/leave',
        // 'api/payroll',
        // 'api/attendance',
        // 'api/error-handling',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   collapsed: true,
    //   items: ['tutorials/nodejs-integration'],
    // },
    'faq',
    'changelog',
    'contributing',
  ],
};

export default sidebars;
