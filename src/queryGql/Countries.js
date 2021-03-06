import { gql } from 'apollo-boost';

const countries = gql`
query {
    countries{
        name
        emoji
        capital
        continent {
          name
        }
        languages{
          code
          name
        }
        phone
        native
        code
        currency   
    }
}
`

export { countries }