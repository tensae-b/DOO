/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WorkflowaAsignedByMeImport } from './routes/WorkflowaAsignedByMe'
import { Route as LoanDocumentStepIdImport } from './routes/LoanDocument.$stepId'

// Create Virtual Routes

const WorkflowtempLazyImport = createFileRoute('/workflowtemp')()
const WorkflowaddLazyImport = createFileRoute('/workflowadd')()
const UserDashboardLazyImport = createFileRoute('/userDashboard')()
const SetNewPasswordLazyImport = createFileRoute('/setNewPassword')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
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
const ComponentsLazyImport = createFileRoute('/components')()
const ChangePasswordLazyImport = createFileRoute('/changePassword')()
const AssignedtomedetailsLazyImport = createFileRoute('/assignedtomedetails')()
const AssignedbymedetailsLazyImport = createFileRoute('/assignedbymedetails')()
const AssignedTomeLazyImport = createFileRoute('/assignedTome')()
const AssignedBymeLazyImport = createFileRoute('/assignedByme')()
const AdminDashboardLazyImport = createFileRoute('/adminDashboard')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

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

const ComponentsLazyRoute = ComponentsLazyImport.update({
  path: '/components',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/components.lazy').then((d) => d.Route))

const ChangePasswordLazyRoute = ChangePasswordLazyImport.update({
  path: '/changePassword',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/changePassword.lazy').then((d) => d.Route),
)

const AssignedtomedetailsLazyRoute = AssignedtomedetailsLazyImport.update({
  path: '/assignedtomedetails',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/assignedtomedetails.lazy').then((d) => d.Route),
)

const AssignedbymedetailsLazyRoute = AssignedbymedetailsLazyImport.update({
  path: '/assignedbymedetails',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/assignedbymedetails.lazy').then((d) => d.Route),
)

const AssignedTomeLazyRoute = AssignedTomeLazyImport.update({
  path: '/assignedTome',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assignedTome.lazy').then((d) => d.Route))

const AssignedBymeLazyRoute = AssignedBymeLazyImport.update({
  path: '/assignedByme',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/assignedByme.lazy').then((d) => d.Route))

const AdminDashboardLazyRoute = AdminDashboardLazyImport.update({
  path: '/adminDashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/adminDashboard.lazy').then((d) => d.Route),
)

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const WorkflowaAsignedByMeRoute = WorkflowaAsignedByMeImport.update({
  path: '/WorkflowaAsignedByMe',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LoanDocumentStepIdRoute = LoanDocumentStepIdImport.update({
  path: '/LoanDocument/$stepId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/WorkflowaAsignedByMe': {
      id: '/WorkflowaAsignedByMe'
      path: '/WorkflowaAsignedByMe'
      fullPath: '/WorkflowaAsignedByMe'
      preLoaderRoute: typeof WorkflowaAsignedByMeImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/adminDashboard': {
      id: '/adminDashboard'
      path: '/adminDashboard'
      fullPath: '/adminDashboard'
      preLoaderRoute: typeof AdminDashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedByme': {
      id: '/assignedByme'
      path: '/assignedByme'
      fullPath: '/assignedByme'
      preLoaderRoute: typeof AssignedBymeLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedTome': {
      id: '/assignedTome'
      path: '/assignedTome'
      fullPath: '/assignedTome'
      preLoaderRoute: typeof AssignedTomeLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedbymedetails': {
      id: '/assignedbymedetails'
      path: '/assignedbymedetails'
      fullPath: '/assignedbymedetails'
      preLoaderRoute: typeof AssignedbymedetailsLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignedtomedetails': {
      id: '/assignedtomedetails'
      path: '/assignedtomedetails'
      fullPath: '/assignedtomedetails'
      preLoaderRoute: typeof AssignedtomedetailsLazyImport
      parentRoute: typeof rootRoute
    }
    '/changePassword': {
      id: '/changePassword'
      path: '/changePassword'
      fullPath: '/changePassword'
      preLoaderRoute: typeof ChangePasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/components': {
      id: '/components'
      path: '/components'
      fullPath: '/components'
      preLoaderRoute: typeof ComponentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-user': {
      id: '/create-user'
      path: '/create-user'
      fullPath: '/create-user'
      preLoaderRoute: typeof CreateUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/document': {
      id: '/document'
      path: '/document'
      fullPath: '/document'
      preLoaderRoute: typeof DocumentLazyImport
      parentRoute: typeof rootRoute
    }
    '/documentemp': {
      id: '/documentemp'
      path: '/documentemp'
      fullPath: '/documentemp'
      preLoaderRoute: typeof DocumentempLazyImport
      parentRoute: typeof rootRoute
    }
    '/documents': {
      id: '/documents'
      path: '/documents'
      fullPath: '/documents'
      preLoaderRoute: typeof DocumentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/documenttempadd': {
      id: '/documenttempadd'
      path: '/documenttempadd'
      fullPath: '/documenttempadd'
      preLoaderRoute: typeof DocumenttempaddLazyImport
      parentRoute: typeof rootRoute
    }
    '/forgotpassword': {
      id: '/forgotpassword'
      path: '/forgotpassword'
      fullPath: '/forgotpassword'
      preLoaderRoute: typeof ForgotpasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/invite-user': {
      id: '/invite-user'
      path: '/invite-user'
      fullPath: '/invite-user'
      preLoaderRoute: typeof InviteUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/manage-user': {
      id: '/manage-user'
      path: '/manage-user'
      fullPath: '/manage-user'
      preLoaderRoute: typeof ManageUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/my-documents': {
      id: '/my-documents'
      path: '/my-documents'
      fullPath: '/my-documents'
      preLoaderRoute: typeof MyDocumentsLazyImport
      parentRoute: typeof rootRoute
    }
    '/notification': {
      id: '/notification'
      path: '/notification'
      fullPath: '/notification'
      preLoaderRoute: typeof NotificationLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/setNewPassword': {
      id: '/setNewPassword'
      path: '/setNewPassword'
      fullPath: '/setNewPassword'
      preLoaderRoute: typeof SetNewPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/userDashboard': {
      id: '/userDashboard'
      path: '/userDashboard'
      fullPath: '/userDashboard'
      preLoaderRoute: typeof UserDashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/workflowadd': {
      id: '/workflowadd'
      path: '/workflowadd'
      fullPath: '/workflowadd'
      preLoaderRoute: typeof WorkflowaddLazyImport
      parentRoute: typeof rootRoute
    }
    '/workflowtemp': {
      id: '/workflowtemp'
      path: '/workflowtemp'
      fullPath: '/workflowtemp'
      preLoaderRoute: typeof WorkflowtempLazyImport
      parentRoute: typeof rootRoute
    }
    '/LoanDocument/$stepId': {
      id: '/LoanDocument/$stepId'
      path: '/LoanDocument/$stepId'
      fullPath: '/LoanDocument/$stepId'
      preLoaderRoute: typeof LoanDocumentStepIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  WorkflowaAsignedByMeRoute,
  AboutLazyRoute,
  AdminDashboardLazyRoute,
  AssignedBymeLazyRoute,
  AssignedTomeLazyRoute,
  AssignedbymedetailsLazyRoute,
  AssignedtomedetailsLazyRoute,
  ChangePasswordLazyRoute,
  ComponentsLazyRoute,
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
  ProfileLazyRoute,
  RegisterLazyRoute,
  SetNewPasswordLazyRoute,
  UserDashboardLazyRoute,
  WorkflowaddLazyRoute,
  WorkflowtempLazyRoute,
  LoanDocumentStepIdRoute,
})

/* prettier-ignore-end */
