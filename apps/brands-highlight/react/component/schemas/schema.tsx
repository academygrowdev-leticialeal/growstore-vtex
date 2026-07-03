export const schema = {
  title: "Nossas Marcas",
  type: "object",
  properties: {
    brands: {
      title: "Lista de Marcas",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { title: "Nome da Marca", type: "string" },
          description: { title: "Descrição", type: "string" },
          link: { title: "Link", type: "string" }
        }
      }
    }
  }
}