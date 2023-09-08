const config = {
  controlName: 'Nac Table',
  description: 'Editable Table for NAC',
  groupName: 'Presales Controls',
  fallbackDisableSubmit: false,
  standardProperties: {
    readOnly: false,
    required: false,
    description: true
  },
  version: '1.0',
  properties: {
    collection: {
      type: 'string',
      title: '[{"columnheader1":"Travel","columnheader2":"24/02/2023","columnheader3":"SGD","columnheader4":"324.0"},{"columnheader1":"Food","columnheader2":"25/02/2023","columnheader3":"USD","columnheader4":"23.0"}]'
    },
    value: {
      type: 'string',
      title: 'updatedJson',
      isValueField: true
    }
  }
};

export { config };
