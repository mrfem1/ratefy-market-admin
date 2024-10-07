import { createRouter, createWebHistory } from 'vue-router'
import SuperAdmin from '../views/SuperadminView.vue'
import DepartmentView from '../views/DepartmentView.vue'
import SudoView from '../views/SudoView.vue'
import StaffView from '../views/StaffView.vue'

import SingleUserView from '../views/AdminHome/SingleUserView.vue'
import ActionView from '../views/SuperHome/ActionView.vue'
import EmployView from '../views/SuperHome/EmployView.vue'
import SudostaffView from '../views/SuperHome/SudostaffView.vue'
import TaskView from '../views/SuperHome/TaskView.vue'
import WalletsView from '../views/SuperHome/WalletsView.vue'
import SudoHomeView from '../views/SuperHome/SudoHomeView.vue'
import AdminHomeView from '../views/AdminHome/AdminHomeView.vue'
import AdminsHomeView from '../views/AdminHome/AdminsHomeView.vue'
import CreateWalletView from '../views/AdminHome/CreateWalletView.vue'
import NotificationView from '../views/AdminHome/NotificationView.vue'
import OrderView from '../views/AdminHome/OrderView.vue'
import ListOfUsersView from '../views/AdminHome/ListOfUsersView.vue'
import TicketView from '../views/AdminHome/TicketView.vue'
import OptionsView from '../views/AdminHome/OptionsView.vue'
import OfferSingleView from '../views/AdminHome/OfferSingleView.vue'
import AuditHomeView from '../views/AdminHome/AuditHomeView.vue'
import RequirementView from '../views/AdminHome/RequirementView.vue'
import TrailHomeView from '@/views/AdminHome/TrailHomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dept',
      component: DepartmentView
    },
    {
      path: '/home',
      name: 'home',
      component: SuperAdmin
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffView
    },
    {
      path: '/sudo',
      name: 'sudo',
      component: SudoView,
      children: [
        {
          path: '/sudo-action',
          name: 'sudo-action',
          component: ActionView
        },
        {
          path: '/sudo-employ',
          name: 'sudo-employ',
          component: EmployView
        },
        {
          path: '/sudo-staff',
          name: 'sudo-staff',
          component: SudostaffView
        },
        {
          path: '/sudo-task',
          name: 'sudo-task',
          component: TaskView
        },
        {
          path: '/sudo-wallet',
          name: 'sudo-wallet',
          component: WalletsView
        },
        {
          path: '/sudo-home',
          name: 'sudo-home',
          component: SudoHomeView
        },
      ]
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdminHomeView,
      children: [
        // {
        //   path: '/worker',
        //   name: 'worker',
        //   component: AdminsHomeView 
        // },
        {
          path: '/adminhome',
          name: 'adminhome',
          component: AdminsHomeView 
        },
        {
          path: '/createwallet',
          name: 'createwallet',
          component: CreateWalletView 
        },
        {
          path: '/notification',
          name: 'notification',
          component: NotificationView 
        },
        {
          path: '/order',
          name: 'order',
          component: OrderView 
        },
        {
          path: '/audit',
          name: 'audit',
          component: AuditHomeView 
        },
        {
          path: '/listofusers',
          name: 'listofusers',
          component: ListOfUsersView 
        },
        {
          path: '/ticket',
          name: 'ticket',
          component: TicketView 
        },
        {
          path: '/options/:uuid/',
          name: 'options',
          component: OptionsView 
        },
        {
          path: 'singleuser/:uuid/',
          name: 'singleuser',
          component: SingleUserView
        },
        {
          path: 'offersingle/:session/:acceptance',
          name: 'offersingle',
          component: OfferSingleView
        },
        {
          path: '/requirement/:uuid/',
          name: 'requirements',
          component: RequirementView 
        },
        {
          path: '/trail/:uuid/',
          name: 'trail',
          component: TrailHomeView 
        }
      ]
    }
    
  ]
})

export default router
