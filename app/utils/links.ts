import type { NavigationMenuItem } from '@nuxt/ui'

export const socialLinks = [
  {
    url: 'https://www.linkedin.com/in/beingmomen/',
    icon: 'i-skill-icons-linkedin',
    label: 'Linkedin Profile'
  },
  {
    url: 'https://github.com/beingmomen',
    icon: 'i-skill-icons-github-dark',
    label: 'Github Profile'
  },
  {
    url: 'https://qabilah.com/profile/beingmomen/posts',
    icon: 'i-custom-qabilah',
    label: 'Qabilah Profile'
  }
  // {
  //   url: 'https://twitter.com/beingmomen',
  //   icon: 'i-devicon-twitter',
  //   label: 'Twitter Profile'
  // },
  // {
  //   url: 'https://www.facebook.com/beingmomen/',
  //   icon: 'i-devicon-facebook',
  //   label: 'Facebook Profile'
  // },
  // {
  //   url: 'https://www.instagram.com/beingmomen/',
  //   icon: 'i-skill-icons-instagram',
  //   label: 'Instagram Profile'
  // }
]

export const navLinks: NavigationMenuItem[] = [{
  label: 'الرئيسية',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'المشاريع',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'القرارات المعمارية',
  icon: 'i-lucide-landmark',
  to: '/adr'
}, {
  label: 'المقالات',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'قم بتقييمنا',
  icon: 'i-lucide-star',
  to: '/testimonial'
}, {
  label: 'تواصل معنا',
  icon: 'i-lucide-mail',
  to: '/contact'
}, {
  label: 'عن الموقع',
  icon: 'i-lucide-user',
  to: '/about'
}]
