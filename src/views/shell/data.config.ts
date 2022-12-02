const envServerOptions: LabelValueOptions = [
  {
    label: 'hkpreweb',
    value: 'hkpreweb',
  },
  {
    label: 'thpreweb',
    value: 'thpreweb',
  },
];
const logTypeOptions: LabelValueOptions = [
  {
    label: 'UnhandledEx',
    value: 'UnhandledEx',
  },
  {
    label: 'PaymentGateway',
    value: 'PaymentGateway',
  },
];

export const maxArgNumber = 5;
export const configs = {
  checkDBLog: {
    command: 'python3 D:\\Tools\\JobsDBTool\\Resource\\findInFile.py',
    args: [
      {
        field: 'fieldArg0',
        label: '',
        required: true,
        component: 'Select',
        componentProps: {
          placeholder: 'Please select env',
          options: envServerOptions,
        },
        defaultValue: 'hkpreweb',
      },
      {
        field: 'fieldArg1',
        label: '',
        required: true,
        component: 'Input',
        componentProps: {
          placeholder: 'Please input keyword',
        },
        defaultValue: '',
      },
      {
        field: 'fieldArg2',
        label: '',
        required: false,
        component: 'Select',
        componentProps: {
          placeholder: 'Please select log type',
          options: logTypeOptions,
        },
        defaultValue: 'UnhandledEx',
      },
      {
        field: 'fieldArg3',
        label: '',
        required: false,
        component: 'DatePicker',
        componentProps: {
          valueFormat: 'YYYYMMDD',
        },
        defaultValue: '20111130',
      },
    ],
  },
};
