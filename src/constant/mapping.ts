
/**  球鞋标签 */
export const SNKRS_LABEL = [
  { label: '高帮', value: 'og' },
  { label: '中帮', value: 'mid' },
  { label: '低帮', value: 'low' },
  { label: 'dunk', value: 'dunk' },
  { label: '椰子', value: 'yeezy' },
  { label: '皮鞋', value: 'leather' },
  { label: '其他', value: 'other' }
]

/** 球鞋尺寸 */
export const SNKRS_SIZE = [
  '41',
  '42',
  '42.5',
  '43',
  '43.5',
  '44',
  '44.5',
  '45',
  '45.5'
]

/** 球鞋状态 */
export const SNKRS_STATE = [
  { label: '已购买', value: '1' },
  { label: '预备购买', value: '2' },
  { label: '已售出', value: '3' },
  { label: '预备售出', value: '4' },
  { label: '售出中', value: '5' },
  { label: '购买在途', value: '6' },
  { label: '出售在途', value: '7' },
]

/** 球鞋操作 */
export const SNKRS_OPTIONS = [
  '自穿', '出售', '二次出售'
]

export const SNKRS_SOURCE = [
  { label: '得物', value: 'dewu' },
  { label: '95分', value: '95' },
  { label: '淘宝', value: 'taobao' },
  { label: '京东', value: 'jd' },
  { label: '天猫', value: 'tmall' },
]

/** 球鞋分类 */
export const SNKRS_TYPE = [
  {
    label: ' 耐克',
    value: 'Nick',
    children: [
      {
        label: 'AJ1',
        value: 'AJ1',
        children: [
          { label: 'AJ1-高帮', value: 'AJ1-og' },
          { label: 'AJ1-中帮', value: 'AJ1-mid' },
          { label: 'AJ1-低帮', value: 'AJ1-low' }
        ]
      },
      { label: 'AJ3', value: 'AJ3' },
      { label: 'AJ4', value: 'AJ4' },
      { label: 'AJ5', value: 'AJ5' },
      { label: 'AJ6', value: 'AJ6' },
      { label: 'AJ11', value: 'AJ11' },
      { label: 'AJ13', value: 'AJ13' },
      { label: 'Foamposite', value: 'Foamposite' },
    ],
  },
  {
    label: '阿迪达斯',
    value: 'Adidas',
    children: [
      {
        label: '椰子-Yeezy',
        value: 'Yeezy',
        children: [
          { label: '椰子 350', value: 'Yeezy-350' },
          { label: '椰子 500', value: 'Yeezy-500' },
        ]

      },
      {
        label: '贝壳头',
        value: 'Shell-toe'
      },
    ],
  },
  {
    value: 'Leather',
    label: '皮鞋',
  },
];
