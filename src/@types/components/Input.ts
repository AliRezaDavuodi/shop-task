export interface InputProps {
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  extraInputClass?: string;
  extraLabelClass?: string;
  extraContainerClass?: string;
  children?: React.ReactElement;
}
