export const projectList = rootState.apollo.watchQuery({
    query: gql`
      query projectsList{
        projects {
          _id
          name
        }
      }
    `,
  })