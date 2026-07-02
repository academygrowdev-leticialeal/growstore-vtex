export const schema = {
  title: "Editor de Categorias",
  description: "Configure as categorias da Home",
  type: "object",
  properties: {
    categories: {
      title: "Lista de Categorias",
      description: "Lista de Categorias",
      type: "array",
      minItems: 9,
      maxItems: 9,
      items: {
        type: "object",
        properties: {
          icon: { title: "Ícone (Emoji)", type: "string" },
          text: { title: "Nome da Categoria", type: "string" }
        }
      }
    }
  }
};
