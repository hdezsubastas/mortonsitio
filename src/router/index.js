import AboutUs from '@/views/about-us.vue'
import TermsPage from '@/views/terms-page.vue'
import BranchesPage from '@/views/branches-page.vue'
import BookmarkList from '@/views/admin/bookmark-list.vue'
import ChangePassword from '@/views/admin/change-password.vue'
import CheckoutPage from '@/views/admin/checkout-page.vue'
import CreateAccount from '@/views/admin/create-account.vue'
import DashboardPage from '@/views/admin/dashboard-page.vue'
import MyProfile from '@/views/admin/my-profile.vue'
import MyProperty from '@/views/admin/my-property.vue'
import PaymentPage from '@/views/admin/payment-page.vue'
import SubmitPropertyDashboard from '@/views/admin/submit-property-dashboard.vue'
import AgencyPage from '@/views/agencie/agency-page.vue'
import PageAgencies from '@/views/agencie/page-agencies.vue'
import AddAgent from '@/views/agent/add-agent.vue'
import AgentPage from '@/views/agent/agent-page.vue'
import EditAgent from '@/views/agent/edit-agent.vue'
import PageAgents from '@/views/agent/page-agents.vue'
import BlogDetail from '@/views/blog/blog-detail.vue'
import BlogPage from '@/views/blog/blog-page.vue'
import ComponentPage from '@/views/component-page.vue'
import ContactPage from '@/views/contact-page.vue'
import ErrorPage from '@/views/error-page.vue'
import FaqPage from '@/views/faq-page.vue'
import IndexEight from '@/views/index/index-eight.vue'
import IndexEleven from '@/views/index/index-eleven.vue'
import IndexFive from '@/views/index/index-five.vue'
import IndexFour from '@/views/index/index-four.vue'
import IndexMap from '@/views/index/index-map.vue'
import IndexNine from '@/views/index/index-nine.vue'
import IndexOne from '@/views/index/index-one.vue'
import IndexSeven from '@/views/index/index-seven.vue'
import IndexSix from '@/views/index/index-six.vue'
import IndexTen from '@/views/index/index-ten.vue'
import IndexThree from '@/views/index/index-three.vue'
import IndexTwo from '@/views/index/index-two.vue'
import IndexVideo from '@/views/index/index-video.vue'
import PricingPage from '@/views/pricing-page.vue'
import ClassicalLayoutWithMap from '@/views/property/classical-layout-with-map.vue'
import ClassicalLayoutWithSidebar from '@/views/property/classical-layout-with-sidebar.vue'
import ClassicalProperty from '@/views/property/classical-property.vue'
import CompareProperty from '@/views/property/compare-property.vue'
import GridLayoutWithMap from '@/views/property/grid-layout-with-map.vue'
import GridLayoutWithSidebar from '@/views/property/grid-layout-with-sidebar.vue'
import GridPage from '@/views/property/grid-page.vue'
import HalfMap2 from '@/views/property/half-map-2.vue'
import HalfMap from '@/views/property/half-map.vue'
import ListLayoutFull from '@/views/property/list-layout-full.vue'
import ListLayoutNew2 from '@/views/property/list-layout-new-2.vue'
import ListLayoutNew3 from '@/views/property/list-layout-new-3.vue'
import ListLayoutNew from '@/views/property/list-layout-new.vue'
import ListLayoutWithMap from '@/views/property/list-layout-with-map.vue'
import SingleProperty1 from '@/views/property/single-property-1.vue'
import SingleProperty2 from '@/views/property/single-property-2.vue'
import SingleProperty3 from '@/views/property/single-property-3.vue'
import SingleProperty4 from '@/views/property/single-property-4.vue'
import SubmitProperty from '@/views/property/submit-property.vue'
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
  {path: '/home-2', component: IndexTwo},
  {path: '/home-3', component: IndexThree},
  {path: '/home-4', component: IndexFour},
  {path: '/home-5', component: IndexFive},
  {path: '/home-6', component: IndexSix},
  {path: '/home-7', component: IndexSeven},
  {path: '/home-8', component: IndexEight},
  {path: '/home-9', component: IndexNine},
  {path: '/home-10', component: IndexTen},
  {path: '/home-11', component: IndexEleven},
  {path: '/antiguedades', component: AntiquesView},
  {path: '/joyeria', component: JewelsView},
  {path: '/vinos', component: WinesView},
  {path: '/cdmx', component: cdmxPage},
  {path: '/calendario', component: CalendarView},
  {path: '/arte-moderno', component: ModernView},
  {path: '/video', component: IndexVideo},
  {path: '/faqs', component: FaqsPage},
  {path: '/subasta', component: SingleAuctionPage},
  {path: '/historia', component: HistoryPage},
  {path: '/map', component: IndexMap},
  {path: '/agents', component: PageAgents},
  {path: '/agent-page', component: AgentPage},
  {path: '/agent-page/:id', component: AgentPage},
  {path: '/add-agent', component: AddAgent},
  {path: '/edit-agent', component: EditAgent},
  {path: '/responsabilidad-social', component: PageAgencies},
  {path: '/agency-page', component: AgencyPage},
  {path: '/agency-page/:id', component: AgencyPage},
  {path: '/compare-property', component: CompareProperty},
  {path: '/submit-property', component: SubmitProperty},
  {path: '/about-us', component: AboutUs},
  {path: '/blog', component: BlogPage},
  {path: '/como-vender', component: ComoVenderView},
  {path: '/como-comprar', component: ComoComprarView},
  {path: '/paris', component: parisPage},
  {path: '/blog-detail', component: BlogDetail},
  {path: '/blog-detail/:id', component: BlogDetail},
  {path: '/component', component: ComponentPage},
  {path: '/pricing', component: PricingPage},
  {path: '/faq', component: FaqPage},
  {path: '/404', component: ErrorPage},
  {path: '/contact', component: ContactPage},
  {path: '/dashboard', component: DashboardPage},
  {path: '/payment', component: PaymentPage},
  {path: '/my-profile', component: MyProfile},
  {path: '/create-account', component: CreateAccount},
  {path: '/checkout', component: CheckoutPage},
  {path: '/my-property', component: MyProperty},
  {path: '/bookmark-list', component: BookmarkList},
  {path: '/change-password', component: ChangePassword},
  {path: '/submit-property-dashboard', component: SubmitPropertyDashboard},
  {path: '/list-layout-new', component: ListLayoutNew},
  {path: '/list-layout-new-3', component: ListLayoutNew3},
  {path: '/list-layout-new-2', component: ListLayoutNew2},
  {path: '/list-layout-with-map', component: ListLayoutWithMap},
  {path: '/list-layout-full', component: ListLayoutFull},
  {path: '/grid-layout-with-sidebar', component: GridLayoutWithSidebar},
  {path: '/classical-layout-with-sidebar', component: ClassicalLayoutWithSidebar},
  {path: '/grid-layout-with-map', component:GridLayoutWithMap},
  {path: '/grid', component:GridPage},
  {path: '/classical-property', component:ClassicalProperty},
  {path: '/classical-layout-with-map', component:ClassicalLayoutWithMap},
  {path: '/half-map', component:HalfMap},
  {path: '/half-map-2', component:HalfMap2},
  {path: '/place-search', component:HalfMap2},
  {path: '/single-property-1', component:SingleProperty1},
  {path: '/single-property-1/:id', component:SingleProperty1},
  {path: '/single-property-2', component:SingleProperty2},
  {path: '/single-property-2/:id', component:SingleProperty2},
  {path: '/single-property-3', component:SingleProperty3},
  {path: '/single-property-3/:id', component:SingleProperty3},
  {path: '/single-property-4', component:SingleProperty4},
  {path: '/single-property-4/:id', component:SingleProperty4},
  {path: '/sucursales/', component: BranchesPage},
  {path: '/terminosyaviso/', component: TermsPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
