// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    type: "text",
    field: "name",
    label: "User's name",
  },
  {
    type: "number",
    field: "number",
    label: "User's age",
  },
  {
    type: "array",
    field: "address",
    label: "User's label",
    children: [
      {
        type: "text",
        field: "state",
        label: "State",
      },
      {
        type: "text",
        field: "city",
        label: "City",
      },
    ],
  },
];
