export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd59048563ff7354f6b2612',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-vfjtwx6r',
                  apiId: '58a9be22-9620-4b58-a279-5922024b7410'
                },
                {
                  buildHookId: '5dd59048473153b0dadeb265',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-hrva8xnw',
                  apiId: 'e4c3e199-a50b-4d26-a2b4-809a68efc59a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielislas3/sanity-gatsby-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-hrva8xnw.netlify.com', category: 'apps'}
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
