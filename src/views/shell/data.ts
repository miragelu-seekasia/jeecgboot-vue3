import { FormSchema } from '/@/components/Form';
import { maxArgNumber, configs } from './data.config';

const shellTemplateOptions: LabelValueOptions = [
  {
    label: 'checkDBLog',
    value: 'checkDBLog',
  },
];

export const baseSetschemas: FormSchema[] = [
  {
    label: 'Template',
    field: 'shellTemplate',
    component: 'Select',
    componentProps: ({ formModel, formActionType }) => {
      return {
        placeholder: 'Please select a shell template to exec ...',
        options: shellTemplateOptions,
        onChange: (e: string) => {
          formModel.command = configs[e].command;
          const { removeSchemaByFiled, appendSchemaByField } = formActionType;

          const args = configs[e].args;
          for (let i = 0; i < maxArgNumber; i++) {
            removeSchemaByFiled('fieldArg' + i);
          }
          for (const index in args) {
            appendSchemaByField(
              {
                ...args[index],
                colProps: {
                  span: 24,
                  offset: 2,
                },
              },
              ''
            );
            if (args[index].defaultValue) {
              formModel['fieldArg' + index] = args[index].defaultValue;
            }
          }
        },
      };
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'command',
    label: 'Command',
    required: true,
    component: 'Input',
  },
  {
    field: 'divider-linked',
    component: 'Divider',
    label: 'Params setting',
  },
];
