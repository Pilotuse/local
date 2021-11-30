export interface ModalconfirmProps {
  title: string;
  children: React.ReactNode | null;
}

export const DEFAULT_COMFIRM: ModalconfirmProps = {
  title: '',
  children: null,
};
