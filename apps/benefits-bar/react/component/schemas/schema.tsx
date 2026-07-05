export const schema = {
  title: "Barra de Benefícios",
  type: "object",
  properties: {
    benefits: {
      title: "Lista de Benefícios",
      type: "array",
      items: {
        type: "object",
        properties: {
          iconUrl: {
            title: "Ícone (URL da imagem)",
            type: "string",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          title: {
            title: "Título",
            type: "string"
          },
          subtitle: {
            title: "Subtítulo",
            type: "string"
          }
        }
      }
    }
  }
};
