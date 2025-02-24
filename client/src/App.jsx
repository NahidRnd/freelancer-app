import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './pages/CompleteProfile'
import AppLayout from './ui/AppLayout'
import OwnerDashboard from './pages/OwnerDashboard'
import Projects from './pages/Projects'
import Project from './pages/Project'
import { DarkModeProvider } from './context/DarkModeContext'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import FreelancerDashboard from './pages/FreelancerDashboard'
import OwnerLayout from './features/owner/OwnerLayout'
import Proposals from './pages/Proposals'
import SubmittedProjects from './pages/SubmittedProjects'
import ProtectedRoute from './ui/ProtectedRoute'
import NotAccess from './ui/notAccess'
import AdminLayout from './features/admin/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users'
import Home from './pages/Home'

const queryClient = new QueryClient()

function App() {


  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/complete-profile' element={<CompleteProfile />} />
        <Route path='/owner' element={<ProtectedRoute><OwnerLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<OwnerDashboard />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id' element={<Project />} />
        </Route>
        <Route path='/freelancer' element={<ProtectedRoute><FreelancerLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<FreelancerDashboard />} />
          <Route path='proposals' element={<Proposals />} />
          <Route path='projects' element={<SubmittedProjects />} />
        </Route>
        <Route path='/admin' element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='users' element={<Users />} />
          <Route path='projects' element={<SubmittedProjects />} />
          <Route path='proposals' element={<Proposals />} />

        </Route>
        <Route path='not-access' element={<NotAccess />} />
      </Routes>
     </QueryClientProvider>
    </DarkModeProvider> 
  )
}

export default App
