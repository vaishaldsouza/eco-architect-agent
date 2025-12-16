export const queryInventoryTool = {
  functionDeclarations: [
    {
      name: "queryInventory",
      description: "Search the sustainable inventory for a specific item name.",
      parametersJsonSchema: {
        type: "object",
        properties: {
          itemName: { 
            type: "string", 
            description: "The name of the furniture item (e.g., 'Nordic Chair')" 
          }
        },
        required: ["itemName"]
      }
    }
  ]
};