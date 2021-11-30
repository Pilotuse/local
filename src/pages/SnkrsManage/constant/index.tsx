type Size = 'small' | 'default' | 'medium' | 'large';

export interface ModalconfirmProps {
  color?: string;
  style?: React.CSSProperties;
  size?: Size;
  title: string;
  children?: React.ReactNode | null;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const DEFAULT_COMFIRM: ModalconfirmProps = {
  title: '',
  children: null,
};
