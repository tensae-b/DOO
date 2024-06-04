/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FolderHierarchyRouteImport } from './routes/FolderHierarchyRoute'
import { Route as LoanDocumentWorkflowIdStepIdImport } from './routes/LoanDocument.$workflowId.$stepId'

// Create Virtual Routes

const WorkflowtempLazyImport = createFileRoute('/workflowtemp')()
const WorkflowaddLazyImport = createFileRoute('/workflowadd')()
const UserDashboardLazyImport = createFileRoute('/userDashboard')()
const SetNewPasswordLazyImport = createFileRoute('/setNewPassword')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const OtpLazyImport = createFileRoute('/otp')()
const NotificationLazyImport = createFileRoute('/notification')()
const MyDocumentsLazyImport = createFileRoute('/my-documents')()
const ManageUserLazyImport = createFileRoute('/manage-user')()
const LoginLazyImport = createFileRoute('/login')()
const InviteUserLazyImport = createFileRoute('/invite-user')()
const ForgotpasswordLazyImport = createFileRoute('/forgotpassword')()
const DocumenttempaddLazyImport = createFileRoute('/documenttempadd')()
const DocumentsLazyImport = createFileRoute('/documents')()
const DocumentempLazyImport = createFileRoute('/documentemp')()
const DocumentLazyImport = createFileRoute('/document')()
const CreateUserLazyImport = createFileRoute('/create-user')()
const ChangepasswordLazyImport = createFileRoute('/changepassword')()
const CatagoryListLazyImport = createFileRoute('/catagoryList')()
const AssignedtomeLazyImport = createFileRoute('/assignedtome')()
const AssignedbymeLazyImport = createFileRoute('/assignedbyme')()
const AdminreportLazyImport = createFileRoute('/adminreport')()
const AdminDashboardLazyImport = createFileRoute('/adminDashboard')()
const AddCatagoryLazyImport = createFileRoute('/addCatagory')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const FulldocumentDocumntpathLazyImport = createFileRoute(
  '/fulldocument/$documntpath',
)()
const AssignedbymedetailsWorkflowIdLazyImport = createFileRoute(
  '/assignedbymedetails/$workflowId',
)()
const AssignedtomedetailsWorkflowIdUserIdLazyImport = createFileRoute(
  '/assignedtomedetails/$workflowId/$userId',
)()

// Create/Update Routes

