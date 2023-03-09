var rule = {
  title: 'FreeOK',
  host: 'https://www.freeok.vip',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: 'vodsearch/**----------fypage---.html',
  class_name: '电影&剧集&动漫&综艺',
  class_url: '1&2&3&4',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'PC_UA',
    // "Cookie": ""
  },
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: 'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  搜索: '.module-card-item.module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  一级: 'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    "title": "h1&&Text;.module-info-tag-link:eq(2)&&Text",
    "img": ".module-item-pic&&img&&data-original",
    "desc": ".module-info-item-content(3)&&Text;;;.module-info-item-content:eq(1)&&a&&Text;.module-info-item-content:eq(0)&&a&&Text",
    "content": ".module-info-introduction-content&&Text",
    "tabs": "#y-playList&&.module-tab-item.tab-item",
    "lists": ".module-list:eq(#id) a"
  },
  }
