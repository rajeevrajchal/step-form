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
    type: "radio",
    field: "gender",
    label: "Your Gender",
    options: [
      {
        label: "male",
        value: "male",
      },
      {
        label: "female",
        value: "female",
      },
      {
        label: "others",
        value: "others",
      },
    ],
  },
  {
    type: "select",
    field: "employment",
    label: "Employement status",
    options: [
      {
        label: "Student",
        value: "student",
      },
      {
        label: "Self Employed",
        value: "self-employed",
      },
    ],
  },
  {
    type: "switch",
    field: "employed_status",
    label: "Employed Status",
    options: [
      {
        label: "No",
        value: "no",
      },
      {
        label: "Yes",
        value: "yes",
      },
    ],
    defaultActive: true,
    children: [
      {
        type: "checkbox",
        field: "employed_type",
        label: "Employed Type",
        dependent: true,
        trigger: "employed_status",
        options: [
          {
            label: "No",
            value: "no",
          },
          {
            label: "Yes",
            value: "yes",
          },
        ],
      },
      {
        type: "switch",
        field: "new_jon",
        label: "Want to work on new job",
        dependent: true,
        trigger: "employed_status",
        children: [],
        options: [
          {
            label: "Yes",
            value: "freelance",
          },
          {
            label: "office",
            value: "office",
          },
        ],
      },
    ],
  },
  {
    type: "checkbox",
    field: "married",
    label: "Are you married",
    options: [
      {
        label: "No",
        value: "no",
      },
      {
        label: "Yes",
        value: "yes",
      },
    ],
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
