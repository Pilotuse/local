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


export interface DefaultProp {
  isTag: boolean;
  tagColor: string;
  span: number;
  locale: string;
  suffix: string;
  value: string;
  countUp: boolean;
}

export const defaultKanbanProps: DefaultProp[] = [
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.count',
    suffix: '双',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.countPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.highPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.lowPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.averagePrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.cycle',
    suffix: '天',
    value: '123123123',
    countUp: true,
  },
];

export const DEFAULT_KEYS = [
  { key: '1', title: '现有球鞋', },
  { key: '2', title: '计划球鞋' },
  { key: '3', title: '已售球鞋' },
  // { key: '4', title: '预备售出' },
  // { key: '6', title: '购买在途', },
  // { key: '7', title: '出售在途' },
]


export const DefaultSearchParams = {
  page: 1,
  pageSize: 10,
}