const WorkflowtempLazyRoute = WorkflowtempLazyImport.update({
  path: '/workflowtemp',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/workflowtemp.lazy').then((d) => d.Route))

const WorkflowaddLazyRoute = WorkflowaddLazyImport.update({
  path: '/workflowadd',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/workflowadd.lazy').then((d) => d.Route))

const UserDashboardLazyRoute = UserDashboardLazyImport.update({
  path: '/userDashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/userDashboard.lazy').then((d) => d.Route))

const SetNewPasswordLazyRoute = SetNewPasswordLazyImport.update({
  path: '/setNewPassword',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/setNewPassword.lazy').then((d) => d.Route),
)

const RegisterLazyRoute = RegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const OtpLazyRoute = OtpLazyImport.update({
  path: '/otp',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/otp.lazy').then((d) => d.Route))

const NotificationLazyRoute = NotificationLazyImport.update({
  path: '/notification',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/notification.lazy').then((d) => d.Route))

const MyDocumentsLazyRoute = MyDocumentsLazyImport.update({
  path: '/my-documents',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/my-documents.lazy').then((d) => d.Route))

const ManageUserLazyRoute = ManageUserLazyImport.update({
  path: '/manage-user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/manage-user.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const InviteUserLazyRoute = InviteUserLazyImport.update({
  path: '/invite-user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/invite-user.lazy').then((d) => d.Route))

const ForgotpasswordLazyRoute = ForgotpasswordLazyImport.update({
  path: '/forgotpassword',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/forgotpassword.lazy').then((d) => d.Route),
)

const DocumenttempaddLazyRoute = DocumenttempaddLazyImport.update({
  path: '/documenttempadd',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/documenttempadd.lazy').then((d) => d.Route),
)

const DocumentsLazyRoute = DocumentsLazyImport.update({
  path: '/documents',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/documents.lazy').then((d) => d.Route))

const DocumentempLazyRoute = DocumentempLazyImport.update({
  path: '/documentemp',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/documentemp.lazy').then((d) => d.Route))

const DocumentLazyRoute = DocumentLazyImport.update({
  path: '/document',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/document.lazy').then((d) => d.Route))

const CreateUserLazyRoute = CreateUserLazyImport.update({
  path: '/create-user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/create-user.lazy').then((d) => d.Route))

const ChangepasswordLazyRoute = ChangepasswordLazyImport.update({
  path: '/changepassword',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/changepassword.lazy').then((d) => d.Route),
)

const CatagoryListLazyRoute = CatagoryListLazyImport.update({
  path: '/catagoryList',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/catagoryList.lazy').then((d) => d.Route))

const AssignedtomeLazyRoute = AssignedtomeLazyImport.update({
  path: '/assignedtome',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assignedtome.lazy').then((d) => d.Route))

const AssignedbymeLazyRoute = AssignedbymeLazyImport.update({
  path: '/assignedbyme',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assignedbyme.lazy').then((d) => d.Route))

const AdminreportLazyRoute = AdminreportLazyImport.update({
  path: '/adminreport',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/adminreport.lazy').then((d) => d.Route))

const AdminDashboardLazyRoute = AdminDashboardLazyImport.update({
  path: '/adminDashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/adminDashboard.lazy').then((d) => d.Route),
)

const AddCatagoryLazyRoute = AddCatagoryLazyImport.update({
  path: '/addCatagory',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/addCatagory..lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const FolderHierarchyRouteRoute = FolderHierarchyRouteImport.update({
  path: '/FolderHierarchyRoute',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const FulldocumentDocumntpathLazyRoute =
  FulldocumentDocumntpathLazyImport.update({
    path: '/fulldocument/$documntpath',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/fulldocument.$documntpath.lazy').then((d) => d.Route),
  )

const AssignedbymedetailsWorkflowIdLazyRoute =
  AssignedbymedetailsWorkflowIdLazyImport.update({
    path: '/assignedbymedetails/$workflowId',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/assignedbymedetails.$workflowId.lazy').then(
      (d) => d.Route,
    ),
  )

const AssignedtomedetailsWorkflowIdUserIdLazyRoute =
  AssignedtomedetailsWorkflowIdUserIdLazyImport.update({
    path: '/assignedtomedetails/$workflowId/$userId',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/assignedtomedetails.$workflowId.$userId.lazy').then(
      (d) => d.Route,
    ),
  )

const LoanDocumentWorkflowIdStepIdRoute =
  LoanDocumentWorkflowIdStepIdImport.update({
    path: '/LoanDocument/$workflowId/$stepId',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/FolderHierarchyRoute': {
      preLoaderRoute: typeof FolderHierarchyRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/addCatagory': {
      preLoaderRoute: typeof AddCatagoryLazyImport
      parentRoute: typeof rootRoute
    }
    '/adminDashboard': {
      preLoaderRoute: typeof AdminDashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/adminreport': {
      preLoaderRoute: typeof AdminreportLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedbyme': {
      preLoaderRoute: typeof AssignedbymeLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedtome': {
      preLoaderRoute: typeof AssignedtomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/catagoryList': {
      preLoaderRoute: typeof CatagoryListLazyImport
      parentRoute: typeof rootRoute
    }
    '/changepassword': {
      preLoaderRoute: typeof ChangepasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-user': {
      preLoaderRoute: typeof CreateUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/document': {
      preLoaderRoute: typeof DocumentLazyImport
      parentRoute: typeof rootRoute
    }
    '/documentemp': {
      preLoaderRoute: typeof DocumentempLazyImport
      parentRoute: typeof rootRoute
    }
    '/documents': {
      preLoaderRoute: typeof DocumentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/documenttempadd': {
      preLoaderRoute: typeof DocumenttempaddLazyImport
      parentRoute: typeof rootRoute
    }
    '/forgotpassword': {
      preLoaderRoute: typeof ForgotpasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/invite-user': {
      preLoaderRoute: typeof InviteUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/manage-user': {
      preLoaderRoute: typeof ManageUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/my-documents': {
      preLoaderRoute: typeof MyDocumentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/notification': {
      preLoaderRoute: typeof NotificationLazyImport
      parentRoute: typeof rootRoute
    }
    '/otp': {
      preLoaderRoute: typeof OtpLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/setNewPassword': {
      preLoaderRoute: typeof SetNewPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/userDashboard': {
      preLoaderRoute: typeof UserDashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/workflowadd': {
      preLoaderRoute: typeof WorkflowaddLazyImport
      parentRoute: typeof rootRoute
    }
    '/workflowtemp': {
      preLoaderRoute: typeof WorkflowtempLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedbymedetails/$workflowId': {
      preLoaderRoute: typeof AssignedbymedetailsWorkflowIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/fulldocument/$documntpath': {
      preLoaderRoute: typeof FulldocumentDocumntpathLazyImport
      parentRoute: typeof rootRoute
    }
    '/LoanDocument/$workflowId/$stepId': {
      preLoaderRoute: typeof LoanDocumentWorkflowIdStepIdImport
      parentRoute: typeof rootRoute
    }
    '/assignedtomedetails/$workflowId/$userId': {
      preLoaderRoute: typeof AssignedtomedetailsWorkflowIdUserIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  FolderHierarchyRouteRoute,
  AboutLazyRoute,
  AddCatagoryLazyRoute,
  AdminDashboardLazyRoute,
  AdminreportLazyRoute,
  AssignedbymeLazyRoute,
  AssignedtomeLazyRoute,
  CatagoryListLazyRoute,
  ChangepasswordLazyRoute,
  CreateUserLazyRoute,
  DocumentLazyRoute,
  DocumentempLazyRoute,
  DocumentsLazyRoute,
  DocumenttempaddLazyRoute,
  ForgotpasswordLazyRoute,
  InviteUserLazyRoute,
  LoginLazyRoute,
  ManageUserLazyRoute,
  MyDocumentsLazyRoute,
  NotificationLazyRoute,
  OtpLazyRoute,
  ProfileLazyRoute,
  RegisterLazyRoute,
  SetNewPasswordLazyRoute,
  UserDashboardLazyRoute,
  WorkflowaddLazyRoute,
  WorkflowtempLazyRoute,
  AssignedbymedetailsWorkflowIdLazyRoute,
  FulldocumentDocumntpathLazyRoute,
  LoanDocumentWorkflowIdStepIdRoute,
  AssignedtomedetailsWorkflowIdUserIdLazyRoute,
])

/* prettier-ignore-end */
