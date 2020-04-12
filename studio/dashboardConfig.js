export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e92cf0fe757e45de1262643',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-d3b87jrs',
                  apiId: 'ace4012b-6454-47d2-b7be-2ded384142e1'
                },
                {
                  buildHookId: '5e92cf1029b6af774e304354',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gqn2rfxt',
                  apiId: '0f11ab70-d3fc-414f-820c-0477d40b59fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Man4Life/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gqn2rfxt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
