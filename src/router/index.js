import TermsPage from '@/views/terms-page.vue'
import BranchesPage from '@/views/branches-page.vue'
import CheckoutPage from '@/views/admin/checkout-page.vue'
import CreateAccount from '@/views/admin/create-account.vue'
import PageAgencies from '@/views/agencie/page-agencies.vue'
import AddAgent from '@/views/agent/add-agent.vue'
import EditAgent from '@/views/agent/edit-agent.vue'
import ComponentPage from '@/views/component-page.vue'
import ContactPage from '@/views/contact-page.vue'
import ErrorPage from '@/views/error-page.vue'
import IndexOne from '@/views/index/index-one.vue'
import PricingPage from '@/views/pricing-page.vue'
import AntiquesView from '@/views/departments/page-antiques.vue'
import JewelsView from '@/views/departments/page-jewels.vue'
import ModernView from '@/views/departments/page-modern.vue'
import WinesView from '@/views/departments/page-wines.vue'
import CalendarView from '@/views/page-calendar.vue'
import ComoVenderView from '@/views/como-vender.vue'
import ComoComprarView from '@/views/como-comprar.vue'
import cdmxPage from '@/views/sucursales/cdmx-page.vue'
import parisPage from '@/views/sucursales/paris-page.vue'
import FaqsPage from '@/views/faqs-page.vue'
import SingleAuctionPage from '@/views/auctions/single-auction.vue'
import HistoryPage from '@/views/history-page.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: IndexOne},
  {path: '/antiguedades', component: AntiquesView},
  {path: '/joyeria', component: JewelsView},
  {path: '/vinos', component: WinesView},
  {path: '/cdmx', component: cdmxPage},
  {path: '/calendario', component: CalendarView},
  {path: '/arte-moderno', component: ModernView},
  {path: '/faqs', component: FaqsPage},
  {path: '/subasta/:sub', component: SingleAuctionPage},
  {path: '/historia', component: HistoryPage},
  {path: '/add-agent', component: AddAgent},
  {path: '/edit-agent', component: EditAgent},
  {path: '/responsabilidad-social', component: PageAgencies},
  {path: '/como-vender', component: ComoVenderView},
  {path: '/como-comprar', component: ComoComprarView},
  {path: '/paris', component: parisPage},
 // {path: '/blog-detail/:id', component: BlogDetail},
  {path: '/component', component: ComponentPage},
  {path: '/pricing', component: PricingPage},
  {path: '/404', component: ErrorPage},
  {path: '/contact', component: ContactPage},
  {path: '/create-account', component: CreateAccount},
  {path: '/checkout', component: CheckoutPage},
  {path: '/sucursales/', component: BranchesPage},
  {path: '/terminosyaviso/', component: TermsPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
