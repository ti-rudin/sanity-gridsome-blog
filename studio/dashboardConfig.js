export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61e715df331b821781c75d3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-x7zgua8m',
                  apiId: '3e98f176-ef2e-4d96-b6a6-3cf9fdd815cc'
                },
                {
                  buildHookId: '61e715e05445e418899b57e0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-a3gf7f1w',
                  apiId: 'd03da407-0406-412e-acf5-20e5c78f5fd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ti-rudin/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-a3gf7f1w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
