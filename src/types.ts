export interface FieldData {
  content: string;
  validations: {
    [key: string]: any; // You can specify the validation properties here
  };
}

export interface FormData {
  [key: string]: {
    content: string;
    validations: {
      [key: string]: any; // You can specify the validation properties here
    };
  };
}

export interface FieldError {
  messages: string[];
  dirty?: boolean;
  error?: boolean;
}

export interface INotification {
  content?: string;
  type?: string;
}
