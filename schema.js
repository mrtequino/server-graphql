const typeDefs = `
type Curso{
    id:ID!
    titulo:String!
}

type Query{
  cursos: [Curso]
}
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    cursos: () => [],
  },
};

module.exports = {typeDefs, resolvers};
